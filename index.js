document.querySelectorAll('.circle').forEach(button => {
    button.addEventListener('click', ({ currentTarget }) => {
        currentTarget.querySelector('.vertical').classList.toggle('open');
        currentTarget.querySelector('.horizontal').classList.toggle('open');
        currentTarget.classList.toggle('open');
    });
});