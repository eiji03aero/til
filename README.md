# TIL
- one way to strengthen your knowledge (and jiatama)

# Learn
- https://qiita.com/ktsujino/items/9cfa31dced5a68720485
- https://stackoverflow.com/questions/122799/what-is-the-time-complexity-of-indexing-inserting-and-removing-from-common-data

## basic
- 実装, 空間/時間の計算量

- find, add, delete
  - [ ] ハッシュテーブル

## backlog
- 非平衡二分探索木に対するfind, add操作(deleteは複雑なのでパス)
- ヒープのpush, peek, pop(bubble up, bubble down)
- スタックとキュー
- 関数の再起呼び出しを明示的なスタックを使って書き換える記法
- 挿入ソート、バブルソート、クイックソート、マージソート (クイックソート・マージソートがなぜO(NlogN)時間か答えられるようにすること)
- (追記)quickselect: 線形時間で非ソート列の中央値(もしくはk番目に大きい要素)が求まる
- ナイーブな文字列検索
- ナイーブなtrie
- バイナリサーチ
- グラフのDFS/BFS
- ダイクストラ法、primのアルゴリズム (priority queueを使うと計算量オーダーが変わる)
- 動的計画法 (文字列の編集距離を例題にするとよい)

# Todo
## Current
- [ ] fix code block breaking layout on mobile
- [ ] add router functionality
  - listen for url change, prevent default
  - if unknown path is specified, show 404 page
- [ ] improve top page
  - show 5 latest articles
- [ ] add application service to manage callbacks from ui
- [ ] lookup new css features and apply them
- [ ] try pwa kind of features
  - manifest.json
  - service worker

## Archive
- [x] add library to parse and format markdown files in content
  - marked
- [x] improve ui
  - add type field on post
    - summary, thoughts
  - move the page template from index.html to js
  - sidebar item
    - anchor
    - formatted timestamp
    - tags
  - make it responsive
    - mobile a okay
    - sidebar
    - content of top nav
  - rename data json file
- [x] add ui framework to make it look better
  - choose one:
    - has sidebar feature
    - has typography support
- [x] migrate over to netlify
  - github pages has some drawbacks:
    - page cannot use absolute path
      - page's root path is under subdirectory named with repository name. harder to get along with local development
        - https://hoge.github.io/til/[page paths]
  - rewrite the absolute path part which aims for github pages
    - the ones has /til/...
  - disable github pages
  - create service on netlify
  - integrate netlify's github repository feature
- [x] have index page
  - have github pages ready

# Index
## algorithm and data structure
- [Unsorted array](posts/20210411205657.md)
- [Sorted array](posts/20210412215614.md)
- [Singly linked list](posts/20210413073052.md)
- [Doubly linked list](posts/20210414203145.md)

## golang
- [Slice](posts/20210411220004.md)
- [Pointer](posts/20210413075312.md)
