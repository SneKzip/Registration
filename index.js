const email_reg = /^[0-9a-zA-z\S]+@[0-9a-z]+\.[a-z]+$/;
const password_reg = /^[A-Z]+[0-9a-zA-Z\S]{8,32}$/;

const isEmailValid = (email) => {
    return email_reg.test(email); 
};
const isPasswordValid = (password) => {
    return password_reg.test(password);
};

const showErorr = (input) => {
    $("#error").removeClass("d-none");
    $("#error").addClass("d-block");
    $(input).addClass("border-danger");
};
const showSuccess = (input) => {
    $(input).removeClass("border-danger");
    $(input).addClass("border-success");
}

$(document).ready(()=>{  
    $("#form").submit((event)=>{
        event.preventDefault();
        let inputs = $("#form").find(".form-control");
        for(let i = 0; i < inputs.length; i++){
            if(inputs[i].name == "email" && isEmailValid(inputs[i].value)){
                showSuccess(inputs[i]);
            }
            else if(inputs[i].name != "password"){
                showErorr(inputs[i]);
            }
            if(inputs[i].name == "password" && isPasswordValid(inputs[i].value)){
                showSuccess(inputs[i]);
            }
            else if(inputs[i].name != "email"){
                showErorr(inputs[i]);
            }
        }
    });
});