	
	 let enableResize = true; // Flag to enable or disable resizeBackground

     function moveBackground(direction) {
         const backgroundContainer = document.getElementById("background-container");
         let translateYValue = parseFloat(backgroundContainer.style.top) || 0;
         let translateXValue = parseFloat(backgroundContainer.style.left) || 0;
         let scaleValue = parseFloat(backgroundContainer.style.transform.split('(')[1]) || 1; // Assuming initial scale is 1
         const step = 0.05; // Adjust this value as needed
     
         switch (direction) {
             case 'up':
                 translateYValue -= step*100;
                 break;
             case 'down':
                 translateYValue += step*100;
                 break;
             case 'left':
                 translateXValue -= step*100;
                 break;
             case 'right':
                 translateXValue += step*100;
                 break;
             case 'more':
                 scaleValue += step;
                 break;
             case 'less':
                 scaleValue -= step;
                 break;
         }
     
         backgroundContainer.style.transform = `scale(${scaleValue})`;
         backgroundContainer.style.left = translateXValue + 'px';
         backgroundContainer.style.top = translateYValue + 'px';
     }
     
     function resizeBackground() {
         if (enableResize) {
             const backgroundImage = document.getElementById("background-container");
             const selectedPhoto = document.getElementById("photo" + currentSlide);
             if (selectedPhoto) {
                 backgroundImage.style.backgroundSize = selectedPhoto.width + "px " + selectedPhoto.height + "px";
             }
         }
     }
     
         
     
         function updateSelectedPhotos() {
           var selectedPhotos = document.querySelectorAll('.selected');
           var selectedPhotoNumbers = Array.from(selectedPhotos).map(photo => photo.id.replace('photo', ''));
           document.getElementById('selectedPhotos').value = selectedPhotoNumbers.join(', ');
         }
     
         function submitForm(event) {
           event.preventDefault();
     
           var selectedPhotoNumbers = document.getElementById('selectedPhotos').value;
           var addressPhone = document.getElementById('addressPhone').value;
     
           // Perform any additional validation if needed
     
           // Send the selected photo numbers and addressPhone to your email
           sendOrderInfo(selectedPhotoNumbers, addressPhone);
           
           // Your existing logic to send an email
          
         }
     
         function sendOrderInfo(selectedPhotoNumbers, addressPhone) {event.preventDefault();
           var email = 'etumanov77@gmail.com';
           var subject = 'Photo Order';
           var body = 'Selected photo numbers for the order: ' + selectedPhotoNumbers + '\nAddress and phone: ' + addressPhone;
     
           window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
           alert('Thank you fo the order  we will call you to soon!!!' );
         }
         
         
         let currentSlide = 1;
     
         function changeSlide(n) {
             showSlide(currentSlide += n);
         }
     
         function showSlide(n) {
             const slides = document.getElementsByClassName("carousel-image");
     
             if (n > slides.length) {
                 currentSlide = 1;
             }
     
             if (n < 1) {
                 currentSlide = slides.length;
             }
     
             const transformValue = -100 * (currentSlide - 1) + "%";
             document.getElementById("image-container").style.transform = "translateX(" + transformValue + ")";
         }
     
         function uploadBackground() {
             const backgroundInput = document.getElementById("background-input");
             const backgroundContainer = document.getElementById("background-container");
     
             if (!backgroundContainer) {
                 // Create a new div for the background image
                 const newBackgroundContainer = document.createElement("div");
                 newBackgroundContainer.id = "background-container";
                 newBackgroundContainer.style.position = "absolute";
                 newBackgroundContainer.style.top = "20"+"px";
                 newBackgroundContainer.style.left = "0";
                 newBackgroundContainer.style.width = "100%";
                 newBackgroundContainer.style.height = "100%";
                 newBackgroundContainer.style.zIndex = "-1";
     
                 // Insert the new div before the image-container
                 document.getElementById("carousel-container").insertBefore(newBackgroundContainer, document.getElementById("image-container"));
             }
     
             if (backgroundInput.files && backgroundInput.files[0]) {
                 const reader = new FileReader();
     
                 reader.onload = function (e) {
                     // Set the background image on the new div
                     document.getElementById("background-container").style.backgroundImage = "url('" + e.target.result + "')";
                     // Reset background size to cover
                     document.getElementById("background-container").style.backgroundSize = "350";
                 };
     
                 reader.readAsDataURL(backgroundInput.files[0]);
             }
         }
         function submitForm(event) {
         event.preventDefault();
     
         var selectedPhotos = document.querySelectorAll('.selected');
         var selectedPhotoNumbers = Array.from(selectedPhotos).map(photo => photo.id.replace('photo', ''));
     
         var addressPhone = document.getElementById('addressPhone').value;
     
         // Perform any additional validation if needed
     
         // Send the selected photo numbers and addressPhone to your email
         sendOrderInfo(selectedPhotoNumbers, addressPhone);
     
         // Your existing logic to send an email
     }
     
     function sendOrderInfo(selectedPhotoNumbers, addressPhone) {
         event.preventDefault();
         var email = 'etumanov77@gmail.com';
         var subject = 'Photo Order';
     
         // Construct the body of the email, including the selected photo numbers
         var body = 'Selected photo numbers for the order: ' + selectedPhotoNumbers.join(', ') + '\nAddress and phone: ' + addressPhone;
     
         // Open the default email client with the pre-filled information
         window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
     }
     
     function selectPhoto(photoNumber) {
           var selectedImage = document.getElementById('photo' + photoNumber);
           var isSelected = selectedImage.classList.contains('selected');
           
           // Toggle the selected class and border
           if (isSelected) {
             selectedImage.classList.remove('selected');
             selectedImage.style.border = 'none';
           } else {
             selectedImage.classList.add('selected');
            
           }
     
           updateSelectedPhotos();
         }
     
      
         function changeColorAfterDelay() {
           const myCircle = document.getElementById('myCircle');
     
           // Change the stroke color to yellow after 7 seconds
           setTimeout(() => {
             myCircle.setAttribute('stroke', '#c8cd4b');
           }, 7000);
         }
     
        
         changeColorAfterDelay();