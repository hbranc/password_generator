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

    if(pass_len < 8 || pass_len > 128){
        alert ("password length must be in range from 8 to 128")
    }
    else{
        if (holder_values[0]==="uppercase"){
            var first_value =  user_input.concat(uppercase_holder);
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