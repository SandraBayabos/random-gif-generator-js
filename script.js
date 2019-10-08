// RANDOM GIF GENERATOR

const gifButton = document.getElementById("image-button");
let gifArea = document.getElementById("image-container");

//CREATE IMAGE IN JAVASCRIPT

gifButton.addEventListener("click", function() {
  // USING FETCH

  //fetch(
  //   "https://api.giphy.com/v1/gifs/random?api_key=K93XvEF6TLGx2ohemi8JkMJshHM2nZHp&tag=&rating=G"
  // )
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(result) {
  //     console.log(result.data.image_url);
  //     let image = document.createElement("img");
  //     image.setAttribute("src", `${result.data.image_url}`);
  //     gifArea.innerHTML = "";
  //     gifArea.append(image);
  //   });

  // USING AJAX

  $.ajax({
    url:
      "https://api.giphy.com/v1/gifs/random?api_key=K93XvEF6TLGx2ohemi8JkMJshHM2nZHp&tag=&rating=G",
    method: "GET",
    success: function(result) {
      console.log(result);
      console.log(result.data.image_url);
      gifArea.innerHTML = "";
      let image = document.createElement("img");
      image.setAttribute("src", `${result.data.image_url}`);
      gifArea.append(image);
    },
    error: function(error) {
      console.log(`Error: ${error}`);
    }
  });
});

// RANDOM JOKE GENERATOR

const jokeButton = document.getElementById("joke-button");
let jokeArea = document.getElementById("joke-container");

// USING FETCH

jokeButton.addEventListener("click", function() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      console.log(data.value);
      jokeArea.innerHTML = "";
      jokeArea.innerHTML = data.value;
    });
  console.log("I'm after the fetch!!!");

  //USING JAX

  // $.ajax({
  //   url: "https://api.chucknorris.io/jokes/random",
  //   method: "GET",
  //   success: function(result) {
  //     console.log(result);
  //     console.log(result.value);
  //     jokeArea.innerHTML = "";
  //     jokeArea.innerHTML = result.value;
  //   },
  //   error: function(error) {
  //     console.log(`Error: ${error}`);
  //   }
  // });
});
