$(document.onload = function() {
    var fav = localStorage.getItem("fav");

     if(fav == null) {
       fav = [];
       document.querySelector(".container").innerHTML = "<h1>No Favourites</h1><br><a href='/' class='btn btn-primary'>Go Back</a>";
       document.querySelector(".container").style.textAlign = "center";
       document.querySelector(".container").style.marginTop = "50px";
       document.querySelector(".container").style.color = "white";
     } else {
       fav = JSON.parse(fav);
     }

     container = document.querySelector(".container");

     fav.forEach(function(movie) {
       var card = document.createElement("div");
       card.classList.add("card");
       card.classList.add("mb-3");
       card.classList.add("col-12");
       card.classList.add("col-md-6");
       card.classList.add("col-lg-4");
       card.classList.add("col-xl-3");

       var cardBody = document.createElement("div");
       cardBody.classList.add("card-body");

       var cardTitle = document.createElement("h5");
       cardTitle.classList.add("card-title");
       cardTitle.innerHTML = "Title: "+ movie.Title;

       var cardText = document.createElement("p");
       cardText.classList.add("card-text");
       cardText.innerHTML = "Year: " + movie.Year;
       
       varImdbRating = document.createElement("h5");
       cardText.classList.add("card-text");
       cardText.innerHTML = "IMDB Rating: " + movie.imdbRating;
       

       var cardImg = document.createElement("img");
       cardImg.classList.add("card-img-top");
       cardImg.classList.add("img-fluid");
       cardImg.classList.add("img-thumbnail");
       cardImg.classList.add("imgg");
       cardImg.alt = "Poster Not available";
       cardImg.src = movie.Poster;

       var cardLink = document.createElement("a");
       cardLink.classList.add("btn");
       cardLink.classList.add("btn-primary");
       cardLink.classList.add("view-more");

       cardLink.innerHTML = "View Details";

       cardBody.appendChild(cardTitle);
       cardBody.appendChild(cardText);
       cardBody.appendChild(cardLink);

       card.appendChild(cardImg);
       card.appendChild(cardBody);

       container.appendChild(card);
     });


   });


$(document).on("click", ".view-more", function() {
    // get title from parent
    var title = $(this).parent().parent().find(".card-title").text().split(":")[1].trim();
    console.log(title);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.omdbapi.com/?apikey=9f8deefd&t="+title, true);
    xhr.onload = function() {
      var data = JSON.parse(this.responseText);
      localStorage.setItem("data", JSON.stringify(data));
      window.location.href = "/moviepage.html";
    }
    xhr.send();
  });



