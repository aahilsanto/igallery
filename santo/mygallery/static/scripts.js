const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;


function openLightbox(index) {
    lightbox.classList.add('active');
    lightboxImg.src = galleryImages[index].src;
    currentIndex = index;
}

galleryImages.forEach(function (image, index) {
    image.addEventListener('click', function () {
        openLightbox(index);
    });
});



function navigateLeft() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
}
function close(){
    lightbox.classList.remove('active');
}
cb.addEventListener('click', function () {
    close();
});
prevBtn.addEventListener('click', function () {
    navigateLeft();
});

function navigateRight() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
}

nextBtn.addEventListener('click', function () {
    navigateRight();
});
