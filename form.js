const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordRegEx = new RegExp (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)
const phoneNumber = document.getElementById('phoneNumber')
const phoneRegEx = new RegExp(/^(?:(?:(?:\+?234(?:\h1)?|01)\h*)?(?:\(\d{3}\)|\d{3})|\d{4})(?:\W*\d{3})?\W*\d{4}$/)


name.addEventListener('change', function() {
    if(name.value.length < 3){
        alert("Name must be at least 3 characters")
        names.setAttribute('class', 'form-control is-invalid')
        names.focus();
    }
})

email.addEventListener('change', function() {
    if ( !email.value.includes ('@')) {
        alert("Email must be valid");
        email.setAttribute ('class', 'form-control is-invalid')
        names.focus();
    }
})

password.addEventListener('change', function() {
    if ( password.value.length < 5) {
        alert("Password too short");
        password.setAttribute ('class', 'form-control is-invalid')
        password.focus();
    }
    if (!password.value.includes("passwordRegEx")) {
        alert( "password must contain at least one special caracter e.g ? / $")
    }
    // if (!passwordRegEx.test("password.value")) {
    //     alert( "password must contain at least one special caracter e.g ? / $")
    // }


})

phoneNumber.addEventListener('change', function (){
        if(phoneNumber.value.length < 11 ){
        alert('phone number must be 11 digit and must begin with 090,070....')
        phoneNumber.setAttribute ('class', 'form-control is-invalid')
        phoneNumber.focus();

}

    if(phoneNumber.value.length > 11 ){
    alert('phone number must be 11 digit and must begin with 090,070....')
    phoneNumber.setAttribute ('class', 'form-control is-invalid')
    phoneNumber.focus();
    }
       
})

    // const checkbox= docment.getElementById ('checkbox')

    // checkbox.addEventListener('click',function(){
    // if (!checkbox.value.includes ('click')){
    // alert ('whyyy')
    // }
    // })

// const cb = document.getElementsByClassName ('checkbox');
// const btn = document.getElementsByClassName('btnbtn-primary');
// btn.onclick = (checkbox.value.onclick) => {
//     alert (cb.value);
// }
