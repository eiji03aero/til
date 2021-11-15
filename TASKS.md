# Tasks for article to write

## Roadmap
- Finish working on audio scraper
- Finish reading and summarizing the 'Implementing DDD' book

## Backlog
- types of js extensions and which are which?
  - js
  - cjs
  - mjs
- Proceed with golang scribbles

- learn react reconciler
  - got good example: https://github.com/inokawa/react-reconciler-practice

- https://qiita.com/ktsujino/items/9cfa31dced5a68720485

- https://stackoverflow.com/questions/122799/what-is-the-time-complexity-of-indexing-inserting-and-removing-from-common-data

- learn docker
  - learn docker pseudo tty
    - what is it?
    - what is tty in the first place?
  - what is the difference between syntaxes for CMD and ENTRYPOINT?
    - the array based or raw strings
    - what are the tradeoffs?


- bitの四則演算
  - https://daeudaeu.com/arithmetic_operations/

- learn more of html markups
  - take famous web services as example

- what are dto and dao?
  - https://techacademy.jp/magazine/19443

- what is Aggravated average?
  - http://www.pref.kyoto.jp/tokei/monthly/tokeikyoto/tk2012/tkroom201211.pdf

- what are famous hash functions?
  - take couple of them, and google them on:
    - abstract explanation of algorithm
    - pros cons

- what exactly is varchar type in postgresql?
  - is the given number to varchar directive limits the length of characters in byte length?
  - what happens if the length exceeds limit?

- what are the types of database normalization?
  - what are the definitions of them?
  - why you should avoid making row to have multiple factors which uniquely identify them?

- what exactly is process and thread?
  - is thread property of process?
  - is cpu usage of thread belongs to process's?

- inspect if golang has tail call optimization for recursive method
  - find a way to inspect call stack

- what exactly does golang iterate through when range over string?
  - is it byte type?
  - what exactly is rune type?
  - what happens if string contians mutli bytes character?
  - when ranged over => rune?
  - when index-accessed => byte?

- what exactly is DNS?
  - https://www.cloudflare.com/learning/dns/what-is-dns/
  - what does it stand for?
  - what role does it have in networking context?
  - what is DNS lookup?
  - what is DNS record?

- how https work?
  - how does it work?
  - what do server owners have to do?
  - how can it be enabled?

- what is IndexedDB?
  - what features does it provide?
  - broswer compatibility?
  - what are the limitations?

- what is malloc?
  - is this a independant library? not a property of os?
  - how does it work?
  - what are alternatives?
  - what are the advantage of this compared to others?

- how is golang's concept of struct composition different from class inheritance?
  - what are the limitations/advantage of struct composition compared to class inheritance?

- what is delete operator in golang?

- experience feedback of using of CQRS.
  - https://itnext.io/1-year-of-event-sourcing-and-cqrs-fb9033ccd1c6

- What can you do with service worker?

- What is forming virtual record in db?
  - how is it different from aggregated data?

- task based ui
  - https://cqrs.wordpress.com/documents/task-based-ui/

- EagerReadDerivation
  - https://martinfowler.com/bliki/EagerReadDerivation.html

### Heavy
- How jwt detects malicious modification of payooad
  - https://cyberpolygon.com/materials/security-of-json-web-tokens-jwt/

- What is filestream of node js?
  - How does it work? (Eg. with readline library)

- What are the components to compose OS?
  - with linux ditribution
  - what are the main components?
    - is filesystem included?

- what is terraform?
  - what problem does it solve?
  - how can i use it?
  - what knowledge does it require to run?

- what is ESB (enterprise service buses)?
  - how is it different from other messaging bus tool?

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

---

# Tasks for the web page
## Backlog
- [ ] rewrite px with rem
- [ ] when page opened, scroll up to the top
- [ ] unify use of media query
- [ ] add router functionality
  - create anchor element utility
    - accepts href
    - returns strings of:
      - href=given href
      - onclick=navigation handler (event, href)
  - navigation handler
    - if event is modified
      - early exit to allow browser native functionality (open in new tab)
    - pushstate to location
    - call path navigation handler on service
  - listen for url change, prevent default
  - replaceState to reflect page url
  - if unknown path is specified, show 404 page
- [ ] on mobile, close sidebar when one selected
  - should have utility to detect mobile
- [ ] think of refactoring how posts are organized
  - probably they are grouped by the year
- [ ] improve top page
  - show 5 latest articles
- [ ] add application service to manage callbacks from ui
- [ ] lookup new css features and apply them
- [ ] try pwa kind of features
  - manifest.json
  - service worker
  - have github pages ready
    - what is this?
- [ ] utilize external import map when ready
  - still not supported (even by chrome)
  - if possible even load the bundled esm from cdn, map them to the appropriate names

## Archive
- [x] rewrite custom css with emotion
  - see if utilizing new css features is possible
    - css imports
    - new rules
    - css variables
- [x] fix icon not shown sometimes
  - summarize what was happening
    - seems to be error `svg is not found` error is thrown when page is hot showing data
    - seems to be when the page loads and evaluates uikit-icons.min.js before uikit-min.js this happens
    - introduce ordering in dependency should do
      - solved the case!
- [x] replace extension from .js to .mjs
  - and learn Far.vim
- [x] add other sns
  - facebook
- [x] fix mobile view
  - it seems to be the content not fitting
- [x] refine markup styling
- [x] fix code block breaking layout on mobile
- [x] show README article index as top page
- [x] marked breaks throwing marked is not a function
  - https://github.com/markedjs/marked/issues/2233
  - https://github.com/markedjs/marked/pull/2226
  - seems to be their update on how module is export did not have backward compatibility for UMD context.
