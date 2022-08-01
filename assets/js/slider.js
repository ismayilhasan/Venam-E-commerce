
$("#productsSlider").owlCarousel({
    items: 3,
    margin: 29,
    dots: false,
    autoplay: true,
    loop: true,
    nav: true,
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:3,
      }
  }
  })

  
  $(".slider").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    dots: false,
    nav: true,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false  
      },
      1000:{
          items:1,
          nav:true,
          loop:true
      }
  }
  })

  
  
  // $('.slider').slick({
  //     dots: false,
  //     speed: 300,
  //     slidesToShow: 1,
  //     prevArrow: `
  //     <button type="button" class="slider-previous"><i class="fa-solid fa-angle-left"></i></button>
  //     `,
  //     nextArrow: `
  //     <button type="button" class="slider-next"><i class="fa-solid fa-angle-right"></i></button>
  //     `,
  
  
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true
  //         }
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       },
  //       {
  //         breakpoint: 576,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //       // You can unslick at a given breakpoint now by adding:
  //       // settings: "unslick"
  //       // instead of a settings object
  //     ]
  //   });
  
  
    $('.all-boxes').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: `
      <button type="button" class="slider-previous"><i class="fa-solid fa-angle-left"></i></button>
      `,
      nextArrow: `
      <button type="button" class="slider-next"><i class="fa-solid fa-angle-right"></i></button>
      `,
  
  
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      
      ]
    });
  