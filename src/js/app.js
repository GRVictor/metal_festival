document.addEventListener('DOMContentLoaded', function() {
  createGallery()
})

function createGallery() {
  const QUANTITY_IMAGES = 21
  const galery = document.querySelector('.gallery-images')

  for(let i = 1; i <= QUANTITY_IMAGES; i++) {
      const image = document.createElement('IMG')
      image.src = `src/img/gallery/full/${i}.jpg`
      image.alt = `Image band ${i}`

      // EventHandler
      image.onclick = function() {
        showImage(i)
      }

      galery.appendChild(image)
  }

}

function showImage(i) {

  const image = document.createElement('IMG')
  image.src = `src/img/gallery/full/${i}.jpg`
  image.alt = `Image band ${i}`

  // Create Modal
  const modal = document.createElement('DIV')
  modal.classList.add('modal')
  modal.onclick = closeModal
  modal.appendChild(image)

  // Esc Key close modal
  document.onkeydown = function(e) {
    if(e.key === 'Escape') {
      closeModal()
    }
  }

  // Add HTML
  const body = document.querySelector('body')
  body.classList.add('no-scroll')
  body.appendChild(modal)

  console.log(modal)
}

function closeModal() {
  const modal = document.querySelector('.modal')
  modal.classList.add('fade-out')

  setTimeout(() => {
    modal?.remove()
    const body = document.querySelector('body')
    body.classList.remove('no-scroll')
  }, 500)
}