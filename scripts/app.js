// ギャラリーを初期化する関数
// 大小の画像を含むルート要素を渡す
function initGallery (gallery) {
  // 大きい画像
  const mainImages = gallery.querySelectorAll('[data-gallery-image]');
  // 小さい画像
  const thumbnails = gallery.querySelectorAll('[data-gallery-thumbnail]');
  // 小さい画像をクリックした時のイベントハンドラ
  function onClickThumbnail () {
    // 大きい画像を全部隠す
    mainImages.forEach(item => item.classList.remove('active'));
    // 表示する対象の番号を取得する
    const code = this.getAttribute('data-gallery-thumbnail');
    // 表示する対象の要素を取得する
    const target = gallery.querySelector(`[data-gallery-image="${code}"]`);
    // 要素があったら表示する
    target && target.classList.add('active');
  }
  // 小さい画像にイベントハンドラを登録する
  thumbnails.forEach(tn => tn.addEventListener('click', onClickThumbnail));
}

const elem = document.getElementById('myGallery');
initGallery(elem);

const elem2 = document.getElementById('myGallery2');
initGallery(elem2);
