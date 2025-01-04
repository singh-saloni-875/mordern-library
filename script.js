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
