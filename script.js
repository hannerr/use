// Get the context of the canvas element we want to select
var ctx = document.getElementById("myChart").getContext("2d");

// Instantiate a new chart using 'data' (defined below)
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
            label: "Blue",
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: "rgba(54, 162, 235, 1)",
            data: [0]
            },
            {
            label: "Yellow",
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
            data: [2,3,4,3,2,1,2]
            },
            {
            label: "Green",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            data: [3,2,1,4,2,3,3]
            },
            {
            label: "Purple",
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 1)",
            data: [4,1,2,3,1,2,1]
            }]

        }
    });

$("form").submit(function(event) {
  event.preventDefault();
//show initial data in chart
  function showValues() {
    var fields = $(":input").serializeArray();
    //console.log(fields);
    $("#results").empty();
    jQuery.each( fields, function( i, field ) {
      $("#results").append( field.value + " " );
    });

    var data = $('#a').append( fields[0].value + " " + fields[1].value + " " + fields[2].value + " "
        + fields[3].value + " " + fields[4].value + " ").html();

    console.log(data);
  }
//update the chart with new form data
function addData(chart, label, data) {
    console.log("update");
    /*HILFE http://www.chartjs.org/docs/latest/developers/updates.html
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();*/
    }
  //$("select").change( showValues );
  showValues();
  addData();


});




