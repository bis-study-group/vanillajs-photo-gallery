# Vanilla JavaScript で画像ギャラリーを作ろう

## 課題

Vueの前にまずは「普通の」JavaScriptが書けないといけませんね！  
というわけで、Vanilla JavaScript で簡単な画像ギャラリーを作ってください。  
（Vanilla JavaScript というのは、jQuery や Vue などの使わない、素の JavaScript という意味です。）

- ライブラリやフレームワークは使用せずに書きましょう。
- 最新版の Google Chrome で動けばOKです。
- スタイルは最小限で構いません。
- レスポンシブも考慮しなくてOKです。

開発にあたっては Live Server を使用しましょう。  
[こちらの記事](https://www.hypertextcandy.com/live-reload-web-servers)の VS Code の項を参考にしてください。

## 完成図

サムネイル（小さい画像）をクリックすると、メイン画像（大きい画像）が切り替わります。

![完成図](https://github.com/bis-study-group/vuejs-photo-gallery/blob/master/doc/sample.gif)

画像もリポジトリに入ってるのでそれ使ってください。

- `image_1.jpeg` `image_2.jpeg` `image_3.jpeg` → 大きい画像
- `thumbnail_1.jpeg` `thumbnail_2.jpeg` `thumbnail_3.jpeg` → 小さい画像

## 提出方法

こちらのリポジトリをCloneしてください。

```bash
$ git clone git@github.com:bis-study-group/vanillajs-photo-gallery.git
```

自分の名前のブランチを作成してください。

```bash
$ git checkout -b yamamoto
```

コードが書けたらプッシュしましょう。

```bash
$ git push origin yamamoto
```

## 課題 2

この課題ができたら[次の課題](./exercise2/README.md)に進んでください。
