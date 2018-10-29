const [photo1, photo2, photo3] = [
  document.getElementById('photo1'),
  document.getElementById('photo2'),
  document.getElementById('photo3'),
];

const onClickPhoto = function(choiced) {
  const target = document.getElementById(choiced);
  photo1.classList.remove('visible');
  photo2.classList.remove('visible');
  photo3.classList.remove('visible');
  target.classList.add('visible');
};

// yamamoto
changeImage = {
  mainImages: null,
  subImages: null,
  subImagesLength: null,

  getImage: () => {
    const imageBox = document.querySelector('#image_box');

    this.mainImages = imageBox.querySelectorAll('#main_box img');
    this.subImages = imageBox.querySelectorAll('.choice');
    this.subImagesLength = this.subImages.length;

    for (let i = 0; i < this.subImagesLength; i++) {
      this.subImages[i].addEventListener('click', e => {
        const clickImageId = changeImage.getClickImageId(e);
        mainImages.forEach(function(value) {
          value.classList.remove('visible');
          if (value.id == clickImageId) {
            value.classList.add('visible');
          }
        });
      });
    }
  },
  //クリックした画像のIDを取得
  getClickImageId: event => {
    return event.target.getAttribute('id');
  },
};

changeImage.getImage();
