function searchMovie() {
  $("#movie-list").html("");

  $.ajax({
    url: "http://www.omdbapi.com/",
    type: "get",
    dataType: "json",
    data: {
      apikey: "471b3ae1",
      s: $("#search-input").val(),
    },
    success: function (result) {
      if (result.Response == "True") {
        let movies = result.Search;

        $.each(movies, function (i, data) {
          $("#movie-list").append(
            `
            <div class="col-6 col-sm-4 col-md-3 mb-3">
              <div class="card">
                <img src="` +
              data.Poster +
              `" class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">` +
              data.Title +
              `</h5>
                  <h6 class="card-subtitle my-2 text-muted">` +
              data.Year +
              `</h6>
                  <a href="#" class="btn btn-dark mt-3 view-detail" data-bs-toggle="modal"
      data-bs-target="#exampleModal" data-id="` +
              data.imdbID +
              `">View Detail</a>
                </div>
              </div>
            </div>
          `
          );
        });

        // untuk menghilangkan value search setelah pencarian
        // $("#search-input").val("");
      } else {
        $("#movie-list").html(
          `
          <div class="col">
          <h3 class="text-center">` +
            result.Error +
            `</h3>
        </div>
        `
        );
      }
    },
  });
}

$("#search-button").on("click", function () {
  searchMovie();
});

$("#search-input").on("keyup", function (event) {
  if (event.keyCode === 13) {
    searchMovie();
  }
});

$("#movie-list").on("click", ".view-detail", function () {
  $.ajax({
    type: "get",
    url: "http://www.omdbapi.com/",
    data: {
      apikey: "471b3ae1",
      i: $(this).data("id"),
    },
    dataType: "json",
    success: function (movie) {
      if (movie.Response === "True") {
        $(".modal-body").html(
          `
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <img src="` +
            movie.Poster +
            `" class="img-fluid mb-2 text-center md-text-center">
              </div>

              <div class="col-md-8">
                <ul class="list-group">
                  <li class="list-group-item"><h5>Title :  ` +
            movie.Title +
            ` </h5></li>

                  <li class="list-group-item">Released : ` +
            movie.Released +
            `</li>

                  <li class="list-group-item">Genre : ` +
            movie.Genre +
            `</li>

                  <li class="list-group-item">Director : ` +
            movie.Director +
            `</li>

                  <li class="list-group-item">Actors : ` +
            movie.Actors +
            `</li>
                </ul>
              </div>
            </div>
          </div>
        `
        );
      }
    },
  });
});
