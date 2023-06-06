const toggleButton = document.querySelector('.switch')
const toggleButtonIcon = document.querySelector('.switch i')
const dropMenu = document.querySelector('.logo4')

toggleButton.onclick = function() {
    dropMenu.classList.toggle('open')
    const isOpen = dropMenu.classList.contains('open')

    toggleButtonIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}