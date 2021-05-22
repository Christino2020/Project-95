const config= {
    apiKey: "AIzaSyB7vw9jeNCEkhMGlYGFPVQbzrjUev1SrEY",
  authDomain: "kwitter-c5700.firebaseapp.com",
  databaseURL: "https://kwitter-c5700-default-rtdb.firebaseio.com",
  projectId: "kwitter-c5700",
  storageBucket: "kwitter-c5700.appspot.com",
  messagingSenderId: "861444040922",
  appId: "1:861444040922:web:ef03eda039947753aa1de3"
};
firebase.initializeApp(config);
username = localStorage.getItem("Username_input");
document.getElementById("user_name").innerHTML = "Welcome" + username + "!";

function addroom(){
  roomname = document.getElementById("room_name").value
  firebase.database().ref("/").child(roomname).update({
        purpose : "Add Room name"
  })
  localStorage.setItem("roomname", roomname)
  window.location = "kwitter_page.html";

}

function getData() {
  firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";
  snapshot.forEach(function(childSnapshot) {
    childKey =childSnapshot.key;
 Room_names = childKey;
 
 });});}
getData();
function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("roomname" , name)
  window.location = "kwitter.html";

}
function logout(){
  localStorage.removeItem("roomname")
  localStorage.removeItem("username")
  window.location = "kwitter.html";
}


