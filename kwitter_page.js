const firebaseConfig = {
  apiKey: "AIzaSyAWYV042ZF2fJoKG11jHNcw7pisXqHIq1M",
  authDomain: "quitter-39053.firebaseapp.com",
  databaseURL: "https://quitter-39053-default-rtdb.firebaseio.com",
  projectId: "quitter-39053",
  storageBucket: "quitter-39053.appspot.com",
  messagingSenderId: "321423358881",
  appId: "1:321423358881:web:cfebed3bfa05dea12ca9e0"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
  } });  }); }
getData();
function send() {
msg = document.getElementById("msg").value;  
firebase.database().ref(room_name).push({
      name:user_name, 
      message: msg, 
      like:0
});
document.getElementById("msg").value = "";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}