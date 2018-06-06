scroll(0,0)

var topButtonContructor = document.createElement('button')
topButtonContructor.className = 'topButton'
topButtonContructor.innerText = 'TOP'
topButtonContructor.addEventListener('click',event=>{event.preventDefault(); scroll(0,0)})
var body = document.getElementsByTagName('body')[0]
var aboutLi = document.getElementById('aboutLi');
var about = document.getElementById('about');

const aboutLiHandler = event=> {event.preventDefault(); scroll(0,about.offsetTop);}

aboutLi.addEventListener('click',aboutLiHandler)

body.addEventListener('wheel',()=> window.scrollY>0 && body.appendChild(topButtonContructor))

