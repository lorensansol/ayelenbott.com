// COOKIES CONTROL
const cookiesMessage = document.getElementById('cookies-message')
const cookiesMessageAcept = document.getElementById('cookies-message-acept')
const cookiesMessageToogle = document.getElementById('cookies-message-toggle')

// Add class active from cookies message if cookies don't acept
!localStorage.controlcookie && cookiesMessage.classList.add('active')

// Onclick cookies acept
cookiesMessageAcept.addEventListener('click', () => {
  localStorage.controlcookie = localStorage.controlcookie || 0
  localStorage.controlcookie++
  cookiesMessage.classList.remove('active')
})

// Onclick cookies message toggle
cookiesMessageToogle.addEventListener('click', () => {
	cookiesMessage.classList.toggle('active')
})
