$(document).ready(function() {
    let currentIndex = 0;
    let images = $('.carousel-container img');
    let totalImages = images.length;
    let intervalInSeconds = 10; // Tempo em segundos para mudar automaticamente

    images.each(function(index, element) {
        console.log("Imagem " + index + ": " + $(element).attr('src'));
    });

    function showImage(index) {
        images.hide();
        images.eq(index).show();
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    $('.next').on('click', function() {
        nextImage();
        resetInterval();
    });

    $('.prev').on('click', function() {
        prevImage();
        resetInterval();
    });

    function resetInterval() {
        clearInterval(intervalID); // Limpa o timer anterior
        intervalID = setInterval(nextImage, intervalInSeconds * 1000); // Inicia um novo timer
    }

    let intervalID = setInterval(nextImage, intervalInSeconds * 1000); // Inicializa o timer

    showImage(currentIndex);
});
