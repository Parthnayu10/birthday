// Open card functionality
document.getElementById("openCard").addEventListener("click", function() {
    document.getElementById("cover").style.display = "none";
    document.getElementById("inside").style.display = "block";
});

// Image Carousel
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-img');

document.querySelector('.next').addEventListener('click', function() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
});

document.querySelector('.prev').addEventListener('click', function() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].style.display = 'block';
});

// Music Player
const playButton = document.getElementById('playSong');
const song = document.getElementById('birthdaySong');

playButton.addEventListener('click', function() {
    if (song.paused) {
        song.play();
        playButton.textContent = "Pause Birthday Song 🎶";
    } else {
        song.pause();
        playButton.textContent = "Play Birthday Song 🎶";
    }
});
