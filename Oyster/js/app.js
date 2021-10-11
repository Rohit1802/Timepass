 const config = {
   apiKey: "AIzaSyCjBBgF3DjmltQuRu_PY6i-cQZR7gqOBww",
   authDomain: "contact-fc31e.firebaseapp.com",
   databaseURL: "https://contact-fc31e-default-rtdb.firebaseio.com",
   projectId: "contact-fc31e",
   storageBucket: "contact-fc31e.appspot.com",
   messagingSenderId: "901424514932",
   appId: "1:901424514932:web:d687c0e059acdebe104e21"
 };

 // Initialize Firebase
firebase.initializeApp(config);
const messageRef = firebase.database().ref('Messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = getInputVal('name')
    const email = getInputVal('email')
    const phone = getInputVal('phone')
    const subject = getInputVal('subject')
    const message = getInputVal('message')

    console.log(name, email, phone, subject, message)
    saveMessage(name, email, phone, subject, message);

    document.getElementById('contactForm').reset()
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, email, phone, subject, message) {
    const newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    });
}

const parentContainer = document.querySelector('.blog-post')

parentContainer.addEventListener('click',event =>{
    const current = event.target;
    
    const isReadMoreBtn = current.className.includes('read-more-btn')
    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');
    currentText.classList.toggle('read-more-text--show');
})


ScrollReveal().reveal('.home-text',{ delay: 500, reset:true ,distance:'100px',duration:1000,origin:'left'});
ScrollReveal().reveal('.home-img',{ delay: 300 , reset:true ,distance:'100px',duration:700 ,origin:'right'});
ScrollReveal().reveal('.home-text',{ delay: 500 , reset:true ,distance:'100px',duration:800});
ScrollReveal().reveal('.how-it-works-item',{ delay: 500 , reset:true ,distance:'100px',duration:800 });
ScrollReveal().reveal('.home-text',{ delay: 500 , reset:true ,distance:'100px',duration:800});
ScrollReveal().reveal('.scroll1',{ delay: 300 , reset:true ,distance:'15px',duration:700 ,origin:'left'});
ScrollReveal().reveal('.scroll2',{ delay: 300 , reset:true ,distance:'15px',duration:700 ,origin:'right'});