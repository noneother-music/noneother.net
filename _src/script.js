(() => {
  const navbar = document.querySelector('.navbar')
  const navbar_button = document.querySelector('.navbar-toggle')

  navbar_button.addEventListener('click', () => {
    navbar.classList.toggle('active')
    navbar_button.classList.toggle('active')
    console.log('clicked...')
  })
})()
