import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const arrayEl = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<li><a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a></li>
`,
  ""
);
galleryEl.insertAdjacentHTML("afterbegin", arrayEl);

const optionsForModal = {
  captionsData: "alt",
  captionDelay: 250,
};

const modalFromLib = new SimpleLightbox(".gallery__link", optionsForModal);
