function changeimg(url, id) {
  document.getElementById(id).src = url;
}

// かなうちファンクション
const changeImage = {
  mainImage: null,
  subImages: null,
  subImagesLength: null,

  init: () => {
    const slideWrapper = document.querySelector("#slider-container");

    this.mainImage = slideWrapper.querySelector("#slide-main-photo");
    this.subImages = slideWrapper.querySelectorAll(".thumbnail");
    this.subImagesLength = this.subImages.length;

    for(let i = 0; i < this.subImagesLength; i++) {
      this.subImages[i].addEventListener('click', (e) => {
        const imagePath = changeImage.getImagePath(e)
        changeImage.setImage(imagePath);
      });
    }
  },

  getImagePath: (event) => {
    return event.target.getAttribute('src');
  },

  setImage: (path) => {
    this.mainImage.setAttribute('src', path);
  }
}

changeImage.init();
