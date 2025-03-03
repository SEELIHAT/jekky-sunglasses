 
function sendMessageToWhatsApp(phoneNumber, textElementId) {
    // Initial message
    var message = "Hello, I want to order:";

    // Get the text content from the specified element by ID
    var additionalMessage = document.getElementById(textElementId).textContent;

    // Append the additional message to the main message
    message += " " + additionalMessage;

    // Replace spaces with %20 for URL encoding
    message = encodeURIComponent(message);

    // Build the WhatsApp URL
    var url = "https://wa.me/" + phoneNumber + "?text=" + message;

    // Open WhatsApp in a new window/tab
    window.open(url, '_blank');
}

 /*function sendMessageToWhatsApp(phoneNumber, pId) {
    var message = "Hello, I would like to order.";
  
    // Get the text content from the specified <p> element
    var additionalMessage = document.getElementById(pId).textContent;
  
    // Append the additional message to the main message
    message += " " + additionalMessage;
  
    // Replace spaces with %20 for URL
    message = encodeURIComponent(message);
  
    var url = "https://wa.me/" + phoneNumber + "?text=" + message;
  
        window.open(url, '_blank');}*/

       /* function sendMessageToWhatsApp(phoneNumber, imgId) {
            var message = "Hello, I would like to order.";
          
            // Get the text content from the specified <p> element
            var additionalMessage = document.getElementById(imgId);
          
            // Append the additional message to the main message
            message += " " + additionalMessage;
          
            // Replace spaces with %20 for URL
            message = encodeURIComponent(message);
          
            var url = "https://wa.me/" + phoneNumber  + message;
          
            window.open(url, '_blank');
          } */     