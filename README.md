Routes

GET  https://zenbitcomentsapi.onrender.com/api/messages
All messages

GEt https://zenbitcomentsapi.onrender.com/api/messages/:messageId
Message by ID

Example GEt https://zenbitcomentsapi.onrender.com/api/messages/1
response : {
    "id": 1,
    "name": "max",
    "email": "max.max@gmail.com",
    "message": "hello",
    "created": "2024-04-03T11:39:36.000Z"
}

POST https://zenbitcomentsapi.onrender.com/api/messages
reqest body: {
    "name": "",
        "email": "",
        "message": ""
}

DELETE https://zenbitcomentsapi.onrender.com/api/messages:messageID

Example DELETE https://zenbitcomentsapi.onrender.com/api/messages/1
response : {
    "message": "Message deleted"
}
