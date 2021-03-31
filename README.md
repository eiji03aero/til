# TIL
- one way to strengthen your knowledge

# Todo
## Current
- [ ] add ui framework to make it look better
  - choose one:
    - has sidebar feature
    - has typography support
  - make it responsive
    - mobile a okay
  - sidebar item
    - anchor
    - formatted timestamp
    - tags
- [ ] add library to parse and format markdown files in content
- [ ] integrate netlify's github repository feature
- [ ] automate building manifest
  - wanna see if making a commit on github action is possible

## Archive
- [x] have index page
  - have github pages ready
- [x] migrate over to netlify
  - github pages has some drawbacks:
    - page cannot use absolute path
      - page's root path is under subdirectory named with repository name. harder to get along with local development
        - https://hoge.github.io/til/[page paths]
  - rewrite the absolute path part which aims for github pages
    - the ones has /til/...
  - disable github pages
  - create service on netlify
