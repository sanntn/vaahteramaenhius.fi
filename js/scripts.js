/*jshint esversion: 11 */

const image = {

  // create some properties
  elements: [],
  y: false,

  init: function () {
    this.capture();
    this.slider();
    this.emailjs();
  },

  capture: function () {

    if (window.innerWidth < 768) {

      let mobileMenu = document.querySelectorAll('.navigation ul li a');

      for (var i = 0; i < mobileMenu.length; i++) {
        mobileMenu[i].addEventListener('click', closeMenu);
      }

    }

    function closeMenu() {
      document.querySelector(".mobile-menu").checked = false;
    }

  },

  slider: function () {

    const mySiema = new Siema({
      selector: '.image-gallery',
      duration: 200,
      easing: 'ease-out',
      perPage: {
        0: 1,
        680: 2,
        1020: 3,
        1360: 4,
        1700: 4,
        2040: 5,
        2380: 6,
        2720: 7,
        3060: 8,
        3400: 9,
        3740: 10,
        4080: 11,
        4420: 12
      },
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      loop: true
    });

    document.querySelector('.image-gallery__prev').addEventListener('click', () => mySiema.prev());
    document.querySelector('.image-gallery__next').addEventListener('click', () => mySiema.next());

  },

  emailjs: function () {

    emailjs.init("user_WUiAMgLiOfxTyeYevRhYC");

    document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault();

      document.getElementById('contact-form').classList.add('sent');
      document.querySelector('.form-sent-loader').style.display = 'block';

      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_t5lov09', 'template_j9y24sr', '#contact-form')
        .then(function () {
          document.querySelector('.contact-sent').classList.add('is-visible');
          document.querySelector('#contact-form').style.display = 'none';
          document.querySelector('.form-sent-loader').style.display = 'none';
        }, function (error) {
          console.log('FAILED...', error);
        });
    });

  }

};

// finally boot the beast up
image.init();