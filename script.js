const Div = document.createElement('div')
Div.innerHTML = `
  <ul class="menu-lists">
    <li class="list-info">
      <h4>PRODUCTS</h4>
      <button id="close-menu">
        <img src="./assets/Close.svg" alt="close" />
      </button>
    </li>
    <li class="list">
      <div>
        <img src="./assets/Spense_Icon.svg" alt="spense icon" />
      </div>
      <div>
        <h6>Spense</h6>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis reprehenderit repudiandae.</p>
      </div>
    </li>
    <li class="list">
      <div>
        <img src="./assets/Fiber_Icon.svg" alt="fiber icon" />
      </div>
      <div>
        <h6>Fiber Landing Page</h6>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis reprehenderit repudiandae.</p>
      </div>
    </li>
    <li class="list">
      <div>
        <img src="./assets/Gradie_Icon.svg" alt="gradie icon" />
      </div>
      <div>
        <h6>Gradie Sign Up Page</h6>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis reprehenderit repudiandae.</p>
      </div>
    </li>
  </ul>
`
Div.style.position = 'absolute'

const showLists = (e) => {
  const { x, y, width, height } = e.target.getBoundingClientRect()
  Div.style.left = `${x - width}px`
  Div.style.top = `${y + 2.5 * height}px`
  document.body.appendChild(Div)
}

const showListsOnMobile = () => {
  Div.style.left = `${window.innerWidth / 2}px`
  Div.style.transform = `translateX(-50%)`
  Div.style.top = `50px`
  document.body.appendChild(Div)
  const closeMenuBtn = document.getElementById('close-menu')
  closeMenuBtn.addEventListener('click', hideLists)
}

const hideLists = () => document.body.removeChild(Div)

const productsLink = document.getElementById('productsLink')
const HamburgerBtn = document.querySelector('.header__hamburger')

productsLink.addEventListener('mouseenter', showLists)
HamburgerBtn.addEventListener('click', showListsOnMobile)

productsLink.addEventListener('mouseleave', hideLists)
