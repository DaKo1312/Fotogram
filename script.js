// let galleryimages = [
//     "./assets/img/gallery/0872285883cee475f9533508e645f19ef0939ae8.png",
//     "./assets/img/gallery/3c416b08502bf2ed10a304bdce5c1c782b99c40d.jpg",
//     "./assets/img/gallery/4ac67c63bfc2b6a80cca4919df91a1e498ec4c07.jpg",
//     "./assets/img/gallery/714707b1ea80f159dacba47280dc1091bbebb9c7.jpg",
//     "./assets/img/gallery/872f2a95ab48c88b865e4f11d2e061a802987c88.jpg",
//     "./assets/img/gallery/8bc8dae8f655d7cac8d770f66d76f62367f5b5df.jpg",
//     "./assets/img/gallery/93265accae6c295655b8fd3cc1113f8c76b70797.jpg",
//     "./assets/img/gallery/bbd3479cb0c36ecd872f4526275e11a893e50107.jpg",
//     "./assets/img/gallery/cc1d7f8870c4b98e849a8e36c6c397e0f71486f9.jpg",
//     "./assets/img/gallery/dc4b11f7f36deb9409236c10ebcd6c849b00f447.jpg",
//     "./assets/img/gallery/f1ba9135a20ea8343ad3d5732c6f8a541ec455b5.jpg",
//     "./assets/img/gallery/f2b056a08d5edba809ca216fa6aa66a4bb612ea8.jpg",
// ];

// const gallery = document.getElementById("gallery_content");

// // erstellt 12 divs, die in der gallery_content Klasse liegen, damit sie im HTML angezeigt werden
// for (let i = 0; i < 12; i++) {

//     const item = document.createElement("div");

//     // DIESE Klasse bekommt jedes Div
//     item.classList.add("gallery_item");

//     item.textContent = i;

//     // sagt den divs, das sie Kinder des umlegenden Elements sind
//     gallery.appendChild(item);
// }

const gallery = document.getElementById("gallery_content");

// erstellt 12 divs
for (let i = 1; i <= 12; i++) {

    const item = document.createElement("div");

    // Klasse für das Div
    item.classList.add("gallery_item");

    // Bild erstellen
    const img = document.createElement("img");

    // Bildpfad/formatierung festlegen
    img.src = `./assets/img/gallery/${i}.jpg`; 
    img.width = 150;
    img.height = 150;

    // Bild dem Div hinzufügen
    item.appendChild(img);

    // Div der Gallery hinzufügen
    gallery.appendChild(item);
}