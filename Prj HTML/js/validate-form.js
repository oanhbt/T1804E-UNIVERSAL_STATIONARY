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
        return false; 
    } 

    alert("Successful Registration");
    return true; 
}

function signin()                                    
{ 
    var name = document.forms["form2"]["Name"];
    var password = document.forms["form2"]["Password"];
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
   
   
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
   
    alert("Logged in successfully");
    return true; 
}

function checkOut()                                    
{ 
    var fname = document.forms["formCheckOut"]["fName"];
    var lname = document.forms["formCheckOut"]["lName"];
    var usrname = document.forms["formCheckOut"]["usrName"];               
    var email = document.forms["formCheckOut"]["EMail"];    
    var phone = document.forms["formCheckOut"]["Telephone"];  
    var what =  document.forms["formCheckOut"]["Subject"];   
    var address = document.forms["formCheckOut"]["Address"];
    var paymethod = document.forms["formCheckOut"]["payMethod"]; 
    var namecard = document.forms["formCheckOut"]["nameCard"];  
    var creditnumber = document.forms["formCheckOut"]["creditNumber"];  
    var expiration = document.forms["formCheckOut"]["Expiration"];  
    var cvv = document.forms["formCheckOut"]["CVV"];  
   
    if (fname.value == "")                                  
    { 
        window.alert("Please enter your first name."); 
        name.focus(); 
        return false; 
    } 
    if (lname.value == "")                                  
    { 
        window.alert("Please enter your last name."); 
        name.focus(); 
        return false; 
    } 
    if (usrname.value == "")                                  
    { 
        window.alert("Please enter your username."); 
        name.focus(); 
        return false; 
    } 
   
    if (address.value == "")                               
    { 
        window.alert("Please enter your address."); 
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
   
    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
   
    if (what.selectedIndex < 1)                  
    { 
        alert("Please enter your state."); 
        what.focus(); 
        return false; 
    } 

    if (paymethod.value == "homePay")                           
    { 
       
        if (namecard.value == "")                        
        { 
            window.alert("Please enter your namecard"); 
            namecard.focus(); 
            return false; 
        } 
        if (creditnumber.value == "")                        
        { 
            window.alert("Please enter your creditnumber"); 
            creditnumber.focus(); 
            return false; 
        } 
        if (expiration.value == "")                        
        { 
            window.alert("Please enter your expiration"); 
            expiration.focus(); 
            return false; 
        } 
        if (cvv.value == "")                        
        { 
            window.alert("Please enter your CVV"); 
            cvv.focus(); 
            return false; 
        } 
    } 

    alert('doi ty');
    return true; 
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}