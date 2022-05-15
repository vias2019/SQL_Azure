$(document).ready(function () {

    var listOfActors = [ //might add more later
        'Eddie Murphy',
        'Oscar Jaenada',
        'Molly Shannon',
        'Barrett Doss',
        'Ankit Yadav',
        'John Travolta',
        'Zachary Quinto',
        'Nathalie Baye',
        'Rosamund Pike'
    ];
  
    var listOfQueries = [
        'Find Movie by Actor',
        'Find Movie by Rating',
        'Find Movie Specific Duration'
    ];

    function dropDownActors() {
      listOfActors.sort();
      for (var i = 0; i < listOfActors.length; i++) {
        var addActor = $("<option>");
        addActor.text(listOfActors[i]);
        $("#actor").append(addActor);
      }
    }
    dropDownActors();

    function dropDownQuery() {
        for (var i = 0; i < listOfQueries.length; i++) {
          var addQuery = $("<option>");
          addQuery.text(listOfQueries[i]);
          $("#query_id").append(addQuery);
        }
      }
    dropDownQuery();
  
    function clear() {
      $('#query_id').val("");
      $('#actor').val("");
    }
  
    function updateTable() {          //to update
        console.log(queryOnLoad);
        for (let i = 0; i < queryOnLoad.length; i ++)
        {
            $('#show-table').append(
            '<tr>' +
            '<td>' + queryOnLoad[i][0].value + '</td>' +
            '<td>' + queryOnLoad[i][1].value + '</td>' +
            '<td>' + queryOnLoad[i][2].value + '</td>' +
            '</tr>'
            );
      }
    }
    updateTable();
  
    $("#clearSearch").on("click", function () {  
      clear();
    });
  
    $("#search").on("click", function (event) { // to update
      event.preventDefault();
      console.log('clicked');
      var newObjectForNewTrain = {
        query: $('#query_id').val(),
        actor: $('#actor').val(),
      };
      trainscheduler.push(newObjectForNewTrain);
    });
  });