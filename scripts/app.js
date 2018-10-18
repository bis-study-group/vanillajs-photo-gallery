const slider = {

  slides: document.querySelectorAll('.slide-item'),
  thumbnails: document.querySelectorAll('.thumb-item'),
  isActive: 'is-active',
  current: null,

  slide: () => {
    slider.current = slider.slides[0];
    slider.current.classList.add(slider.isActive);

    for(let i = 0; i < slider.thumbnails.length; i++) {
      slider.thumbnails[i].addEventListener('click', () => {
        slider.current.classList.toggle(slider.isActive);
        slider.current = slider.slides[i];
        slider.current.classList.toggle(slider.isActive);
      });
    }
  }

}

slider.slide();
