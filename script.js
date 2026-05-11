// #region gallery

function createGallery() {
    const gallery = document.getElementById("gallery_content");

    for (let i = 0; i <= 11; i++) {
        const item = document.createElement("div"); // erstellt 12 divs

        item.classList.add("gallery_item"); // Klasse für das Div

        const img = document.createElement("img"); // Bild wird erstellt
        img.alt = `Photo ${i + 1}`; // alternativ Text zu jedem Bild dem index + 1

        img.src = `./assets/img/gallery/${i}.jpg`; // Bildpfad / Formatierung festlegen
        img.width = 150; // der Browser nimm hier automatisch an das es Pixel sind
        img.height = 150;

        item.appendChild(img); // Bild dem Div hinzufügen

        gallery.appendChild(item); // Div der Gallery hinzufügen
    }
}
createGallery();

// #endregion

// #region overlay

const overlay = document.getElementById("overlay");
let currentImageIndex = 0;
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox_img");
const lightboxTitle = document.getElementById("lightbox_title");
const closeBtn = document.getElementById("closeBtn");
const imageCounter = document.getElementById("image_counter");
const images = document.querySelectorAll(".gallery_item img");

function updateLightbox() {
    const currentImage = images[currentImageIndex];
    lightboxImg.src = currentImage.src;
    lightboxTitle.innerText = currentImage.alt;
    imageCounter.innerText = `${currentImageIndex + 1} / ${images.length}`;
}

images.forEach((image, index) => { // Klick auf das Bild (jedes)
    image.addEventListener("click", () => {
        currentImageIndex = index;
        overlay.style.display = "flex";
        document.body.style.overflow = "hidden"; // deaktiviert das scrollen bei aktiver Lightbox
    });

    updateLightbox();
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
        document.body.style.overflow = ""; // aktiviert das scrollen bei inaktiver Lightbox
    }
});

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

nextBtn.addEventListener("click", () => {
    // Bild vor
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    updateLightbox();
});

prevBtn.addEventListener("click", () => {
    // Bild zurück
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    updateLightbox();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        overlay.style.display = "none";
    }
});

// #endregion
