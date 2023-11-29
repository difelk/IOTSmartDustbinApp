#include <esp_now.h>
#include <WiFi.h>
#include <Servo.h>
#include <FirebaseESP8266.h>
#include <FirebaseJson.h>
#include <TimeLib.h>

#define TRIGGER_PIN_1 13
#define ECHO_PIN_1 12
#define TRIGGER_PIN_2 18
#define ECHO_PIN_2 5
#define LED 25

const char *FIREBASE_HOST = "nest-native-iot-smart-dustbin.firebaseio.com";
const char *FIREBASE_AUTH = "AIzaSyArH6jBeAszZsEly-b-3d6qNwRbPxPPPBA";

const char *WIFI_SSID = "Dialog 4G";
const char *WIFI_PASSWORD = "Matttuck18";

int ledState = LOW;
long remembertime = 0;
const long duration = 1000;

Servo myservo;

uint8_t broadcastAddress[] = {0xCC, 0xDB, 0xA7, 0x69, 0x1B, 0xB0};

esp_now_peer_info_t peerInfo;

FirebaseData firebaseData;
FirebaseJson json;

float distance_1;
unsigned long duration_1;
float distance_2;
unsigned long duration_2;

void OnDataSent(const uint8_t *mac_addr, esp_now_send_status_t status)
{
    Serial.print("\r\nLast Packet Send Status:\t");
    Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Delivery Success" : "Delivery Fail");
}

void OnFirebaseDataChange(const String &path)
{
    Serial.println("Firebase data changed: " + path);
    if (path == "/lidStatus")
    {
        // Handle lid status change from Firebase
        String lidStatus = Firebase.getString(firebaseData, path);
        if (lidStatus == "LID_OPEN")
        {
            // open the lid
            myservo.write(180);
        }
        else if (lidStatus == "LID_CLOSE")
        {
            // close the lid
            myservo.write(90);
        }
        else
        {
            Serial.println("Unsupported lid status: " + lidStatus);
        }
    }
}

void ultasonicReading_1()
{
    digitalWrite(TRIGGER_PIN_1, LOW);
    delayMicroseconds(2);
    digitalWrite(TRIGGER_PIN_1, HIGH);
    delayMicroseconds(10);
    digitalWrite(TRIGGER_PIN_1, LOW);

    duration_1 = pulseIn(ECHO_PIN_1, HIGH);
    distance_1 = duration_1 * 0.034 / 2;
}

void ultrasonicReading_2()
{
    digitalWrite(TRIGGER_PIN_2, LOW);
    delayMicroseconds(2);
    digitalWrite(TRIGGER_PIN_2, HIGH);
    delayMicroseconds(10);
    digitalWrite(TRIGGER_PIN_2, LOW);

    duration_2 = pulseIn(ECHO_PIN_2, HIGH);
    distance_2 = duration_2 * 0.034 / 2;
}

void setup()
{
    Serial.begin(9600);
    pinMode(TRIGGER_PIN_1, OUTPUT);
    pinMode(ECHO_PIN_1, INPUT);
    pinMode(TRIGGER_PIN_2, OUTPUT);
    pinMode(ECHO_PIN_2, INPUT);
    pinMode(LED, OUTPUT);

    myservo.attach(26);

    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

    Serial.print("Connecting to Wi-Fi");
    while (WiFi.status() != WL_CONNECTED)
    {
        Serial.print(".");
        delay(300);
    }
    Serial.println();
    Serial.print("Connected with IP: ");
    Serial.println(WiFi.localIP());
    Serial.println();

    WiFi.mode(WIFI_STA);

    if (esp_now_init() != ESP_OK)
    {
        Serial.println("Error initializing ESP-NOW");
        return;
    }

    esp_now_register_send_cb(OnDataSent);

    memcpy(peerInfo.peer_addr, broadcastAddress, 6);
    peerInfo.channel = 0;
    peerInfo.encrypt = false;

    if (esp_now_add_peer(&peerInfo) != ESP_OK)
    {
        Serial.println("Failed to add peer");
        return;
    }

    configTime(0, 0, "pool.ntp.org", "time.nist.gov");
    Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
    Firebase.streamCallback(OnFirebaseDataChange);
}

void loop()
{
    ultasonicReading_1();
    ultrasonicReading_2();

    if (distance_1 < 10)
    {
        struct tm timeinfo;
        if (!getLocalTime(&timeinfo))
        {
            Serial.println("Failed to obtain time");
            return;
        }

        char currentDate[11];
        char currentTime[9];
        snprintf(currentDate, sizeof(currentDate), "%04d-%02d-%02d", timeinfo.tm_year + 1900, timeinfo.tm_mon + 1, timeinfo.tm_mday);
        snprintf(currentTime, sizeof(currentTime), "%02d:%02d:%02d", timeinfo.tm_hour, timeinfo.tm_min, timeinfo.tm_sec);

        json.clear();
        json.add("date", currentDate);
        json.add("time", currentTime);
        json.add("status", myservo.read() == 180 ? "LID_OPEN" : "LID_CLOSE");
        json.add("percentage", static_cast<float>(distance_1));

        Firebase.pushString(firebaseData, "/binData", json.raw());

        myservo.write(90);

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

        Serial.println("Sent with success");
    }
    else
    {
        digitalWrite(LED, LOW);
    }

    if (distance_2 < 10 && distance_1 > 10)
    {
        myservo.write(180);
        Serial.println("lid opened");
        Serial.println(distance_2);
        digitalWrite(LED, LOW);
    }
    else
    {
        myservo.write(90);
    }

    delay(500);
    Firebase.loop();
}
