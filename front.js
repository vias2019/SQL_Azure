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
  
    var listOfGenre = [
        'Comedies',
        'Horror Movies',
        'Thrillers',
        'Action & Adventure',
        'Dramas',
        'Children & Family Movies',
        'Classic Movies',
        'Documentaries',
        'Stand-Up Comedy',
        'Cult Movies'
    ];

    var listOfRating = [
        'PG-13',
        'PG',
        'R',
        'G'
    ];

    function dropDownActors() {
      listOfActors.sort();
      for (var i = 0; i < listOfActors.length; i++) {
        var actor = $("<option>");
        actor.text(listOfActors[i]);
        $("#actor_id").append(actor);
      }
    }
    dropDownActors();

    function dropDownGenre() {
        for (var i = 0; i < listOfGenre.length; i++) {
          var genre = $("<option>");
          genre.text(listOfGenre[i]);
          $("#genre_id").append(genre);
        }
      }
    dropDownGenre();

    function dropDownRating() {
      for (var i = 0; i < listOfRating.length; i++) {
        var rating = $("<option>");
        rating.text(listOfRating[i]);
        $("#rating_id").append(rating);
      }
    }
  dropDownRating();
  
    function clear() {
      $('#genre_id').val("");
      $('#actor_id').val("");
      $('#rating_id').val("");
    }
  
    function updateTable() {          //to update
        let temp = query(1);
        for (let i = 0; i < temp.length; i ++)
        {
            $('#show-table').append(
            '<tr>' +
            '<td>' + temp[i][0].value + '</td>' +
            '<td>' + temp[i][1].value + '</td>' +
            '<td>' + temp[i][2].value + '</td>' +
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
        query: $('#genre_id').val(),
        actor: $('#actor_id').val(),
      };
      trainscheduler.push(newObjectForNewTrain);
    });
  });