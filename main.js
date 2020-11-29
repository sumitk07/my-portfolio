const firebaseConfig = {
  apiKey: "AIzaSyCWn5PPFtLaTQNYpghQNXEi2xlECUYtwkY",
  authDomain: "portfolio-66e2f.firebaseapp.com",
  databaseURL: "https://portfolio-66e2f.firebaseio.com",
  projectId: "portfolio-66e2f",
  storageBucket: "portfolio-66e2f.appspot.com",
  messagingSenderId: "551972811791",
  appId: "1:551972811791:web:6cf5f61af5ce33b15c1f7a",
  measurementId: "G-QT148CGQWK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let messagesRef = firebase.database().ref("messages");

document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = getInputVal("name");
  let email = getInputVal("email");
  let message = getInputVal("message");

  saveMessage(name, email, message);
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}

function sent(){
    var submitBtn = document.getElementById('submit-btn');
    submitBtn.value = "Sent Successfully!"
    submitBtn.disabled = "true"
    submitBtn.style.backgroundColor = "#17b84d"
}