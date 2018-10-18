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
