import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = createGallery(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(galleryItems) {
  return galleryItems
  .map(( {preview, original, description} ) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a>
    </li>
    `
  })
  .join('');  
};

const lightbox = new SimpleLightbox('.gallery a',
  {
    captionsData: 'alt',
    captionPosition: 'outside',
    captionDelay: 250,
  });
