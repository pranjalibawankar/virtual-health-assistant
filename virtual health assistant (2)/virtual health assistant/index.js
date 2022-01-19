$(document).ready(function () {
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $(".nv").addClass("sticky");
      } else {
        $(".nv").removeClass("sticky");
      }
    });
    
    // toggle home-btn Script
    $(".home-btn").click(function () {
      $(".nv .home").toggleClass("active");
      $(".home-btn i").toggleClass("active");
    });
  });
