let selectedPhotoNumbers = [];
let border = document.querySelector('.border');

function selectPhoto(photoNumber) {
    // Toggle selection status
    if (selectedPhotoNumbers.includes(photoNumber)) {
        selectedPhotoNumbers = selectedPhotoNumbers.filter(num => num !== photoNumber);
        removeBorder(photoNumber);
    } else {
        selectedPhotoNumbers.push(photoNumber);
        addBorder(photoNumber);
    }

    // Update hidden input field value
    document.getElementById('selectedPhotos').value = selectedPhotoNumbers.join(',');
}

function addBorder(photoNumber) {
    // Add your styling for selected photos here
    const selectedPhoto = document.getElementById(`photo${photoNumber}`);
    selectedPhoto.style.border = '5px solid red';  // Change border color to green (or any color you prefer)
}

function removeBorder(photoNumber) {
    // Remove the border for deselected photos
    const deselectedPhoto = document.getElementById(`photo${photoNumber}`);
    deselectedPhoto.style.border = 'none';
}

function submitForm(event) {
    // Prevent the form from submitting (for demonstration purposes)
    event.preventDefault();

    // You can add your logic here to send the selected photo numbers to your email
    const selectedPhotos = document.getElementById('selectedPhotos').value;
    alert('you choose'+''+`Selected Photos: ${selectedPhotos}`);
	alert('thank you fo the buy');
    // Replace the alert with your code to send the selected photo numbers to your email address
}


var isYellow = false;

    function toggleBackgroundColor() {
        var body = document.body;

        if (!isYellow) {
            body.style.backgroundColor = 'yellow';
        } else {
            body.style.backgroundColor = '#c8cd4b';
        }

        isYellow = !isYellow;
    }
	
	  function moveBackground(direction) {
        const backgroundContainer = document.getElementById("background-container");
        let translateYValue = parseFloat(backgroundContainer.style.top) || 0;
 let translateXValue = parseFloat(backgroundContainer.style.left) || 0;
        const step = 5; // Adjust this value as needed

        switch (direction) {
            case 'up':
                translateYValue -= step;
                break;
            case 'down':
                translateYValue += step;
                break;
		    case 'left':
                translateXValue -= step;
                break;
            // Add other cases if needed
			 case 'right':
                translateXValue += step;
                break;
        }
        backgroundContainer .style.left = translateXValue + 'px';
        backgroundContainer.style.top = translateYValue + 'px';
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
        selectedImage.style.border = '3px solid red';
		
      }

      updateSelectedPhotos();
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
      var email = 'Наша электронная почта';
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
                document.getElementById("background-container").style.backgroundSize = "cover";
            };

            reader.readAsDataURL(backgroundInput.files[0]);
        }
    }

    function selectPhoto(photoNumber) {
        currentSlide = photoNumber;
        showSlide(currentSlide);
    }

    function sendEmailNumber() {
        const selectedPhotoId = "photo" + currentSlide;
        const selectedPhotoNumber = currentSlide;

        // You can use the selectedPhotoId or selectedPhotoNumber as needed.
        // In this example, we'll use both in the email message.
        const emailMessage = `Selected photo: ${selectedPhotoId}, Photo number: ${selectedPhotoNumber}`;

        // Replace the following line with your logic to send the email.
        console.log("Email sent to Наша электронная почта with message:", emailMessage);
		
		
    }

    function resizeBackground() {
        const backgroundImage = document.getElementById("background-container");
        const selectedPhoto = document.getElementById("photo" + currentSlide);
        if (selectedPhoto) {
            backgroundImage.style.backgroundSize = selectedPhoto.width + "px " + selectedPhoto.height + "px";
        }
    }

    // Automatically send email when the page is loaded
    window.onload = function () {
        sendEmailNumber();
    };
	
	 function moveBackgroundSize(action) {
        const backgroundContainer = document.getElementById("background-container");
        let currentSize = parseFloat(backgroundContainer.style.backgroundSize) || 100;

        const step = 5; // Adjust this value as needed

        if (action === 'less') {
            currentSize -= step;
			document.getElementById("background-container").style.backgroundImage = "cover";
        } else if (action === 'more') {
            currentSize += step;
			document.getElementById("background-container").style.backgroundImage = "cover";
        }

	 backgroundContainer.style.backgroundSize = currentSize + '%';	} 

   

    function selectPhoto(photoNumber) {
      var selectedImage = document.getElementById('photo' + photoNumber);
      var isSelected = selectedImage.classList.contains('selected');

      // Toggle the selected class and border
      if (isSelected) {
        selectedImage.classList.remove('selected');
        selectedImage.style.border = 'none';
      } else {
        selectedImage.classList.add('selected');
        selectedImage.style.border = '3px solid red';
		
      }

      updateSelectedPhotos();
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
      var email = 'Наша электронная почта';
      var subject = 'Photo Order';
      var body = 'Selected photo numbers for the order: ' + selectedPhotoNumbers + '\nAddress and phone: ' + addressPhone;

      window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
	 
    }


let slideInterval;

document.addEventListener("DOMContentLoaded", function () {
    startSlideShow(); // Start the slideshow when the DOM is loaded
});

function startSlideShow() {
    slideInterval = setInterval(function () {
        changeSlide(1); // Change to the next slide every 3 seconds
    }, 1500);
}

function stopSlideShow() {
    clearInterval(slideInterval); // Stop the slideshow
}

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

// Optionally, you can stop the slideshow when the user interacts with the buttons or other elements
document.getElementById("next-button").addEventListener("click", function () {
    stopSlideShow();
    changeSlide(1);
    startSlideShow();
});

document.getElementById("prev-button").addEventListener("click", function () {
    stopSlideShow();
    changeSlide(-1);
    startSlideShow();
});