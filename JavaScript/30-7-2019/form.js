function validateform(){
    let formData=document.forms[0];
    // console.log(formData);
    // console.log(formData.username.value)
    let username=formData.username.value;
    let passwordvalue=formData.password.value;
    if(username.length>4 && passwordvalue.length>5){
        console.log('success');
        formData.username.style.border='4px solid white';
        formData.password.style.border='4px solid white';
        formData.loginSubmit.disabled=false;

    }
    else{
        formData.username.style.border='4px solid red'
        formData.password.style.border='4px solid red'
        formData.loginSubmit.disabled=true;
    }
}
/*
function validateform1()
{
    let formData=document.forms[0];
    let passwordvalue=formData.password.value;
    if(passwordvalue.length>5)
    {
        console.log('success');
                  //this  password is same as element 
        formData.password.style.border='4px solid white'
    }
    else
    {
        formData.password.style.border='4px solid white'
    }
}*/