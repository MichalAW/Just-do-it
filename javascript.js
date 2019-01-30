var toggle = document.getElementById("toggle");

new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7","8","9","10"],
      datasets: [
        {
          label: "Signups",
          backgroundColor: "#56819F",
          data: [133,221,283,478,576,567,444,414,266,166]
        }, {
          label: "FTD",
          backgroundColor: "#FFA200",
          data: [208,147,375,134,565,555,237,444,334,276]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Earnings chart'
      }
    }
});

function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('active');
}

toggle.addEventListener("click", function() {
  toggleSidebar();
});
