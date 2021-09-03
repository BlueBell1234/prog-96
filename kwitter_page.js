//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBDL9ZVONGnGVhUMbzUkRv5MMVH6LrU5gs",
      authDomain: "kwitter-318da.firebaseapp.com",
      databaseURL: "https://kwitter-318da-default-rtdb.firebaseio.com",
      projectId: "kwitter-318da",
      storageBucket: "kwitter-318da.appspot.com",
      messagingSenderId: "661862221596",
      appId: "1:661862221596:web:574f4704499f1819075cd9",
      measurementId: "G-X54V5EFGSY"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
             name: user_name, message: msg, like: 0 }); 
             document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }