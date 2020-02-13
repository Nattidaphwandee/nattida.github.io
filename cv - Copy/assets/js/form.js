let firebaseConfig = {
  apiKey: "AIzaSyDjuCaVMNuer07bdiPCVHmx5q_hnPdf7zM",
  authDomain: "localhost",
  projectId: "lab5-580fb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();



const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const SelectGender = document.querySelector('#Gender');
const Textarea = document.querySelector('#Textarea1');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


db.collection('form').get().then((snapshot)=>{
    snapshot.forEach(doc => {
        Console.log(doc.data());
    });

});




myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  //console.log(nameInput.value,emailInput.value,SelectGender.value,Textarea.value);
  db.collection("form")
 .add({
     name:$('#name').val(),
     email:$('#email').val(),
     Gender: $('#Gender').val(),
     Textarea:$('#Textarea1').val()
    })



  }


