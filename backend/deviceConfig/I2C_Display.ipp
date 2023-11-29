#include <Arduino.h>
#include <esp_now.h>
#include <WiFi.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <FirebaseESP8266.h>

#define LED 15
#define DEEP_SLEEP_TIME_SECONDS 10

int ledState = LOW;
long remembertime = 0;
const long duration = 1000;
bool flag = false;
LiquidCrystal_I2C lcd(0x27, 16, 2);

typedef struct struct_message
{
    char a[20];
} struct_message;

struct_message myData;

const char *FIREBASE_HOST = "nest-native-iot-smart-dustbin.firebaseio.com";
const char *FIREBASE_AUTH = "AIzaSyArH6jBeAszZsEly-b-3d6qNwRbPxPPPBA";

FirebaseData firebaseData;

void OnDataRecv(const uint8_t *mac, const uint8_t *incomingData, int len)
{
    memcpy(&myData, incomingData, sizeof(myData));
    flag = true;
}

void OnFirebaseDataChange(const String &path)
{
    Serial.println("Firebase data changed: " + path);
    if (path == "/statusMessage")
    {
        String statusMessage = Firebase.getString(firebaseData, path);
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print(statusMessage);
        flag = true;
    }
}

void setup()
{
    Serial.begin(9600);
    pinMode(LED, OUTPUT);
    WiFi.mode(WIFI_STA);

    // Initialize Firebase
    Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
    Firebase.streamCallback(OnFirebaseDataChange);

    if (esp_now_init() != ESP_OK)
    {
        Serial.println("Error initializing ESP-NOW");
        return;
    }

    esp_now_register_recv_cb(OnDataRecv);

    lcd.init();
    lcd.backlight();
    pinMode(LED, OUTPUT);

    esp_sleep_enable_timer_wakeup(DEEP_SLEEP_TIME_SECONDS * 1000000);
}

void loop()
{
    if (flag == true)
    {
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print(myData.a);

        if ((millis() - remembertime) >= duration)
        {
            remembertime = millis();

            if (ledState == LOW)
            {
                ledState = HIGH;
            }
            else
            {
                ledState = LOW;
            }

            digitalWrite(LED, ledState);
        }

        flag = false;
        delay(500);
    }
    else
    {
        digitalWrite(LED, LOW);
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print("STATUS : EMPTY");

        // Enter deep sleep mode
        lcd.noBacklight(); // Turn off backlight before entering deep sleep
        delay(100);
        esp_deep_sleep_start();

        delay(500);
    }

    Firebase.loop();
    delay(100);
}
