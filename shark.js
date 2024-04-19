document.addEventListener('DOMContentLoaded', function () {
  var slides = document.querySelectorAll('.slide');
  var currentSlide = 0;

  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
  }

  slides[currentSlide].classList.add('active');

  setInterval(function () {
    showSlide((currentSlide + 1) % slides.length);
  }, 7000);

  var cElements = document.querySelectorAll('.c');

  cElements.forEach(function (c, index) {
    c.addEventListener('click', function () {
      showSlide(index);
    });

    c.addEventListener('mouseover', function () {
      c.classList.add('hover');
    });

    c.addEventListener('mouseout', function () {
      c.classList.remove('hover');
    });
  });
});






document.addEventListener('DOMContentLoaded', function () {
  var colapseButton = document.getElementById('colapse');
  var rewindButton = document.getElementById('rewind');
  var innerDiv = document.querySelector('.inner-div');

  colapseButton.addEventListener('click', function () {
    innerDiv.style.display = 'block';
    rewindButton.style.display = 'inline-block';
    colapseButton.style.display = 'none';
  });

  rewindButton.addEventListener('click', function () {
    innerDiv.style.display = 'none';
    rewindButton.style.display = 'none';
    colapseButton.style.display = 'inline-block';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hejElement = document.getElementById("ad");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        hejElement.classList.toggle("visible", entry.isIntersecting);
        hejElement.classList.toggle("hidden", !entry.isIntersecting);
      });
    }, {
      threshold: 0.1
    }
  );

  observer.observe(hejElement);
});


const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .img-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".cont-verk .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    }

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      })
    });
  });

  const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  };

  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  imageList.addEventListener("scroll", () => {
    handleSlideButtons();
    updateScrollThumbPosition();
  });


}

window.addEventListener("load", initSlider);