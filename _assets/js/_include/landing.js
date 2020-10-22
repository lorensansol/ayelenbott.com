// Variables
const navbar = document.querySelector('.navbar')
const burger = document.querySelector('.navbar-toggler')
const burgerTarget = burger && document.querySelector(burger.dataset.target)
const navLink = document.querySelectorAll('.nav-link')
const elementClickToModalOpen = document.querySelectorAll('[data-toggle="modal"][data-target],[data-toggle="modal"][href^="#"]')
const elementClickToModalClose = document.querySelectorAll('[data-dismiss="modal"], .modal')

// Navbar burguer click
burger && burger.addEventListener('click', () => {
  burgerTarget.classList.toggle('collapse')
  navbar.classList.toggle('navbar-transparent')
})

// Navbar links click (close menu)
navbar && navbar.addEventListener('click', e => {
  if (e.target.classList.contains('nav-link') && window.innerWidth < 1024) {
    burgerTarget.classList.add('collapse')
    navbar.classList.add('navbar-transparent')
  }
})

// Shot Top Scroll
setTimeout( () => {
  if(window.innerWidth >= 1024){
    scrollShot(
      '-100%',
      '0px',
      '#aye',
      () => navbar.classList.add('top'),
      () => undefined,
      () => navbar.classList.remove('top')
    )
  } else {
    navbar.classList.add('navbar-transparent')
  }
}, 100)

// Navbar Scroll Spy
scrollShot(
  '-50%',
  '-50%',
  'section[id],header[id]',
  e => {
    navLink.forEach( item => item.classList.remove('active') )
    const navLinkId = document.querySelector('.nav-link[href="#'+e.id+'"]')
    // const navLinkButtonId = document.querySelector('.navbar-item.is-tab > [href="#'+e.id+'"]')
    navLinkId && navLinkId.classList.add('active')
    // navLinkButtonId && navLinkButtonId.parentNode.classList.add('active')
  },
  () => undefined,
  () => undefined
)

// Modal
//// Open modal
elementClickToModalOpen.forEach( e => {
  e.addEventListener('click', () => {
    const modal = document.querySelector(e.dataset.target) || document.querySelector(e.hash)
    modal.classList.add('show')
    window.location.hash = modal.id
  })
})
// Open modal wen load if URL there is hash
if (window.location.hash) {
  const idLikeHash = document.querySelector(window.location.hash + '.modal')
  idLikeHash && idLikeHash.classList.add('show')
}
//// Close modal
elementClickToModalClose.forEach( e => {
  e.addEventListener('click', click => {
    if ( click.target.classList.contains('modal') || click.target.dataset.dismiss == 'modal' ) {
      const modalShow = document.querySelector('.modal.show')
      modalShow && modalShow.classList.remove('show')
      // Remove hash
      window.history.replaceState('', document.title, window.location.origin)
    }
  })
})