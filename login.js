function reg() {

    var a = document.getElementById("name").value;
    var b = document.getElementById("phn").value;
    var c = document.getElementById("email").value;
    var d = document.getElementById("pw").value;

    if (a != '' && b != '' && c != ''){

        sign_pass = localStorage.getItem("userPassword");
        localStorage.setItem("name", a);
        if (b.length == 10){

            if (d === sign_pass){
                window.location.href = "index.html";
            }
            else {
                alert("Password does not match, Please enter the valid password or click forgot password")
            }    
        }
        else {
            alert("Invalid mobile number")
        }
    }
    else{
        alert("Please enter the inputs")
    }
}


function fp(){
    sign_pass = localStorage.getItem("userPassword");
    var password = sign_pass;
    var p = document.getElementById("pw");

    p.value = password;
    
}
function show(){
    // password visibility
    let visible = document.getElementById("pw");
    let shown = document.getElementById("check");

    if (shown.checked){
        visible.type = "text";
    }
    else {
        visible.type = "password"
    }
}
