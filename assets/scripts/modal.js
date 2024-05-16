let myButton = document.querySelector('#myBtn');
let backdrop = document.querySelector('.backdrop');
let close = document.querySelector('.close');

myButton.addEventListener('click', openModal);
close.addEventListener('click', closeModal)
document.addEventListener('click', function(element) {
    if(element.target === backdrop) {
        closeModal();
    }
});
document.addEventListener('keydown', function (key) {
    if(key.key === 'Escape') {
        closeModal();
    }
});
function openModal() {
    backdrop.style.display = 'block';
}

function closeModal() {
    backdrop.style.display = 'none';
}


