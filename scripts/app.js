// Insert code here.
document.getElementById('js--click_1').onclick = function() {
  chage_main_img(1);
};

document.getElementById('js--click_2').onclick = function() {
  chage_main_img(2);
};

document.getElementById('js--click_3').onclick = function() {
  chage_main_img(3);
};

chage_main_img = function(num) {
  var img_name = './images/image_';
  document.getElementById('main_img').src = img_name + num + '.jpeg';
};
