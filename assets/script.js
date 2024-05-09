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
        //checks for the first value
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

        //for second value
        if (holder_values[1]==="uppercase"){
            var second_value = first_value.concat(uppercase_holder);
        }
        else if (holder_values[1]==="special"){
            var second_value = first_value.concat(special_holder);
        }
        else if (holder_values[1]==="numbers"){
            var second_value = first_value.concat(number_holder);
        }
        else if (holder_values[1]==="lowercase"){
            var second_value = first_value.concat(lowercase_holder); 
        }

        //third value
        if (holder_values[2]==="uppercase"){
            var third_value = second_value.concat(uppercase_holder);
        }
        else if (holder_values[2]==="special"){
            var third_value = second_value.concat(special_holder);
        }
        else if (holder_values[2]==="numbers"){
            var third_value = second_value.concat(number_holder);
        }
        else if (holder_values[2]==="lowercase"){
            var third_value = second_value.concat(lowercase_holder);
        }
        
        //fourth
        if (holder_values[3]==="uppercase"){
            var fourth_value = third_value.concat(uppercase_holder);
        }
        else if (holder_values[3]==="special"){
            var fourth_value = third_value.concat(special_holder);
        }
        else if (holder_values[3]==="numbers"){
            var fourth_value = third_value.concat(number_holder);
        }
        else if (holder_values[3]==="lowercase"){
            var fourth_value = third_value.concat(lowercase_holder);
        }
        
        let final_amount = [];
        if (holder_values.length===1){
            for(var i = 0; i<pass_len; i++){
                let random_password = (first_value[(Math.floor(Math.random() * first_value.length))]);    
                final_amount.push(random_password);                
            }
            array_string(final_amount);
        }
        else if (holder_values.length===2){
            for(var i = 0; i<pass_len; i++){
                let random_password = (second_value[(Math.floor(Math.random() * second_value.length))]);    
                final_amount.push(random_password);                
            }
            array_string(final_amount);
        }
        else if (holder_values.length===3){
            for(var i = 0; i<pass_len; i++){
                let random_password = (third_value[(Math.floor(Math.random() * third_value.length))]);    
                final_amount.push(random_password);                
            }
            array_string(final_amount);
        }
        else {
            for(var i = 0; i<pass_len; i++){
                let random_password = (fourth_value[(Math.floor(Math.random() * fourth_value.length))]);    
                final_amount.push(random_password);                
            }
            array_string(final_amount);
        }
    }
});