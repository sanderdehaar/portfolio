// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the buttons and articles
    const buttons = document.querySelectorAll('.outcomes button');
    const articles = document.querySelectorAll('article');

    // Add click event listeners to each button
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the index of the clicked button
            const index = parseInt(this.getAttribute('data-index'));

            // Remove is-active class from all buttons and articles
            buttons.forEach(btn => btn.classList.remove('is-active'));
            articles.forEach(art => art.classList.remove('is-active'));

            // Add is-active class to the clicked button and corresponding article
            this.classList.add('is-active');
            articles[index].classList.add('is-active');
        });
    });
});