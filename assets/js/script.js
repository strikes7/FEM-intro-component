window.onload = selectElements();

function selectElements(){
    const signButton = document.getElementById("sign-in-btn");
    signButton.addEventListener("click",validateInfo);
}

function validateInfo(e){
    e.preventDefault();
    const userData = document.querySelectorAll(".input-wrapper > input");
    const regEx = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
    let dataErrors = [];
    console.log(userData);    
    if (!userData[0].value.trim()){
        dataErrors.push("first-name");
    }
    
    if (!userData[1].value.trim()){
        dataErrors.push("last-name");
    }
    
    if (!regEx.test(userData[2].value)){
        dataErrors.push("email");
    }

    if (!userData[3].value.trim()){
        dataErrors.push("password");
    }

    if (dataErrors.length === 0){
        return;
    }
    
    for (let i = 0; i < dataErrors.length; i++) {
        document.getElementById( dataErrors[i]+"-error").setAttribute("aria-hidden",false);
        document.getElementById( dataErrors[i]).setAttribute("data-is-valid",false);
    }
}