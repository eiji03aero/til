# TIL
- one way to strengthen your knowledge (and jiatama)

# Learn
- https://qiita.com/ktsujino/items/9cfa31dced5a68720485
- https://stackoverflow.com/questions/122799/what-is-the-time-complexity-of-indexing-inserting-and-removing-from-common-data

## basic

## backlog
- 動的計画法 (文字列の編集距離を例題にするとよい)
- bitの四則演算
  - https://daeudaeu.com/arithmetic_operations/

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
- [Hash table](posts/20210415072244.md)
- [Heap](posts/20210427202939.md)
- [Binary tree](posts/20210428221836.md)
- [Rewrite recursive function with stack data structure](posts/20210429152415.md)
- [Quick select](posts/20210504120933.md)
- [String search](posts/20210504124724.md)
- [Trie](posts/20210505155559.md)
- [Graph search](posts/20210508102525.md)
- [Graph search](posts/20210508170817.md)

### sort
- [Insertion sort](posts/20210430132322.md)
- [Bubble sort](posts/20210502142515.md)
- [Heap sort](posts/20210502152513.md)
- [Quick sort](posts/20210503163050.md)
- [Merge sort](posts/20210503171828.md)

## math
- [Logarithmic](posts/20210429170314.md)
- [Types of numbers](posts/20210429205227.md)

## golang
- [Slice](posts/20210411220004.md)
- [Pointer](posts/20210413075312.md)

# Reference
## Frontend (js)
### Performance
- https://dwango-js.github.io/performance-handbook/
