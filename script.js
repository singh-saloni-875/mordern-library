document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const feedbackDisplay = document.getElementById('feedback-display');
    const feedbackText = this.querySelector('textarea').value;
    feedbackDisplay.innerHTML += <p>${feedbackText}</p>;
    this.reset();
});

// FAQ Toggle
document.querySelectorAll('.faq-item h3').forEach(question => {
    question.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
});
});
// setInterval(() => {

// },5000;
// );