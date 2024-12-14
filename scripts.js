function addMovie() {
    var title = document.getElementById("new_title").value;
    var year = document.getElementById("new_year").value;
    var actors = document.getElementById("new_actors").value;

    if (title === "" || year === "" || actors === "") {
        console.log("Insufficient data!");
        alert("Please provide all the required data in order to add a movie (title, year and actors).");
    } else {
        console.log("Adding movie: " + title + ", " + year + ", " + actors)

        var movieList = document.getElementById("movie_list");
        var li = document.createElement("li");
        li.innerHTML = "<input type='checkbox'> " + title + ", " + year + ", " + actors;
        movieList.appendChild(li);

        document.getElementById("new_title").value = "";
        document.getElementById("new_year").value = "";
        document.getElementById("new_actors").value = "";
    }
}

function deleteSelected() {
    console.log("Removing selected elements");
    document.querySelectorAll("input[type='checkbox']:checked")
            .forEach(el => {
                document.getElementById("movie_list").removeChild(el.parentNode);
                console.log("Removed element: " + el.parentElement.innerHTML);
            });
}