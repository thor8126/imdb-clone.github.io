$(document).ready(function() {
    $(".view-more").click(function() {
        var title = $("#title").text();
        var url = "https://www.omdbapi.com/?apikey=9f8deefd&t=" + title;
        $.ajax({
            url: url,
            type: "GET",
            success: function(data) {
                var movie = JSON.stringify(data);
                localStorage.setItem("data", movie);
                window.location.href = "/moviepage.html";
            }
        })
    })
})


// create a favourite object in local storage

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
            alert("Movie already in favourites");
            return;
        }
    }
    fav.push(data);
    localStorage.setItem("fav", JSON.stringify(fav));
    alert("Movie added to favourites");
}


function searchMovie() {
    var search = document.getElementById("search").value;
    var url = "https://www.omdbapi.com/?apikey=9f8deefd&t=" + search;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function() {
        var data = JSON.parse(this.response);
        if (xhr.status >= 200 && xhr.status < 400) {
            localStorage.setItem("data", JSON.stringify(data));
            document.querySelector(".card").style.visibility = "visible";
            document.getElementById("title").innerHTML = data.Title;
            document.getElementById("about-movie").innerHTML = data.Plot;
            var poster = document.getElementById("poster");
            poster.src = data.Poster;
        } else {
            console.log("error");
        }
        if (data.Response == "False") {
            alert("Movie not found");
            document.querySelector(".card").style.visibility = "hidden";
        }
    }
    xhr.send();
}
