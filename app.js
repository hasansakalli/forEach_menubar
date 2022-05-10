
const menuList= document.querySelectorAll("#menuList");
const menuUl2= document.querySelectorAll(".menuUl2");

menuList.forEach(openMenu)

function openMenu(item, index){
    item.addEventListener("click", openList)
        function openList(){
          menuUl2[index].classList.toggle("active")
           
        }
    }
