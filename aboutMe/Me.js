window.addEventListener('scroll', function() {
    var card = document.querySelector('.card');
    var cardPosition = card.getBoundingClientRect().top;
    
    if (cardPosition <= 0) {
        card.classList.add('sticky');
    } else {
        card.classList.remove('sticky');
    }
});