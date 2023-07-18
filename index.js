const email_reg = /^[0-9a-zA-z\S]+@[0-9a-z]+\.[a-z]+$/;
const password_reg = /^[A-Z]+[0-9a-zA-Z\S]{8,32}$/;
let invalid_value;

let get_data = (data) => {
    if((data.name == "email") && !email_reg.test(data.value)){
        $("[name = 'email']").removeClass("border-success");
        $("[name = 'email']").addClass("border-danger");
        invalid_value = true;
    }
    else{
        $("[name = 'email']").removeClass("border-danger");
        $("[name = 'email']").addClass("border-success");
        invalid_value = false;
    }
    if((data.name == "password") && !password_reg.test(data.value)){
        $("[name = 'password']").addClass("border-danger");
        invalid_value = true;
    }
    else{
        $("[name = 'password']").addClass("border-success");
        invalid_value = false;
    }
}

$(document).ready(()=>{  
    $("[name = 'submit']").click(()=>{
        let fields = $('#form').serializeArray();
        fields.forEach(data => {
            get_data(data);
            if(invalid_value == true){
                $("#error").removeClass("d-none");
                $("#error").addClass("d-flex").fadeToggle(1000);
            }
        })
    });
});