const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Sending...'; 

  const serviceID = 'service_z1n6ibd';
  const templateID = 'template_4i5dnug';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      this.reset(); //clear the form inputs

      // Create and style the popup for the top of the screen
      const popup = document.createElement('div');
      popup.textContent = 'Message has been sent!';
      popup.style.position = 'fixed';
      popup.style.top = '0';
      popup.style.left = '0';
      popup.style.width = '100%';
      popup.style.padding = '10px 0';
      popup.style.backgroundColor = 'white';
      popup.style.color = 'black';
      popup.style.fontWeight = "bold"
      popup.style.textAlign = 'center'; 
      popup.style.zIndex = '1900';

      document.body.appendChild(popup);

      // Remove the popup after a few seconds
      setTimeout(() => {
        document.body.removeChild(popup);
      }, 2500);

    }, (err) => {
      btn.value = 'Send Email';
      // error handling
      console.error("Failed to send message:", err);
    });
});