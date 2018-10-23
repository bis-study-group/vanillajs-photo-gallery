let thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', removeActive, false);
  thumbnail.eventParam = thumbnail.className;
  thumbnail.addEventListener('click', addActive, false);
});

function removeActive(event) {
  const check = event.target.eventParam.slice(10);
  let target;
  switch (check) {
    case 'tn1':
      target = '.panel1';
      break;
    case 'tn2':
      target = '.panel2';
      break;
    default:
      target = null;
  }

  let panels = document.querySelectorAll(target);
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}

function addActive(event) {
  let thumbnailId = this.getAttribute('id');
  let panelId = 'panel' + thumbnailId;
  let panel = document.getElementById(panelId);
  panel.classList.add('active');
}
