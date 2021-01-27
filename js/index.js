$(".header-hamburger").on("click", function () {
    $(this).toggleClass("active")
    $(".header-nav").toggleClass("is-swiped");
    $(".bg-filter").toggleClass("active")
    $("html").toggleClass("scrollDisabled") 
})