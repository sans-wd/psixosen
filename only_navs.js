(function () {
  // Create a new Angular module
  var app = angular.module("signUp", []);

  // Get signup button, close button and modal from document
  var signupBtn = document.getElementById("signup-btn");
  var modal = document.getElementById("signup-modal");
  var closeBtn = document.getElementById("close-btn");

  // Create onclick event for signupBtn
  signupBtn.onclick = function () {
    modal.style.display = "block";
  };

  // Create onclick event for closeBtn
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Create onclick event for window
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
})();
(function () {
  // Create a new Angular module
  var app = angular.module("signUp", []);

  // Get signup button, close button and modal from document
  var signupBtn = document.getElementById("signup-btn2");
  var modal = document.getElementById("signup-modal");
  var closeBtn = document.getElementById("close-btn");

  // Create onclick event for signupBtn
  signupBtn.onclick = function () {
    modal.style.display = "block";
  };

  // Create onclick event for closeBtn
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Create onclick event for window
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
})();

$(function () {
  var desktopForm = $("#logo_desk_transfer").html();
  $(window).on("load resize", function () {
    if ($(window).width() <= 991) {
      $("#logo_mob_transfer").html(desktopForm);
    } else {
      $("#logo_mob_transfer").empty();
    }
  });
});

$(function () {
  var desktopForm = $("#anon_desk_transfer").html();
  $(window).on("load resize", function () {
    if ($(window).width() <= 991) {
      $("#anon_mob_transfer").html(desktopForm);
    } else {
      $("#anon_mob_transfer").empty();
    }
  });
});

$(function () {
  var desktopForm = $("#esas_desk_transfer").html();
  $(window).on("load resize", function () {
    if ($(window).width() <= 991) {
      $("#esas_mob_transfer").html(desktopForm);
    } else {
      $("#esas_mob_transfer").empty();
    }
  });
});

$(function () {
  var desktopForm = $("#usaq_desk_transfer").html();
  $(window).on("load resize", function () {
    if ($(window).width() <= 991) {
      $("#usaq_mob_transfer").html(desktopForm);
    } else {
      $("#usaq_mob_transfer").empty();
    }
  });
});

$(function () {
  var desktopForm = $("#tehsil_desk_transfer").html();
  $(window).on("load resize", function () {
    if ($(window).width() <= 991) {
      $("#tehsil_mob_transfer").html(desktopForm);
    } else {
      $("#tehsil_mob_transfer").empty();
    }
  });
});

$(function () {
  var desktopForm = $("#search_desk_transfer").html();
  $(window).on("load resize", function () {
    if ($(window).width() <= 991) {
      $("#search_mob_transfer").html(desktopForm);
    } else {
      $("#search_mob_transfer").empty();
    }
  });
});

$(function () {
  var desktopForm = $("#ads_desk_transfer").html();
  $(window).on("load resize", function () {
    if ($(window).width() <= 991) {
      $("#ads_mob_transfer").html(desktopForm);
    } else {
      $("#ads_mob_transfer").empty();
    }
  });
});

$(function () {
  var desktopForm = $("#side_menu_desk_transfer").html();
  $(window).on("load resize", function () {
    if ($(window).width() <= 991) {
      $("#side_menu_mob_transfer").html(desktopForm);
    } else {
      $("#side_menu_mob_transfer").empty();
    }
  });
});

$(function () {
  var desktopForm = $("#anon_desk_transfer").html();
  $(window).on("load resize", function () {
    if ($(window).width() <= 991) {
      $("#anon_mob_transfer2").html(desktopForm);
    } else {
      $("#anon_mob_transfer2").empty();
    }
  });
});

$(function () {
  var desktopForm = $("#social_desk_transfer").html();
  $(window).on("load resize", function () {
    if ($(window).width() <= 991) {
      $("#social_mob_transfer").html(desktopForm);
    } else {
      $("#social_mob_transfer").empty();
    }
  });
});

function openMenu() {
  var element = document.getElementById("fixed_nav");
  element.classList.toggle("my_fixed_nav");
}

function openMenu2() {
  var element = document.getElementById("fixed_nav2");
  element.classList.toggle("my_fixed_nav");
}

var selector = ".menu_buttons";

$(selector).on("click", function () {
  $(selector).removeClass("active");
  $(this).addClass("active");
});

filterSelection("muteh");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active4");
    current[0].className = current[0].className.replace(" active4", "");
    this.className += " active4";
  });
}

filterSelection2("qeyd");
function filterSelection2(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv2");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer2");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.className += " active2";
  });
}

filterSelection3("qeyd2");
function filterSelection3(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv3");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer3");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active3");
    current[0].className = current[0].className.replace(" active3", "");
    this.className += " active3";
  });
}

$("form").on("change", ".file-upload-field", function () {
  $(this)
    .parent(".file-upload-wrapper")
    .attr(
      "data-text",
      $(this)
        .val()
        .replace(/.*(\/|\\)/, "")
    );
});

function closehead() {
  var head = document.getElementById("close_link");
  head.style.display = "none";
}

function close_infinit_modal() {
  var mymodal = document.getElementById("signup-modal");
  mymodal.style.display = "none";
}

var r = document.querySelector(":root");

function myFunction_set_esas() {
  r.style.setProperty("--sign-in-color", "#1e90ff");
}
function myFunction_set_teh() {
  r.style.setProperty("--sign-in-color", "#281F8C");
}
function myFunction_set_us() {
  r.style.setProperty("--sign-in-color", "#FF8D3B");
}

function changeIcon(anchor) {
  var icon = anchor.querySelector("i");
  icon.classList.toggle("fa-infinity");
  icon.classList.toggle("fa-circle-xmark");
}

function changeIcon2(anchor) {
  var icon = anchor.querySelector("i");
  icon.classList.toggle("fa-regular");
  icon.classList.toggle("fa-solid");
}
