                    // variables start
let usd_drop = document.querySelector('.usd-div')
let sell_drop = document.querySelector('.sell-div')
let category_drop = document.querySelector('.all-categories')
let cart_icon = document.querySelector('#cart')
let add_btns = document.querySelectorAll('#AddtoCart')
var scrool_btn = document.querySelector('#scroolbtn')
let hamburger_menu_icon = document.querySelector('#MenuIcon')                  
let close_sidebar_icon = document.querySelector('#closeIcon')

                      // variables end








//calling local storage

if (localStorage.getItem('basket') === null) {
  localStorage.setItem('basket', JSON.stringify([]))
}






//Events


window.onscroll = function()
{
  console.log("frf");
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
  {
    let scrool_btn = document.querySelector('#scroolbtn')
    scrool_btn.style.opacity = '1'; 
  }
  else{
    let scrool_btn = document.querySelector('#scroolbtn')
    scrool_btn.style.opacity = '0';
  }
}


hamburger_menu_icon.addEventListener('click',() => {
  let sidebar = document.querySelector('#SidebarMobile')
  sidebar.classList.add('active-sidebar')
  close_sidebar_icon.style.transform = 'rotate(360deg)'
})



close_sidebar_icon.addEventListener('click',() => {
  let sidebar = document.querySelector('#SidebarMobile')
  sidebar.classList.remove('active-sidebar')
  close_sidebar_icon.style.transform = 'rotate(0  )'
})

usd_drop.addEventListener('click', () => {
  let usd_drop_down = document.querySelector('.usd-drop-down')
  usd_drop_down.classList.toggle('d-none')

  let sell_drop_down = document.querySelector('.dropdown-sell')
  sell_drop_down.classList.add('d-none')
})


sell_drop.addEventListener('click', () => {
  let sell_drop_down = document.querySelector('.dropdown-sell')

  sell_drop_down.classList.toggle('d-none');

  let usd_drop_down = document.querySelector('.usd-drop-down')

  usd_drop_down.classList.add('d-none')

})

category_drop.addEventListener('click', () => {
  let category_drop_down = document.querySelector('#all_categories_dropdown')
  category_drop_down.classList.toggle('active')

})



cart_icon.addEventListener('mouseover', () => {
  let cart_drop_down = document.querySelector('#cart_dropdown')
  cart_drop_down.classList.remove('d-none')
})
cart_icon.addEventListener('mouseleave', () => {
  let cart_drop_down = document.querySelector('#cart_dropdown')
  cart_drop_down.classList.add('d-none')

})



for (let btn of add_btns) {
  btn.addEventListener('click', (event) => {
    event.preventDefault();

    let basket = JSON.parse(localStorage.getItem('basket'))
    let product_img = event.target.parentElement.previousElementSibling.src
    let product_name = event.target.parentElement.parentElement.nextElementSibling.children[0].innerText;
    let product_price = event.target.parentElement.parentElement.nextElementSibling.children[1].innerText;
    let product_id = event.target.parentElement.parentElement.parentElement.id;
    let existProduct = basket.find(x => x.id === product_id);

    if (existProduct === undefined) {
      basket.push({
        id: product_id,
        name: product_name,
        img: product_img,
        // price: product_price.split("US $")[1],
        price: product_price.replace("US $", ""),
        count: 1,
    

      })
    }
    else {
      existProduct.count += 1
    }
    
    




    localStorage.setItem('basket', JSON.stringify(basket))
    ShowCount()
  })
}

                     //EVENTS - END


                    // Global Callback Functions Stars
function ShowCount() {
  let basket = JSON.parse(localStorage.getItem('basket'))
  let count = basket.length
  document.querySelector('#count').innerHTML = count
}
                // Global Callback Functions End


ShowCount()














// Detail Slider Settings

let topImage = $('.top-img');

function setSlickTopImage() {
  return topImage.slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1
  });
}

let sliderItems = $(".slider-item");

sliderItems.find("img").each((index, sliderItem) => {
  topImage.append(`<img src="${sliderItem.src}"/>`)
});

let detailSlider = setSlickTopImage();

$(".slider-item").click(function () {
  let sliderIndex = (sliderItems.index(this));
  detailSlider.slick('slickGoTo', sliderIndex);
})

let categoryMenuToggleBtn = $(".category-toggle-btn")

categoryMenuToggleBtn.on("click", function () {
  $(".category-menu").slideToggle();
})

window.onscroll = () => stickHeader();

var header = document.querySelector("header #third");
var sticky = header.offsetTop;

function stickHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}