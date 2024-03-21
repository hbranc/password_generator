const button = document.querySelector("#generate");

function array_string(password){
    password = password.toString();
    password = password.replace(/\,/g,'');
    document.getElementById("password").placeholder = password;
}
button.addEventListener("click", ()=>{
    const pass_len = document.getElementById("c5").value;
    const all_checkboxes = document.querySelectorAll('input[name="requirement"]:checked');
    const holder_values = [];

    all_checkboxes.forEach((checkbox)=>{
        holder_values.push(checkbox.value);
        console.log(holder_values)
    });

    const user_input = [];
    const uppercase_holder =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const special_holder =['!', '@', '#', '$', '%', '^', '&', '*', '?'];
    const number_holder =['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const lowercase_holder =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if(pass_len < 8 || pass_len > 128){
        alert ("password length must be in range from 8 to 128")
    }
    else{
        if (holder_values[0]==="uppercase"){
            var first_value = user_input.concat(uppercase_holder);
        }
        else if (holder_values[0]==="special"){
            var first_value = user_input.concat(special_holder);
        }

        else if (holder_values[0]==="numbers"){
            var first_value = user_input.concat(number_holder);
        }
        else if (holder_values[0]==="lowercase"){
            var first_value = user_input.concat(lowercase_holder); 
        }
        else{
            alert("please check a box");
        }
             
        let final_amount = [];
        if (holder_values.length===1){
            for(var i = 0; i<pass_len; i++){
                let random_password = (first_value[(Math.floor(Math.random() * first_value.length))]);    
                final_amount.push(random_password);                
            }
            array_string(final_amount);
        }
    }
});