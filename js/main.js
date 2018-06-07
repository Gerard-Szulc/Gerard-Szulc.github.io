scroll(0,0)

var topButtonContructor = document.createElement('div')
topButtonContructor.setAttribute('id', 'burger-container')

var button = document.createElement('div')
button.setAttribute('id', 'burger')
topButtonContructor.appendChild(button)

const arr = [0,0,0,0]
arr.forEach(()=>{
    var nbsp = document.createElement('span');
button.appendChild(nbsp)})

topButtonContructor.addEventListener('click',event=>{event.preventDefault(); scroll(0,0); console.log('done')})

var body = document.getElementsByTagName('body')[0]
var aboutLi = document.getElementById('aboutLi');
var about = document.getElementById('about');
var scrolled;
const aboutLiHandler = event=> {event.preventDefault(); scroll(0,about.offsetTop);}

aboutLi.addEventListener('click',aboutLiHandler)
body.appendChild(topButtonContructor);
const topBut = ()=>{
    scrolled = window.scrollY
   requestAnimationFrame(topBut);
    scrolled > 0  && topButtonContructor.setAttribute('style','opacity: 0.8; visibility: visible;')
    scrolled === 0 && topButtonContructor.setAttribute('style','opacity: 0; visibility: hidden;')
  }
  requestAnimationFrame(topBut);

var burger = document.getElementById('burger-container')
var open = false;

burger.addEventListener('mouseover',
                          ()=>{
    (open === false) && (
      burger.className = 'open')})
  
burger.addEventListener('mouseleave',()=>{
    setTimeout(()=>burger.className = "",1000)
  })
  

