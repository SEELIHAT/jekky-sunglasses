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
  
  let currentSlide = 1;
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