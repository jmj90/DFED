// Put JS logic (if any) here.
// ESNext to ES5 transpiling is completed via Babel's "env" preset.

// hamburger funtionality for mobile nav menu
function hamburgerClick() {
  let hamburgerMenu = document.getElementsByClassName('nav-link-container')[0]
  hamburgerMenu.classList.contains('active') ? hamburgerMenu.classList.remove('active')
  :
  hamburgerMenu.classList.add('active')
}
