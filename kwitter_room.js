const firebaseConfig = {
    apiKey: "AIzaSyAWYV042ZF2fJoKG11jHNcw7pisXqHIq1M",
    authDomain: "quitter-39053.firebaseapp.com",
    databaseURL: "https://quitter-39053-default-rtdb.firebaseio.com",
    projectId: "quitter-39053",
    storageBucket: "quitter-39053.appspot.com",
    messagingSenderId: "321423358881",
    appId: "1:321423358881:web:cfebed3bfa05dea12ca9e0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child("room_name").update({
          purpose:"adding room_name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
    console.log("room name:" + Room_names);
    row = "<div class='room_name' id="+ Room_names + " onclick = 'redirectToRoomname(this.id)'>#"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML += row; 
});});}
getData();

function redirectToRoomname(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
