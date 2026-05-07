// #region gallery

const gallery = document.getElementById("gallery_content");

for (let i = 0; i <= 11; i++) {
    const item = document.createElement("div"); // erstellt 12 divs

    item.classList.add("gallery_item"); // Klasse für das Div

    const img = document.createElement("img"); // Bild erstellen

    img.src = `./assets/img/gallery/${i}.jpg`; // Bildpfad / Formatierung festlegen
    img.width = 150;
    img.height = 150;

    item.appendChild(img); // Bild dem Div hinzufügen

    gallery.appendChild(item); // Div der Gallery hinzufügen
}

// #endregion

// #region overlay

const lightbox = document.getElementById("lightbox");
document.body.appendChild(lightbox);

const images = document.querySelectorAll("img");
images.forEach((image) => {
    image.addEventListener("click", (e) => {
        lightbox.classList.add("active");
        const img = document.createElement("img");
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
});

// #endregion
