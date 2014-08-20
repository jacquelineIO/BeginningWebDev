# Single Page Web Application: Develop the Shell

## Set up the files and namespaces
* One JavaScript file per JavaScript namespace
* Self-executing anon functions to prevent pollution of the global namespace
* Setup CSS files in a parrallel structure
* The above conventions speeds development, improves quality, and eases maintenance

### Files and directories

```
spa
  +-- css
  |   +-- spa.css
  |   `-- spa.shell.css
  +-- js
  |   +-- jq
  |   |   +-- jquery-1.9.1.js
  |   |   `-- jquery.uriAnchor-1.1.3.js
  |   +-- spa.js
  |   `-- spa.shell.js
  +-- layout.html
  `-- spa.html
```

* Inside the HTML, spa namespace must be included before you include the
  children


## ./spa_00
This directory is the first pass at setting up the shell. 
It's "hello world!".

## ./spa_01 - Beyond Hello World
* I have my layout.html, now it will be converted over to JavaScript
* Updating js/spa.js to use js/spa.shell.js
* spa.html now uses js to display like layout.html

## ./spa_02
