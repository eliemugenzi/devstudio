$(document).ready(() => {
  $(".toggle").click(() => {
    $(".toggle").toggleClass("active");
    $("nav").toggleClass("show");
    $(".brand a").toggleClass("toggle");
  });

  $("#services-link,.btn-circle").click(e => {
    e.preventDefault();
    toggleBack();
    resetSections();
    $("#services")
      .delay(1000)
      .toggleClass("show");
  });
  $("#home-link,.brand a").click(e => {
    e.preventDefault();
    toggleBack();
    resetSections();
    $(".show").removeClass("show");
  });

  $("#work-link").click(e => {
    e.preventDefault();
    toggleBack();
    resetSections();
    $("#work")
      .delay(1000)
      .toggleClass("show");
  });

  $("#contact-link").click(e => {
    e.preventDefault();
    toggleBack();
    resetSections();
    $("#contact")
      .delay(1000)
      .toggleClass("show");
  });
  toggleBack = () => {
    $("nav").removeClass("show");
    $(".toggle").removeClass("active");
    $(".brand a").removeClass("toggle");
  };
  resetSections = () => {
    $("section").removeClass("show");
  };
});
