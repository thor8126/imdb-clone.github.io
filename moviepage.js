var fav = localStorage.getItem("fav");
if (fav == null) {
  fav = [];
} else {
  fav = JSON.parse(fav);
}

function addToFav() {
  var data = localStorage.getItem("data");
  data = JSON.parse(data);
  for (var i = 0; i < fav.length; i++) {
    if (fav[i].Title == data.Title) {
      alert("Movie already added to favourites");
      return;
    }
  }
  fav.push(data);
  localStorage.setItem("fav", JSON.stringify(fav));
  alert("Movie added to favourites");

}


$(document).ready(function () {
    var data = localStorage.getItem("data");
    var data = JSON.parse(data);
    console.log(data);

    $(".container").css("visibility", "visible");
    $(".header .left h3").text(data.Title);
    $(".header .left span").text("Year: " + data.Year);
    $(".header .right .rating span:nth-child(2)").text(data.imdbRating);
    $(".header .right .genre span:nth-child(2)").text(data.Genre);
    $(".body .col-4 img").attr("src", data.Poster);
    $(".body .plot p").text(data.Plot);
    $(".body .presentation ul li:nth-child(1) span:nth-child(2)").text(data.Director);
    $(".body .presentation ul li:nth-child(2) span:nth-child(2)").text(data.Writer);
    $(".body .presentation ul li:nth-child(3) span:nth-child(2)").text(data.Actors);
    $(".body .presentation ul li:nth-child(4) span:nth-child(2)").text(data.Awards);
    $(".body .presentation ul li:nth-child(5) span:nth-child(2)").text(data.BoxOffice);
    $(".body .presentation ul li:nth-child(6) span:nth-child(2)").text(data.Runtime);
    $(".body .presentation ul li:nth-child(7) span:nth-child(2)").text(data.Language);
  });