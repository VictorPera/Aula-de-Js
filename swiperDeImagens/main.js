$(document).ready(function() {
    var currentIndex = 0;
    var images = $('.carousel-container img');
    var totalImages = images.length;

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
    
    $('.next').on('click', nextImage);
    $('.prev').on('click', prevImage);
    showImage(currentIndex);
});