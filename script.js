const username = document.querySelector('.username')
const email = document.querySelector('.email')
const password1 = document.querySelector('.password1')
const password2 = document.querySelector('.password2')
const submit = document.querySelector('.submit')


console.log(username)
console.log(email)
console.log(password1)
console.log(password2)
console.log(submit)

const usernamemsg = document.querySelector('.user-msg')
const emailmsg = document.querySelector('.email-msg')
const password1msg = document.querySelector('.password1-msg')
const password2msg = document.querySelector('.password2-msg')

console.log(usernamemsg)
console.log(emailmsg)
console.log(password1msg)
console.log(password2msg)

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    if(username.value  === '' && email.value === '' && password1.value ==='' && password2.value === ''){
        alert("please fill all input fields")
    }
    if(username.value === ''){
        showMessage(usernamemsg,"please provide your name","red")
    }else{
        showMessage(usernamemsg,"Great name","green")
    }
        
    if(username.value === ''){
        showMessage(usernamemsg,"please provide your name","red")
    }else{
        showMessage(usernamemsg,"Great name","green")
    }
        
    if(email.value === ''){
        showMessage(emailmsg,"please provide your email","red")
    }else{
        showMessage(emailmsg,"Got Your Email","green")
    }
        
    if(password1.value === ''){
        showMessage(password1msg,"please Enter Your Password","red")
    }else{
        showMessage(password1msg,"Got Your Password","green")
    } 
    if(password2.value === ''){
        showMessage(password2msg,"confirm your Your Password","red")
    }else if(password1.value !== password2.value ){
        showMessage(password2msg,"password do not match","red")
    } else{
        showMessage(password2msg,"valid Password","green")
    }

    


        

    
})

function showMessage(element, msg, color){
    element.style.visibility = "visible"
    element.textContent = msg
    element.style.color = color
    element.previousElementSibling.style.border = `2px solid ${color}`
}

