const menuBtn = document.querySelector(".js-burger")
const menuList = document.querySelector(".list")

menuBtn.addEventListener("click", function () {
  menuList.classList.toggle("active");  
})