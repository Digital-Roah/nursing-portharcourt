 //Get the button
 var mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }

 function dropitem(id) {
    $('#dropitem'+id).slideToggle();
    $('#dropicon'+id).toggleClass('fa-angle-right fa-angle-down');
 }

// Sticky Navbar Function
// function updateStickyNavbar() {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > navbar.offsetHeight) {
//         navbar.classList.add('sticky');
//         navbar.classList.add('animated', 'slideInDown');
//         navbar.classList.remove('slideInUp');
//     } else {
//         navbar.classList.remove('sticky');
//         navbar.classList.add('animated', 'slideInUp');
//         navbar.classList.remove('slideInDown');
//     }
// }

// // Run on scroll (throttled) and page load
// let isScrolling;
// window.addEventListener('scroll', function() {
//     clearTimeout(isScrolling);
//     isScrolling = setTimeout(updateStickyNavbar, 16);
// });
// window.addEventListener('load', updateStickyNavbar);
$(function () {
    $(document).scroll(function () {
        var headerheight = $('.header-area').height();
        var navheight = $('.navbar').height();
        var totalheight = headerheight + navheight;
      var $nav = $(".navbar");
      $nav.toggleClass('sticky', $(this).scrollTop() > totalheight);
    });
});