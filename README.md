## 📡 WebRTC - Tutorial

webRTC 활용 1:1 화상회의 구현 튜토리얼 입니다.

Firebase, Viagenie 계정만 있으면 구현 가능합니다.

## 🔨 Server

**Signaling Serve**r : Firebase

**STUN** : stun.l.google.com:19302

**TURN** : numb.viagenie.ca

## 💻 Setting

Firebase, Viagenie 계정을 생성 한 뒤 **js/index.js** 를 본인 계정에 맞게 수정합니다.

```javascript
var config = {
    apiKey: "사용자 정보",
    authDomain: "사용자 정보",
    databaseURL: "사용자 정보",
    projectId: "사용자 정보",
    storageBucket: "사용자 정보",
    messagingSenderId: "사용자 정보",
    appId: "사용자 정보",
    measurementId: "사용자 정보"
};
```

---

```javascript
var servers = {
    'iceServers': [{
        'urls': 'stun:stun.services.mozilla.com'
    }, {
        'urls': 'stun:stun.l.google.com:19302'
    }, {
        'urls': 'turn:numb.viagenie.ca',
        'credential': '사용자 비밀번호',
        'username': '사용자 아이디'
    }]
};
```

## License

MIT License

Copyright (c) 2017 David Marcus

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.