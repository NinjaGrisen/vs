(function() {
  const container = document.querySelector(".products");
  let items = container.querySelectorAll(".products__item");
  let wrapper = container.querySelector(".products__wrapper");
  let leftArrow = container.querySelector(".products__move--left");
  let rightArrow = container.querySelector(".products__move--right");
  
  document.addEventListener("click", function (e) {
    if(!e.target.classList.contains("products__item")) {
      resetItems();
    }
  })
  
  function resetItems() {
    
    wrapper.style.transform = "translate(0)";
    for (let item of items) {
      item.classList.remove("active");
      item.classList.remove("active__sibling");
    }
  }
  
  function changePosition(index) {
    if(index === 0) {
      wrapper.style.transform = "translate(10%)"; 
      items[1].classList.add("active__sibling");
    }
  }
  
  for(let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function(e) {
      resetItems();
      changePosition(i);
      this.classList.add("active");
    })
  } 
})();