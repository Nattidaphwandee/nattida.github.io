let firebaseConfig = {
    apiKey: "AIzaSyDjuCaVMNuer07bdiPCVHmx5q_hnPdf7zM",
    authDomain: "localhost",
    projectId: "lab5-580fb",};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

$('button').click(()=>{
    
    db.collection("form")
    .add({
        name:$('#name').val(),
        //credit: $('#credit').val(),
        email:$('#email').val(),
        Gender:$('#Gender').val(),
        Textarea:$('#Textarea').val(),
        
        
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        $('#name').val('')
        $('#email').val('')
        $('#Gender').val('')
        $('#Textarea').val('')


    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
})






db.collection('form').orderBy("name", "asc").onSnapshot(doc =>{
    let table = $('tbody')[0]
    document.querySelectorAll("tbody tr").forEach(item => item.remove())
    

    doc.forEach(item => {
        let row = table.insertRow(-1)
        let firstCell = row.insertCell(0)
        let secoundCell = row.insertCell(1)

        
        
        firstCell.textContent =item.data().name
        secoundCell.textContent = item.data().email

        
        
        
        
    })
    
});


function reloadPage() {

    window.onload();
}

		


