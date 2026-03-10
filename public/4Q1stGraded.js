const output = document.getElementById("output");
const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('ratingInput');
const genreInput = document.getElementById('genre')
const yearInput = document.getElementById('movieYear')
const titleInput = document.getElementById('movieTitle')

document.getElementById("movieRatingForm").addEventListener("submit", function(e) {
    e.preventDefault();


    const data = Object.fromEntries(new FormData(this).entries());

    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(data);
    localStorage.setItem("movies", JSON.stringify(movies));

    alert("Movie rating saved successfully!");
    this.reset();

    let html = '<h2>Movie Ratings:</h2><dl>';

    movies.forEach(s => {
        if(s.movieTitle !== ''){
        let noOfStars = `<span class="fa fa-star checked"></span>`.repeat(s.rating);

        html += `<dt> ${s.movieTitle} (${s.movieYear}) - ${s.genre}, Rating: ${noOfStars} <button type="button" onclick="deleteMovie('${s.movieTitle}')"> Delete</button></dt>`
        }
    });

    html += `</dl>`;
    output.innerHTML = html;

    
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
