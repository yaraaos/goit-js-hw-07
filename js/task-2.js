const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createGalleryCard = imageInfo => {
  return `
  <li class = "gallery-item">
    <a href = "#">
      <img src="${imageInfo.url}" alt="${imageInfo.alt}" width="360" height="300">
    </a>
  </li>
  `;
};

const galleryCardTemplate = images.map(imageInfo => createGalleryCard(imageInfo)).join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = galleryCardTemplate;