// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const getGalleryItem =
  galleryItems => `<a class="gallery__item" href="${galleryItems.original}">
<img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}" />
</a>`;

const getListGallery = galleryItems.map(item => getGalleryItem(item));

console.log(getListGallery);

const refs = {
  list: document.querySelector(`.gallery`),
};

console.log(refs.list);

refs.list.insertAdjacentHTML(`beforeend`, getListGallery.join(``));

console.log(galleryItems);

refs.list.addEventListener(`click`, onGalleryClick);

let ImgActive = null;

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== `IMG`) {
    return;
  }

  const CurrentActiveImg = document.querySelector(`.img--active`);
  console.log(CurrentActiveImg);

  if (CurrentActiveImg) {
    event.target.classList.remove(`.img--active`);
  }

  const nextImgActive = event.target;
  nextImgActive.classList.add(`.img--active`);
  console.log(event.target);

  ImgActive = nextImgActive.getAttribute(`src`);
  console.log(ImgActive);
}

var lightbox = new SimpleLightbox(`.gallery a`, {
  captionsData: `alt`,
  captionPosition: `bottom`,
  captionDelay: `250 ms`,
});
