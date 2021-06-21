const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
   imgItem.addEventListener('click', (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
   });
});

function slideImage() {
   const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

   document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);


// slider
// $('.img-showcase').slick({
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    arrows: false,
//    fade: true,
//    asNavFor: '.img-select'
//  });
//  $('.img-select').slick({
//    slidesToShow: 3,
//    slidesToScroll: 1,
//    asNavFor: '.img-showcase',
//    dots: true,
//    centerMode: true,
//    focusOnSelect: true
//  });
          