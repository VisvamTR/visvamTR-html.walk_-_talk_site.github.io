    function updateDisplay() {
        const lapLogButton = document.getElementById("lap_log");
        const usernameContain = document.getElementById("username_contain");
        const lapOutButton = document.getElementById("lap_out");

        const username = localStorage.getItem("name");

        if (window.innerWidth > 600) {
            if (username) {
                lapLogButton.style.display = "none";
                usernameContain.style.display = "flex";
                lapOutButton.style.display = "block";
                document.getElementById("username").innerText = username;
            } else {
                lapLogButton.style.display = "block";
                usernameContain.style.display = "none";
                lapOutButton.style.display = "none";
            }
        } else {
            lapLogButton.style.display = "none";
            usernameContain.style.display = "none";
            lapOutButton.style.display = "none";
        }
    }

    updateDisplay();
    window.addEventListener("resize", updateDisplay);

    function logout() {
        updateDisplay();
        if (window.innerWidth > 600) {
            document.getElementById("lap_log").style.display = "block";
            document.getElementById("username_contain").style.display = "none";
            document.getElementById("lap_out").style.display = "none";
            localStorage.removeItem("name");
        }
    }

    function signup() {
        if (window.innerWidth > 600) {
            updateDisplay();
            window.location.href = "signup.html";
        }
    }

    // login fuctionality for mobile

    function mobupdateDisplay() {
        const mobinButton = document.getElementById("mobin");
        const usernameContain = document.getElementById("username_contain");
        const moboutButton = document.getElementById("mobout");

        const username = localStorage.getItem("name");

        if (window.innerWidth <= 600) {
            if (username) {
                mobinButton.style.display = "none";
                usernameContain.style.display = "flex";
                moboutButton.style.display = "block";
                document.getElementById("username").innerText = username;
            } else {
                mobinButton.style.display = "block";
                usernameContain.style.display = "none";
                moboutButton.style.display = "none";
            }
        } else {
            mobinButton.style.display = "none";
            usernameContain.style.display = "flex";
            moboutButton.style.display = "none";
        }
    }

    mobupdateDisplay();
    window.addEventListener("resize", mobupdateDisplay);

    function mobout() {
        mobupdateDisplay();
        if (window.innerWidth <= 600) {
            localStorage.removeItem("name");
        }
    }

    function mobin() {
        if (window.innerWidth <= 600) {
            mobupdateDisplay();
            window.location.href = "signup.html";
        }
    }


function pro(){
    window.location.href = "buy.html";
}

function setImage(source) {
    var image = document.getElementById("img_view");
    image.innerHTML = '';
    var imagesource = document.createElement("img");
    imagesource.src = source;
    imagesource.style.height = '250px';
    imagesource.style.width = '180px';
    img_view.appendChild(imagesource);
}

function befv() {
    setImage("pro1.jpg");
}

function bebv() {
    setImage("pro1.1.jpg");
}

function ffwf(){
    setImage("pro2.jpg");
}
function ffwb(){
    setImage("pro2.1.jpg");
}
function hmwf(){
    setImage("pro3.jpg");
}
function hmwb(){
    setImage("pro3.1.jpg");
}
function ppbf(){
    setImage("pro4.jpg");
}
function ppbb(){
    setImage("pro4.1.jpg");
}
function m27f(){
    setImage("pro5.jpg");
}
function m27b(){
    setImage("pro5.1.jpg")
}
function m15f(){
    setImage("pro6.jpg");
}
function m15b(){
    setImage("pro6.1.jpg");
}
function motgf(){
    setImage("pro7.jpg");
}
function motgb(){
    setImage("pro7.1.jpg"); 
}
function mccf(){
    setImage("pro8.jpg");
}
function mccb(){
    setImage("pro8.1.jpg");
}
function showImage(imageSource, height, width) {
    var display_Img = document.getElementById('display_img');
    
    display_Img.src = imageSource;

    display_Img.style.height = height + 'px';
    display_Img.style.width = width + 'px';
}
function imgbtn1() {
    showImage("img1.jpg", 250, 230);
}

function imgbtn2() {
    showImage("img2.jpg", 250, 230);
}

function imgbtn3() {
    showImage("img3.jpg", 250, 230);
}

function imgbtn4() {
    showImage("img4.jpg", 250, 230);
}

function mob_nav() {
    var icon = document.getElementById("icon");
    var nav = document.getElementById("ng");
    if (nav.style.display === "block") {
        nav.style.display = "none";
        icon.style.border = "none";
        icon.style.backgroundColor = "";
    } else {
        nav.style.display = "block";
        icon.style.border = "1px solid black";
        icon.style.borderLeft = "none";
        icon.style.backgroundColor = "skyblue"
    }
}