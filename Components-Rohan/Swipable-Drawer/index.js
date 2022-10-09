console.log("Swipable Drawer");


// getting right drawer button element .....
let button_right = document.getElementsByClassName("right-drawer-button")[0]

// getting click event of button right drawer .....
button_right.addEventListener('click',()=>{
     console.log("Clicked Right !")
     // Getting the drawer div .....
     let drawer_right = document.getElementsByClassName("right-drawer")[0]
     // expanding/closing div by giving width .....
     if(drawer_right.style.width == "0%" || drawer_right.style.width == ""){
          drawer_right.style.width = "21%"
     }else{
          drawer_right.style.width = "0%"
     }
})


// getting left drawer button element .....
let button_left = document.getElementsByClassName("left-drawer-button")[0]

// getting click event of button left drawer .....
button_left.addEventListener('click',()=>{
     console.log("Clicked Left !")
     // Getting the drawer div .....
     let drawer_left = document.getElementsByClassName("left-drawer")[0]
     console.log(drawer_left.style.width)
     // expanding/closing div by giving width .....
     if(drawer_left.style.width == "0%" || drawer_left.style.width == "" ){
          drawer_left.style.width = "21%"
     }else{
          drawer_left.style.width = "0%"
     }
})