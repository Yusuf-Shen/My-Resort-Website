       let mouse = document.querySelector(".cursor");/*make the queryselector select the style of cursor*/
       function cursor(e) {
           mouse.style.top = e.pageY + "px";/*make the coordinates of circle equivalent to coordinates of mouse*/
           mouse.style.left = e.pageX + "px";
       }
       /*TODO*/
       function activeCursor(e) { 
           const item = e.target;
           if (item.id === "logo") {
               mouse.classList.add("nav-active");
           }else{
               mouse.classList.remove("nav-active");
           }
       }

       window.addEventListener("mouseover", activeCursor);
       window.addEventListener("mousemove", cursor);