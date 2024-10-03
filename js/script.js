$(document).ready(function () {

  let mybutton = document.getElementById("myBtn");
  mybutton.style.display = "none";
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30) {
      mybutton.style.display = "inline-flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }



  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 25000,
          easing: "swing",
          step: function (now) {
            now = Number(Math.ceil(now)).toLocaleString('en');
            $(this).text(now);
          },
        }
      );
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
});

new WOW().init();
window.addEventListener('scroll', function () {
  let navbar = document.querySelector('#navbar-section');
  if (this.window.pageYOffset > 0) {
    navbar.classList.add('sticky_nav');
  }
  else {
    navbar.classList.remove('sticky_nav');
  }
});

