#  Tasks for article to write

## backlog
- https://qiita.com/ktsujino/items/9cfa31dced5a68720485
- https://stackoverflow.com/questions/122799/what-is-the-time-complexity-of-indexing-inserting-and-removing-from-common-data
- bitの四則演算
  - https://daeudaeu.com/arithmetic_operations/

# Tasks for the web page
## Current
- [ ] show README article index as top page
- [ ] fix code block breaking layout on mobile
- [ ] add router functionality
  - listen for url change, prevent default
  - replaceState to reflect page url
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
