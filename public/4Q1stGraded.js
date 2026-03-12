const output = document.getElementById("output");
const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('ratingInput');
const genreInput = document.getElementById('genre')
const yearInput = document.getElementById('movieYear')
const titleInput = document.getElementById('movieTitle')

function renderMovies() {
    let movies = JSON.parse(localStorage.getItem("movies")) || {};
    let html = '<h2>Movie Ratings:</h2><dl>';

    Object.values(movies).forEach(s => {
        let noOfStars = `<span class="fa fa-star checked"></span>`.repeat(Math.round(s.average));
        html += `<dt> ${s.title} (${s.year}) - ${s.genre}, Rating: ${noOfStars} (${s.average.toFixed(1)}) <button type="button" onclick="deleteMovie('${s.title}')"> Delete</button></dt>`
    });

    html += `</dl>`;
    output.innerHTML = html;
}

function deleteMovie(title) {
    let movies = JSON.parse(localStorage.getItem("movies")) || {};

    if (!confirm(`Are you sure you want to delete the movie "${title}"?`)) {
        return; // Exit the function if the user cancels the deletion
    }
    
    delete movies[title];
    localStorage.setItem("movies", JSON.stringify(movies));
    renderMovies();
}

document.getElementById("movieRatingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(this).entries());

    let movies = JSON.parse(localStorage.getItem("movies")) || {};
    const title = data.movieTitle;

    if (title !== '') {
        if (movies[title]) {
            // update existing
            movies[title].sumRating += parseInt(data.rating);
            movies[title].count += 1;
            movies[title].average = movies[title].sumRating / movies[title].count;
        } else {
            // new
            movies[title] = {
                title: data.movieTitle,
                year: data.movieYear,
                genre: data.genre,
                sumRating: parseInt(data.rating),
                count: 1,
                average: parseInt(data.rating)
            };
        }

        localStorage.setItem("movies", JSON.stringify(movies));
    }

    this.reset();

    renderMovies();
});



document.addEventListener('DOMContentLoaded', function() {

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-value');

            if (ratingInput) {
                ratingInput.value = rating;
            }

            stars.forEach((s, i) => {
                const span = s.querySelector('.fa');
                if (i < rating) {
                    span.classList.add('checked');
                } else {
                    span.classList.remove('checked');
                }
            });
        });
    });
});
