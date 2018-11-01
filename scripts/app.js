const sliders = (slides, thumbnails) => {
  const slider = {
    slides: document.querySelectorAll(slides),
    thumbnails: document.querySelectorAll(thumbnails),
    isActive: 'is-active',
    current: null,

    slide: () => {
      slider.current = slider.slides[0];
      slider.current.classList.add(slider.isActive);

      for (let i = 0; i < slider.thumbnails.length; i++) {
        slider.thumbnails[i].addEventListener('click', () => {
          slider.current.classList.toggle(slider.isActive);
          slider.current = slider.slides[i];
          slider.current.classList.toggle(slider.isActive);
        });
      }
    },
  };

  return slider;
};

sliders('.sliders1 .slide-item', '.sliders1 .thumb-item').slide();
sliders('.sliders2 .slide-item', '.sliders2 .thumb-item').slide();
