## π‘ WebRTC - Tutorial

webRTC νμ© 1:1 νμνμ κ΅¬ν νν λ¦¬μΌ μλλ€.

Firebase, Viagenie κ³μ λ§ μμΌλ©΄ κ΅¬ν κ°λ₯ν©λλ€.

## π¨ Server

**Signaling Serve**r : Firebase

**STUN** : stun.l.google.com:19302

**TURN** : numb.viagenie.ca

## π» Setting

Firebase, Viagenie κ³μ μ μμ± ν λ€ **js/index.js** λ₯Ό λ³ΈμΈ κ³μ μ λ§κ² μμ ν©λλ€.

```javascript
var config = {
    apiKey: "μ¬μ©μ μ λ³΄",
    authDomain: "μ¬μ©μ μ λ³΄",
    databaseURL: "μ¬μ©μ μ λ³΄",
    projectId: "μ¬μ©μ μ λ³΄",
    storageBucket: "μ¬μ©μ μ λ³΄",
    messagingSenderId: "μ¬μ©μ μ λ³΄",
    appId: "μ¬μ©μ μ λ³΄",
    measurementId: "μ¬μ©μ μ λ³΄"
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
        'credential': 'μ¬μ©μ λΉλ°λ²νΈ',
        'username': 'μ¬μ©μ μμ΄λ'
    }]
};
```

## License

MIT License

Copyright (c) 2021 BOKS

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
