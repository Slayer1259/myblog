
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCq7X67zgudfWXZWcjQPQaENQTQrNYs6wo",
      authDomain: "let-s-chat-web-app-89290.firebaseapp.com",
      databaseURL: "https://let-s-chat-web-app-89290-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-web-app-89290",
      storageBucket: "let-s-chat-web-app-89290.appspot.com",
      messagingSenderId: "263272221555",
      appId: "1:263272221555:web:086cb6080e51c0b7dc5306"
    };

    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
    
     user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom() {
        room_name = document.getElementById("room_name").value;
    
        firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
        });
    
        localStorage.setItem("room_name", room_name);
    
        window.location = "kwitter_page.html";
    }
    
    function getData() {
        firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
            });
        });
    
    }
    
    getData();
    
    function redirectToRoomName(name) {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
    }