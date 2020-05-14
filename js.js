//select buttons
const gridSize = document.getElementById("size");
const clearField =document.getElementById("clear");
const colorGrid =document.getElementById("color");
const container = document.getElementById('cont')
let colorPicker=document.getElementById('pickColor')
const randomColor=document.getElementById('color')


//create divs
//1.get numbers of grid
//2. render divs
function createGridEl(){
    let gridValue = prompt('set grid size', 'from 1 to 64');
    if(gridValue>65 || gridValue <1) return alert("Wrong Input")
      for(let i = 0; i<gridValue*gridValue; i++){
        let div = document.createElement('DIV')
        container.appendChild(div).classList.add('hover');
    }
    //set columns and rows 
      container.style.setProperty('grid-template-columns', `repeat(${gridValue}, 1fr)`);
      container.style.setProperty('grid-template-rows', `repeat(${gridValue}, 1fr)`);
   
}
//generate random color
function randomC (){
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let color = "rgb("+r+","+g+","+b+")"
  return color;
}
//remove class hover and apply  class rnd * prepare divs for random color changes*
function colorP(){
  let el= container.children
  
    for(let i=0 ; i<el.length;i++){
     el[i].classList.remove('hover');
     el[i].classList.add('rnd')
    }
};
function oneColor(e){
  let el= container.children
  
  for(let i=0 ; i<el.length;i++){
   el[i].classList.add('hover');
   el[i].classList.remove('rnd')
  }
}
//change the color of divs
function colorChanger(event){
  let element = event.target;
    if(element.classList.value ==='hover'){
     element.style.backgroundColor=colorPicker.value
    }else if (element.classList.value ==='rnd'){
      element.style.backgroundColor= randomC()
    }
   
}
function clearAll(){
    container.innerHTML=""
    container.style.removeProperty('grid-template-columns');
    container.style.removeProperty('grid-template-rows');
}


//event listeners
gridSize.addEventListener("click" , createGridEl);
document.addEventListener( "mouseover", colorChanger );
randomColor.addEventListener('click' , colorP)
colorPicker.addEventListener('click' , oneColor)
clearField.addEventListener('click', clearAll)