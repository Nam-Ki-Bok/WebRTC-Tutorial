//Create an account on Firebase, and use the credentials they give you in place of the following
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

firebase.initializeApp(config);

var database = firebase.database().ref();
var yourVideo = document.getElementById("yourVideo");
var friendsVideo = document.getElementById("friendsVideo");
var yourId = Math.floor(Math.random() * 1000000000);
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

var pc = new RTCPeerConnection(servers);
pc.onicecandidate = (event => event.candidate ? sendMessage(yourId, JSON.stringify({
    'ice': event.candidate
})) : console.log("Sent All Ice"));
pc.onaddstream = (event => friendsVideo.srcObject = event.stream);

function sendMessage(senderId, data) {
    var msg = database.push({
        sender: senderId,
        message: data
    });
    msg.remove();
}

function readMessage(data) {
    var msg = JSON.parse(data.val().message);
    var sender = data.val().sender;
    if (sender != yourId) {
        if (msg.ice != undefined)
            pc.addIceCandidate(new RTCIceCandidate(msg.ice));
        else if (msg.sdp.type == "offer")
            pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
            .then(() => pc.createAnswer())
            .then(answer => pc.setLocalDescription(answer))
            .then(() => sendMessage(yourId, JSON.stringify({
                'sdp': pc.localDescription
            })));
        else if (msg.sdp.type == "answer")
            pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
    }
};

database.on('child_added', readMessage);

function showMyFace() {
    navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
        .then(stream => yourVideo.srcObject = stream)
        .then(stream => pc.addStream(stream));
}

function showFriendsFace() {
    pc.createOffer()
        .then(offer => pc.setLocalDescription(offer))
        .then(() => sendMessage(yourId, JSON.stringify({
            'sdp': pc.localDescription
        })));
}