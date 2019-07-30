// toggle menu sidebar
var toggle = document.getElementById("toggle");
// obsluga sidebara
var links = document.querySelectorAll(".sidebar a");
var sections = document.querySelectorAll("main section");

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.querySelector("main").classList.toggle("fullwidth");
  document.querySelector(".bg-alpha").classList.toggle("active");
}

if (toggle) {
  toggle.addEventListener("click", function() {
    toggleSidebar();
  });
}

// nadanie eventu na wszystkich linkach z sidebara
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    // usuwanie klasy active ze wszystkich section
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.remove("active");
    }

    // nadawanie klasy active kliknietej z sidebara sekcji
    document.querySelector(this.hash).classList.add("active");
  });
}

//details datownik
function refreshDate() {
  var fromData = document.getElementById("from-data").value;
  var toData = document.getElementById("to-data").value;
  var tableDates = document.querySelectorAll(
    ".details-table tr td:nth-child(2)"
  );

  for (var i = 0; i < tableDates.length; i++) {
    console.log(tableDates[i].innerHTML);
    // if () {

    // }
  }
}

function ready() {
  var el = document.getElementById("bar-chart");
  if (el) {
    new Chart(el, {
      type: "bar",
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
          {
            label: "Signups",
            backgroundColor: "#56819F",
            data: [133, 221, 283, 478, 576, 567, 444, 414, 266, 166]
          },
          {
            label: "FTD",
            backgroundColor: "#FFA200",
            data: [208, 147, 375, 134, 565, 555, 237, 444, 334, 276]
          }
        ]
      },
      options: {
        title: {
          display: true
        }
      }
    });
  }
}

var button = document.querySelector(".btn-details");
if (button) {
  button.addEventListener("click", refreshDate);
}

document.addEventListener("DOMContentLoaded", ready);

//modal

(function() {
  var showModal = function(event) {
    event.preventDefault();
    document.querySelector("#modal-overlay").classList.add("show");
  };

  var modalLinks = document.querySelectorAll(".show-modal");

  for (var i = 0; i < modalLinks.length; i++) {
    modalLinks[i].addEventListener("click", showModal);
  }

  var hideModal = function(event) {
    event.preventDefault();
    document.querySelector("#modal-overlay").classList.remove("show");
  };

  var closeButtons = document.querySelectorAll(".modal .close");

  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", hideModal);
  }

  document.querySelector("#modal-overlay").addEventListener("click", hideModal);

  var modals = document.querySelectorAll(".modal");

  for (var i = 0; i < modals.length; i++) {
    modals[i].addEventListener("click", function(event) {
      event.stopPropagation();
    });
  }
})();
