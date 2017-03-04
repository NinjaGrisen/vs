(function() {
  let menuButton = document.querySelector('.header__button');
  let content = document.querySelector('.content');
  
  menuButton.addEventListener('click', toggleMenu);
  
  function toggleMenu() {

    if(content.className.includes('--active')) {
       content.className="content";  
    } else {
      content.className="content" + "--active";
    }
  }
  
})(); 