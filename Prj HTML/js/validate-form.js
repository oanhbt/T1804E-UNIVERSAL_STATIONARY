function signup()                                    
{ 
    var name = document.forms["form1"]["Name"];               
    var email = document.forms["form1"]["EMail"];     
    var password = document.forms["form1"]["Password"];  
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    
    if (!validateEmail(email.value ))                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return flase; 
    } 

    alert("Dang ky thanh cong");
    return true; 
}

// function signin()                                    
// { 
//     var name = document.forms["RegForm1"]["signinName"];
//     var password = document.forms["RegForm1"]["signinPass"];
   
//     if (name.value == "")                                  
//     { 
//         window.alert("Please enter your name."); 
//         name.focus(); 
//         return false; 
//     } 
   
   
//     if (password.value == "")                        
//     { 
//         window.alert("Please enter your password"); 
//         password.focus(); 
//         return flase; 
//     } 
   
//     alert("Dang nhap thanh cong");
//     return true; 
// }

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}