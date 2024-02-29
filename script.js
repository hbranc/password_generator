const button = document.querySelector("#generate");

button.addEventListener("click", ()=>{
    const pass_len = document.getElementById("c5").value;

    if(pass_len < 8 || pass_len > 128){
        alert ("password length must be in range from 8 to 128")
    }
});