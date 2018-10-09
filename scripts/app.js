document.querySelectorAll('[data-gallery]').forEach(function(gallery) {
  const mainImage = gallery.querySelector('[data-gallery-image]');
  const thumbnails = gallery.querySelectorAll('[data-gallery-src]');
  const onThumbnailClick = function() {
    const src = this.getAttribute('data-gallery-src');
    mainImage.setAttribute('src', src);
  };
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', onThumbnailClick);
  });
});
