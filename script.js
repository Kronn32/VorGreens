var date = new Date();
document.getElementById('time').innerHTML += date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();


function validasi() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var message = document.getElementById("message");
    var subscribe = document.getElementById("subscribe");

    if(name.value.length < 5){
        alert("Name must be 5 letters or more");
    }

    else if(!email.value.endsWith("@binus.ac.id")){
        alert("Invalid email, use your binus email");
    }

    else if(!male.checked && !female.checked){
        alert("Please select your gender");
    }

    else if(message.value.length < 20) {
        alert("Message must be 20 characters or more");
    }

    else if(!subscribe.checked){
        alert("Please subscribe to our newsletter")
    }
    
    else{
        alert("Message succesfully sent")
        location.reload()
    }
}