scroll(0,0)

var topButtonContructor = document.createElement('div')
topButtonContructor.setAttribute('id', 'burger-container')

var button = document.createElement('div')
button.setAttribute('id', 'burger')
topButtonContructor.appendChild(button)

const arr = [0,0,0,0]
arr.forEach(()=>{
    var nbsp = document.createElement('span');
button.appendChild(nbsp)});

topButtonContructor.addEventListener('click',event=>{
    event.preventDefault(); scroll(0,0); console.log('done')
})

var body = document.getElementsByTagName('body')[0]
var aboutLi = document.getElementById('aboutLi');
var about = document.getElementById('about');
var scrolled;

const aboutLiHandler = event=> {
    event.preventDefault(); scroll(0,about.offsetTop);
}

window.addEventListener('wheel',event=>{
    event.preventDefault(); event.deltaY >0 ? scroll(0,about.offsetTop) : scroll(0,0)
})
aboutLi.addEventListener('click',aboutLiHandler)

body.appendChild(topButtonContructor);

setInterval(()=>{
    scrolled = window.scrollY
    scrolled > 0  && topButtonContructor.setAttribute('style','opacity: 0.8; visibility: visible;')
    scrolled === 0 && topButtonContructor.setAttribute('style','opacity: 0; visibility: hidden')

  },500)

  

var burger = document.getElementById('burger-container')

burger.addEventListener('mouseenter',
                          ()=>{
      burger.className = 'open'
    })
  
burger.addEventListener('mouseleave',()=>{
    setTimeout(()=>burger.className = "",1000)
  })
const navbar = document.getElementById('navbar')

const navbarDriver = document.getElementById('show-menu')

navbar.addEventListener('mouseleave',()=> navbarDriver.checked = false)
  

