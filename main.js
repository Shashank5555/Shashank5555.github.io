var firebaseConfig = {
  apiKey: "AIzaSyDYGV_Q56rYJmDp79ZoMXbDMmp2F_gP-HM",
  authDomain: "vallabhajoshula-bharadwaz.firebaseapp.com",
  databaseURL: "https://vallabhajoshula-bharadwaz.firebaseio.com",
  projectId: "vallabhajoshula-bharadwaz",
  storageBucket: "vallabhajoshula-bharadwaz.appspot.com",
  messagingSenderId: "165678867615",
  appId: "1:165678867615:web:4e99a5f592992a25212eaa",
  measurementId: "G-LZ4NZSKP9G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let formMessage = firebase.database().ref('register');


document
  .getElementById('contactform')
  .addEventListener('submit', formSubmit);

  
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let subject = document.querySelector('#subject').value;
    let  message =  document.querySelector('#message').value;
  
    sendMessage(name, email, subject,message);

    document.querySelector('.alert').style.display = 'block';

    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);
  
    //Form Reset After Submission(7)
    document.getElementById('contactform').reset();
  }


  function sendMessage(name, email, subject, message) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      email: email,
      subject : subject,
      message: message,
    });
  }