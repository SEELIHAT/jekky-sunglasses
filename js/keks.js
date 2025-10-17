
   
   
   function myFunction() {
     document.getElementById("myDropdown").classList.toggle("show");
   }
   
   // Закройте выпадающее меню, если пользователь щелкает за его пределами
   window.onclick = function(event) {
     if (!event.target.matches('.dropbtn')) {
       var dropdowns = document.getElementsByClassName("dropdown-content");
       var i;
       for (i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
           openDropdown.classList.remove('show');
         }
       }
     }
   }
   
     var slideIndex = 1;
   showSlides(slideIndex);
   
   // Вперед/назад элементы управления
   function plusSlides(n) {
     showSlides(slideIndex += n);
   }
   
   // Элементы управления миниатюрами изображений
   
   
   function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     var dots = document.getElementsByClassName("demo");
     var captionText = document.getElementById("caption");
     if (n > slides.length) {slideIndex = 1}
     if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex-1].style.display = "block";
     dots[slideIndex-1].className += " active";
     captionText.innerHTML = dots[slideIndex-1].alt;
   }  
   /*hello*/
   /* function selectPhoto(photoNumber) {
         var selectedImage = document.getElementById('photo' + photoNumber);
         var isSelected = selectedImage.classList.contains('selected');
        
         let bas = document.querySelector('.basket');
         // Toggle the selected class and border
         if (isSelected) {
           selectedImage.classList.remove('selected');
           selectedImage.style.border = 'none';
           bas.style.display = "none";
         } else {
           selectedImage.classList.add('selected');
           selectedImage.style.border = '8px solid red';
           bas.style.display = "grid";
          
         }
   
         updateSelectedPhotos();
       }*/
      
       function selectPhoto(photoNumber) {
        var selectedImage = document.getElementById('photo' + photoNumber);
        var isSelected = selectedImage.classList.contains('selected');
        let bas = document.querySelector('.basket');
        let ppAfter = document.querySelector('.pp::after');
      
        // Toggle the selected class and border
        if (isSelected) {
          selectedImage.classList.remove('selected');
          selectedImage.style.border = 'none';
          bas.style.display = "none";
          ppAfter.style.display = "none"; // Hide .pp::after
        } else {
          selectedImage.classList.add('selected');
          selectedImage.style.border = '8px solid red';
          bas.style.display = "grid";
          ppAfter.style.display = "block"; // Show .pp::after
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
       

       function adjustStyles() {
        var screenWidth = window.innerWidth;
        var classesToHide = ['bodi', 'ras', 'dwa', 'tri']; // Add classes that you want to hide here
    
        if (screenWidth < 1270) {
            classesToHide.forEach(function(className) {
                var elements = document.querySelectorAll('.' + className);
                elements.forEach(function(element) {
                    element.style.display = 'none';
                });
            });
        } else {
            classesToHide.forEach(function(className) {
                var elements = document.querySelectorAll('.' + className);
                elements.forEach(function(element) {
                    element.style.display = ''; // Reset to default (block, inline, etc.)
                });
            });
        }
    }
    
    // Call the function initially
    adjustStyles();
    
    // Add event listener for window resize
    window.addEventListener('resize', adjustStyles);


    function changeOpacity() {
      var opaElement = document.querySelector(".basket");
      if (opaElement) {
          opaElement.style.opacity = "0";
      }
  }
       
  function changeDisplay() {
    document.getElementById('myDiv').style.display = 'grid';
    document.getElementById('myDiv').style.color = 'yellow';
    document.getElementById('myDiv').style.fontStyle = 'italic';
    document.getElementById('myDiv').style.fontWidth = 'bold';
    document.getElementById('myDiv').style.fontSize = '20'+'px';
  }
         
         