function displayModal() {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
}

function closeModal() {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
}

function refreshModal() {
  c
  const sendButton = document.querySelector('contact_button')
  sendButton.addEventListener('click', (event) =>{
    event.preventDefault()
  })
}