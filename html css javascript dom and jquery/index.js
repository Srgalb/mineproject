function totop() {
  var btn = $(".btn_up");
  btn.on("click", e => {
    e.preventDefault();
    $("html").animate({ scrollTop: 0 }, 1000);
    $("body").animate({ scrollTop: 0 }, 1000);
  });
  $(window).on("scroll", () => {
    if ($(this).scrollTop() >= 200) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  });
}
totop();

function progress() {
  var elem = document.getElementById("intro"),
    width = 10,
    id = setInterval(progressbar, 10);
  function progressbar() {
    if (width >= 100) {
      clearInterval(id);
      alert("100%");
      var widthh = 10;
      elem.style.width = widthh + "%";
      elem.innerHTML = widthh * 1 + "%";
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
    }
  }
}

$("#modal_btn").on("click", () => {
  $(".container").css("filter", "blur(5px)");
  $("#modal").fadeIn();
  $("#modal").addClass("Disabled");
});

$("#modal").on("click", e => {
  if (
    $(e.target).attr("id") === "modal" ||
    $(e.target).attr("id") === "off" ||
    $(e.target).attr("id") === "close"
  ) {
    $(".container").css("filter", "none");
    $("#modal").fadeOut();
  }
});

$(window).on("load", () => {
  setTimeout(() => {
    if ($("#modal").hasClass("Disabled")) {
      return false;
    } else {
      $(".container").css("filter", "blur(5px)");
      $("#modal").fadeIn();
    }
  }, 5000);
});

/*
var modal = document.getElementById("modal"),
  close = document.getElementById("close"),
  cancel = document.getElementById("off"),
  modalbtn = document.getElementById("modal_btn");

modalbtn.onclick = () => {
  modal.style.display = "block";
};

close.onclick = () => {
  modal.style.display = "none";
};

cancel.onclick = () => {
  modal.style.display = "none";
};

window.onclick = e => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
*/
