function AddUser(){
    User_name = document.getElementById("Username_input").value

    localStorage.setItem("Username_input" , User_name )
    window.location = "kwitter_room.html";
}