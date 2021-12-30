function validation() {
    let userName = document.getElementById('userid').value;
    let passWord = document.getElementById('passw0rd').value;


    if(userName == ""){
        document.getElementById('user').innerHTML = "Please enter the username ";
        return false;
    }

    if(userName.indexOf('@') <= 0){
        document.getElementById('user').innerHTML = 'Invalid e-mail';
        return false;
    }

    if((userName.charAt(userName.length-4)!='.') && 
    (userName.charAt(userName.length-3)!='.')){
        document.getElementById('user').innerHTML = 'Invalide e-mail';
        return false;
    }



    if(passWord == "") {
        document.getElementById('pass').innerHTML = " Please enter the password ";
        return false;
    }
    
    if(passWord.length<8){
        document.getElementById('pass').innerHTML = " Password length must be 8 char";
        return false;
    }
 // @ validation
    if(passWord.search(/[@]/)==-1){
        document.getElementById('pass').innerHTML = " @ must be included in the password";
        return false;
    }

    // UpperCase letter Validation
    if(passWord.search(/[A-Z]/)==-1){
        document.getElementById('pass').innerHTML = " Atleast 1 Upper Letter must be entered";
        return false;
    }

    // number validation
    if(passWord.search(/[0-9]/)==-1){
        document.getElementById('pass').innerHTML = " Atleast 1 number must be entered";
        return false;
    }
}