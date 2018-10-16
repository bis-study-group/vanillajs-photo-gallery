let thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', removeActive, false);
  thumbnail.addEventListener('click', addActive, false);
});

function removeActive() {
  let panels = document.querySelectorAll('.panel');
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}

function addActive() {
  let thumbnailId = this.getAttribute('id');
  let panelId = 'panel' + thumbnailId;
  let panel = document.getElementById(panelId);
  panel.classList.add('active');
}
