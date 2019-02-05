// Insert code here.

var img_list = document.getElementsByClassName('img_list_items');

//各要素にクッリクイベントを定義
for (let i = 0; i < img_list.length; i++) {
  img_list[i].addEventListener('click', function() {
    chage_main_img(img_list[i].dataset.num, img_list[i].dataset.num2);
  });
}

//画像変更処理
var chage_main_img = function(num, num2) {
  var img_name = './images/image_';
  document.getElementById('main_img_' + num2).src = img_name + num + '.jpeg';
};
