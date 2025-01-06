// nav
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('show');
}
// FAQ Answers
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Gallery 
document.getElementById('galleryButton').addEventListener('click', () =>
{
    window.location.herf= 'gallery.html';
});


// rating 

const stars = document.querySelectorAll('.stars span');
const commentBox = document.getElementById('ratingComment');
const submitButton = document.getElementById('submitRating');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach(s => s.classList.remove('selected'));
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('selected');
        }
    });
});

submitButton.addEventListener('click', () => {
    const rating = document.querySelectorAll('.stars span.selected').length;
    const comment = commentBox.value;

    if (rating === 0) {
        alert('Please select a star rating.');
    } else {
        console.log(`rating: ${rating}, Comment: ${comment}`);
        alert('Thank you for your feedback!');
    }
});
// feedback display
const feedbackForm = document.getElementById('feedback-form');
const feedbackDisplay = document.getElementById('feedback-display');

feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = feedbackForm.querySelector('input').value;
    const feedback = feedbackForm.querySelector('textarea').value;

    const feedbackEntry = document.createElement('div');
    feedbackEntry.innerHTML = `<strong>${name}:</strong> ${feedback}`;
    feedbackDisplay.appendChild(feedbackEntry);

    feedbackForm.reset();
});

// animation
document.addEventListener("DOMContentLoaded", () => {
    const words = ["Welcome!", "Discover!", "Explore!", "the World!", " of Knowledge!"];
    let i = 0;
    setInterval(() => {
        document.getElementById("animation").innerText = words[i];
        i = (i + 1) % words.length;
    }, 2000);
});