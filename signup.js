let fname=document.getElementById("fname");
let fnamelabel=document.getElementById("fnamelabel");
let email=document.getElementById("email");
let emailtext=document.getElementById("emailtext");
let contact=document.getElementById("contact");
let contacttext=document.getElementById("contacttext");
let password=document.getElementById("password");
let strengthbar=document.getElementById("strengthbar");
            
fname.addEventListener("input",fnameValidate);
email.addEventListener("input",emailValidate);
contact.addEventListener("input",contactValidate);
password.addEventListener("input",pwdValidate);

function fnameValidate(){
              let exp=/^([A-Za-z]+)$/;
              if(exp.test(fname.value)){
                fnamelabel.innerHTML="Valid";
                fnamelabel.style.color="Green";
                 return true;
              }
              else{
                fnamelabel.innerHTML="*Only Alphabets allowed";
                fnamelabel.style.color="red";
                return false;
              }
            }
function emailValidate(){
              let exp=/^([A-Za-z0-9\-.$_,!#%^&*:;]{3,})@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})$/;
              if(exp.test(email.value)){
                  emailtext.innerHTML="Valid Email Address";
                  emailtext.style.color="green";
                  return true;
              }
              else{
                  emailtext.innerHTML="Invalid Email Address";
                  emailtext.style.color="red";
                  return false;
              }
            }
function contactValidate(){
             let exp=/^([7-9]{1})([0-9]{2})([-. ]?)([0-9]{3})([-. ]?)([0-9]{4})$/;
            
             if(exp.test(contact.value)){
                  contacttext.innerHTML="Valid Contact";
                  contacttext.style.color="green";
                  return true;
              }
              else{
                  contacttext.innerHTML="Invalid Contact";
                  contacttext.style.color="red";
                  return false;
              }
            }
function pwdValidate(){
              let strongpwd=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
              let mediumpwd=/^((?=.*[a-z])(?=.*[A-Z])(?=.{6,}))|((?=.*[A-Z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[0-9])(?=.{6,}))$/;
              if(strongpwd.test(password.value)){
                strengthbar.innerHTML="Strong Password";
                strengthbar.style.backgroundColor="Green";
                return true;
              }
              else if(mediumpwd.test(password.value)){
                strengthbar.innerHTML="Medium Password";
                strengthbar.style.backgroundColor="Orange";
                return false;
              }
              else{
                strengthbar.innerHTML="Weak Password";
                strengthbar.style.backgroundColor="Red";
                return false;
              }
            }
function Validate(){
              if(fnameValidate()&&emailValidate()&&pwdValidate()&&contactValidate()){
                return true;
              }
              else{
                alert("Invalid Credentials");
                return false;
              }
            }