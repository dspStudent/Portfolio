document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    this.textContent = this.textContent === 'Night Mode' ? 'Day Mode' : 'Night Mode';
});
