# Tasks for the web page
## Backlog
- [ ] Improve golang learning note post
  - organize the content
  - see if folding is available on marked
    - want to hide the scribbles summary
- [ ] add loader on content
- [ ] refine top page
  - show 5 latest articles
- [ ] implement lazy load for side menu items

### Epic
- [ ] Show link in richer way
  - just like a qiita article does
  - lookup marked
    - to see if custom markdown is possible
    - if not, probably will have to directly wirte html ... ?
  - show title
  - show domain
  - show thumbnail
    - can we retrieve only og tag?

- [ ] Integration with mash
  - allow opening/closing mash
    - on overlay?
      - just like the ones that people use on computers. transparent terminal window to be opened over other windows.
    - the window should have
      - background to be transparent so that you can still see how page is
      - have top menu-bar area which only has close button in macos design
    - should opened via keyboard shortcut
      - ponder on which combination of keystroke to open
  - should have help page ready
    - to inform the users of how to use it
  - should be embeded via iframe
    - so that we can just utilize what is deployed
  - the mash should be configurable to communicate with parent document
    - mash should accept registration of custom commands
      - mash should propagate the command and arguments to parent document
      - mash should accept message to show in console
  - the custom commands to implement on til would be
    - grep search on posts

- [ ] Add portfolio page
  - to be a page with portfolio
  - explain each projects with visual and consice description

- [ ] Search page
  - page to search posts
  - show list of posts matched the search
    - show everything at once at first
  - search options could be:
    - type (summary, learn ...)
    - tags (selection)
    - fuzzy match on title

### Icebox
- [ ] implement updated at for article
- [ ] think of refactoring how posts are organized
  - probably they should be grouped by the year
- [ ] try pwa kind of features
  - manifest.json
  - service worker
  - have github pages ready
    - what is this?
- [ ] utilize external import map when ready
  - still not supported (even by chrome)
  - if possible even load the bundled esm from cdn, map them to the appropriate names
- [ ] lookup new css features and apply them

## Archive
- [x] on mobile, close sidebar when one selected
  - should have utility to detect mobile
- [x] refine 404 page
  - adjust color for visibility
  - size for mobile (kind of small now)
  - accept another
- [x] add router functionality
  - [ticket](posts/20211120162031.md)
- [x] unify use of media query
- [x] when page opened, scroll up to the top
- [x] rewrite px with rem
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
