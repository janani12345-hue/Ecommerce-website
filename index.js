 var navebar=document.getElementById("navebar")
var icon=document.getElementById("icon")
var para=document.getElementById("para")
var listitem=document.querySelector(".list-items1")
console.log(listitem)
var menubar=document.getElementById("navebar-icon")
console.log(menubar)



 icon.addEventListener("click",function(){
     navebar.style.display="none"
 })
 para.addEventListener("click",function(){
    listitem.style.display="none"
 })
menubar.addEventListener("click",function(){
    listitem.style.display="flex"
})
//slider//
var sliderleftbutton = document.getElementById("slider-left-active")
var sliderrightbutton = document.getElementById("slider-right-active")
var sliderimage = document.querySelector(".slider-img-con")
var slidermargin=0



sliderrightbutton.addEventListener("click",

  function(){
      slidermargin=slidermargin+100

      if(slidermargin>200)
      {
          slidermargin=0
          sliderimage.style.marginLeft=0;
      }
      else{
          sliderimage.style.marginLeft="-"+slidermargin+"vw";
      }



  }
  )

  sliderleftbutton.addEventListener("click",

  function(){

      if(slidermargin==0)
      {

          slidermargin=200
          sliderimage.style.marginLeft="-"+slidermargin+"vw";
      }
      else{

          slidermargin=slidermargin-100
      sliderimage.style.marginLeft="-"+slidermargin+"vw";
      }


  }
  )

