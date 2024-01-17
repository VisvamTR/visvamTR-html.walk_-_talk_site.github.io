function reg() {
    var e = document.getElementById("email").value;
    var p = document.getElementById("pw_sign").value;


    if (e != '' && p != '') {
        let uppercase = "";
        let special = "";
        let numeric = "";
        let password = document.getElementById("pw_sign").value;

        if (password.length >= 8 && password.length <= 15) {
            // counting and append whether the character is capial or special or numeric 
            for (let i = 0; i < password.length; i++) {
                let check = password.charAt(i);
                if (/[A-Z]/.test(check)) {
                    uppercase += check;
                } else if (/[^a-zA-Z0-9]/.test(check)) {
                    special += check;
                } else if (/[0-9]/.test(check)) {
                    numeric += check;
                }
            }
            // changing the password condition color
            let pp = document.getElementById("len_check");
            pp.style.color = '';

            if (uppercase.length >= 1 && special.length >= 1 && numeric.length >= 1) {
                localStorage.setItem("userPassword", p);
                window.location.href = "login.html";
            }
            else {
                if (uppercase.length <1){
                    let a = document.getElementById("alpha");
                    a.style.color = "#f86d6d"
                }
                else {
                    let a = document.getElementById("alpha");
                    a.style.color = '';
                }
                if (special.length <1){
                    let s = document.getElementById("spl");
                    s.style.color = "#f86d6d"
                }
                else {
                    let s = document.getElementById("spl");
                    s.style.color = '';
                }
                if (numeric.length <1){
                    let n = document.getElementById("num");
                    n.style.color = "#f86d6d";
                }
                else {
                    let n = document.getElementById("num");
                    n.style.color = '';
                }
            }
        }
        else {
            // changing the password condition color
            let pp = document.getElementById("len_check");
            pp.style.color = "#f86d6d";
        }
    }
    else {
        // alert message for null
        alert("Please enter the inputs");
    }
}

function show(){
    // password visibility
    let visible = document.getElementById("pw_sign");
    let shown = document.getElementById("check");

    if (shown.checked){
        visible.type = "text";
    }
    else {
        visible.type = "password"
    }
}