(function () {
  // Create a new Angular module
  var app = angular.module("signUp", []);

  // Get signup button, close button and modal from document
  var signupBtn = document.getElementById("signup-btn");
  var modal = document.getElementById("signup-modal");
  var closeBtn = document.getElementById("close-btn");

  // Create a new controller for 'app'
  app.controller("SignUpController", function () {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.password = "";
    this.logMe = function () {
      console.log("Logged!");
    };
  });

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

  // Create a new controller for 'app'
  app.controller("SignUpController", function () {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.password = "";
    this.logMe = function () {
      console.log("Logged!");
    };
  });

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
