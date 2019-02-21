// skills Chart

function drawDoughnut(name, percent) {
  const element = document.getElementById(name);
  const context = element.getContext("2d");

  context.beginPath();

  const angleA = 360 * (percent / 100);
  const angleB = 360 * ((100 - percent) / 100);

  context.beginPath();
  context.arc(50, 50, 50, (0 - 90) * Math.PI / 180, (angleA - 90) * Math.PI / 180, false);
  context.lineTo(50, 50);
  context.fillStyle = "#16a4b4";
  context.fill();

  context.beginPath();
  context.arc(50, 50, 50, (angleA - 90) * Math.PI / 180, ((angleA + angleB) - 90) * Math.PI / 180, false);
  context.lineTo(50, 50);
  context.fillStyle = "#EBEBEB";
  context.fill();
};



var match_graph = document.getElementsByClassName('match_graph');
for (var i = 0; i < match_graph.length; i++) {
  // match_graph[i].setAttribute('id', 'graph_'+i);
  var name = match_graph[i].getAttribute('id');
  var percent = match_graph[i].getAttribute('data-percent');
  var yearExpr = percent / 100 * 5;
  var percent_num =  match_graph[i].nextElementSibling.getElementsByTagName('span');
  percent_num[0].textContent = yearExpr;
  drawDoughnut(name,percent);
}

//
//
// if ($('#html-css').length) {
//
//   var doughnutData = [{
//       value: 70,
//       color: "#74cfae"
//     },
//     {
//       value: 30,
//       color: "#3c3c3c"
//     }
//   ];
//   var myDoughnut = new Chart(document.getElementById("html-css").getContext("2d")).Doughnut(doughnutData);
// };
//
// if ($('#js').length) {
//   var doughnutData = [{
//       value: 60,
//       color: "#74cfae"
//     },
//     {
//       value: 40,
//       color: "#3c3c3c"
//     }
//   ];
//   var myDoughnut = new Chart(document.getElementById("js").getContext("2d")).Doughnut(doughnutData);
// }
//
// // WordPress Chart
// if ($('#php').length) {
//   var doughnutData = [{
//       value: 55,
//       color: "#74cfae"
//     },
//     {
//       value: 45,
//       color: "#3c3c3c"
//     }
//   ];
//   var myDoughnut = new Chart(document.getElementById("php").getContext("2d")).Doughnut(doughnutData);
// }
