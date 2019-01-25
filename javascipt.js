function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('active');
}

new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7","8","9","10"],
      datasets: [
        {
          label: "Signups",
          backgroundColor: "#00FFFF",
          data: [133,221,283,478,576,567,444,414,266,166]
        }, {
          label: "FTD",
          backgroundColor: "#DEB887",
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

          $(function(){
            $("#menu-toggle").click(function(e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });

            $(window).resize(function(e) {
              if($(window).width()<=768){
                $("#wrapper").removeClass("toggled");
              }else{
                $("#wrapper").addClass("toggled");
              }
            });
          });
