const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImageBtn");
const deleteImageBtn = document.getElementById("deleteImageBtn");
const gallery = document.getElementById("gallery");

let selectedImage = null;

// Agregar imagen
function addImage() {
  const url = imageUrlInput.value.trim();

  if (url === "") {
    alert("Por favor ingresa una URL válida.");
    return;
  }

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen de la galería";
  img.classList.add("fade-in");

  // click para seleccionar imagen
  img.addEventListener("click", () => {
    selectImage(img);
  });

  gallery.appendChild(img);
  imageUrlInput.value = "";
}

// Seleccionar imagen
function selectImage(img) {
  const images = document.querySelectorAll(".gallery img");
  images.forEach(image => image.classList.remove("selected"));

  img.classList.add("selected");
  selectedImage = img;
}

// Eliminar imagen seleccionada
function deleteSelectedImage() {
  if (selectedImage) {
    selectedImage.remove();
    selectedImage = null;
  } else {
    alert("No hay ninguna imagen seleccionada.");
  }
}

// Eventos
addImageBtn.addEventListener("click", addImage);
deleteImageBtn.addEventListener("click", deleteSelectedImage);

// Tecla Enter para agregar imagen
imageUrlInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addImage();
  }
});
