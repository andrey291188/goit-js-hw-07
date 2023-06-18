import { galleryItems } from './gallery-items.js';

// Change code below this line

const boxUlList = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`).join("");

boxUlList.insertAdjacentHTML("beforeend", markup);
boxUlList.addEventListener("click", onClick);

function onClick(evt) {
evt.preventDefault();

const { target } = evt;
if (!target.classList.contains("gallery__image")){
    return;
}

const imgId = target.alt
const currentItem = galleryItems.find(({description}) => description === imgId)
const instance = basicLightbox.create(`<div class="modal"><img src="${currentItem.original}" width="900" alt="${currentItem.description}"></div>
`)

instance.show();

document.addEventListener("keydown", onEscKeyPress);

function onEscKeyPress(evt) {
  const ESC_KEY_CODE = "Escape"
  if (evt.code === ESC_KEY_CODE) {
    instance.close()
    document.removeEventListener("keydown", onEscKeyPress);;
  }
}
}

