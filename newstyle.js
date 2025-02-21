
  function sendToWhatsApp(id) {
      var priceText = document.getElementById("price" + id).innerText;
      var message = encodeURIComponent(priceText);
      var whatsappURL = "https://api.whatsapp.com/send?phone=+79315908599&text=" + message;
      window.open(whatsappURL, '_blank');
  }



  function changeDisplay() {
    document.getElementById('myDiv').style.display = 'grid';
    document.getElementById('myDiv').style.color = 'yellow';
    document.getElementById('myDiv').style.fontStyle = 'italic';
    document.getElementById('myDiv').style.fontWidth = 'bold';
    document.getElementById('myDiv').style.fontSize = '20'+'px';
    document.getElementById('button').style.display = 'none';
  }
  let laja = document.querySelector('.newbutton');
   laja.onclick = function() {
     let not = document.querySelector('.notsee');
     not.classList.toggle('newtextbutton'); // Toggles the .newtextbutton class
   };
    
   let currentIndex = 0;
   const images = document.querySelectorAll(".carousel-image");
   const totalImages = images.length;
   const container = document.getElementById("image-container");
   
   function updateCarouselPosition() {
       container.style.transform = `translateX(-${currentIndex * 100}%)`;
   }
   
   // Function to go to the next slide automatically
   function nextSlide() {
       currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
       updateCarouselPosition();
   }
   
   // Start the automatic slideshow
   setInterval(nextSlide, 3000); 
