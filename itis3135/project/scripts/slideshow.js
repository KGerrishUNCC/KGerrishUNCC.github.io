
let Index = 0;
    showSlides(Index);

    //This function is used to increase the value of the index used in showslides by n
    function plusSlides(n) {
      showSlides(Index += n);
    }
    //This function is used to input the current slide to be shown
    function currentSlide(n) {
      showSlides(Index = n);
    }
    //This function is used to format the display of each slide
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("demo");
      let captionT = document.getElementById("caption");
      if (n > slides.length) {Index = 1}
      if (n < 1) {Index = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[Index-1].style.display = "block";
      dots[Index-1].className += " active";
      captionT.innerHTML = dots[Index-1].alt;
    }