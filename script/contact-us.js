function validateForm() {
    var nameContact = document.getElementById("name");
    var emailContact = document.getElementById("email");
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var subjectContact = document.getElementById("Subject");
    var feedbackContact = document.getElementById("feedback");

    // validate  name
    if (nameContact.value.length === 0) {
        window.alert('Please enter your name');
        nameContact.focus();
        return false;
    } 
    // validate  email
    else if (!emailContact.value.match(emailPattern)) {    
        window.alert("Please enter correct email address");
        // emailBilling=null;
        emailContact.focus();
      //  emailBilling.style.backgroundColor = 'yellow';
        return false;
    } 
    // validate  subject
    else if (subjectContact.value.length === 0) {     
        window.alert('Please enter your subject');
        subjectContact.focus();
        return false;
     } 
    // validate  feedback
    else if (feedbackContact.value.length === 0) { 
        window.alert('Please enter your feedback');
        feedbackContact.focus();
        return false;
    }
    else {
        return true;
    }

}