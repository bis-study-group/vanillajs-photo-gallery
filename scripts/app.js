function initGallery (gallery) {
  const mainImages = gallery.querySelectorAll('[data-gallery-image]');
  const thumbnails = gallery.querySelectorAll('[data-gallery-thumbnail]');
  function onClickThumbnail () {
    mainImages.forEach(item => item.classList.remove('active'));
    const code = this.getAttribute('data-gallery-thumbnail');
    const target = gallery.querySelector(`[data-gallery-image="${code}"]`);
    target && target.classList.add('active');
  }
  thumbnails.forEach(tn => tn.addEventListener('click', onClickThumbnail));
}

const elem = document.getElementById('myGallery');
initGallery(elem);
