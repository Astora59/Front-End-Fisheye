function mediaFactory(data, name) {
  const { id, title, image, video } = data
  const { likes } = data
  const imgSrc = `assets/${name}/${image}`
  const vdoSrc = `assets/${name}/${video}`
  // creation of elements
  function getMediaCardDOM() {
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    card.setAttribute('data-id', id)
    const linkForLightbox = document.createElement('a')
    card.appendChild(linkForLightbox)

    if (image) {
      const img = document.createElement('img')
      img.setAttribute('src', imgSrc)
      img.setAttribute('class', 'image')
      img.setAttribute('alt', title)
      img.classList.add('media')
      img.setAttribute('tabindex', 0)
      card.appendChild(img)
      linkForLightbox.setAttribute('href', imgSrc)
      linkForLightbox.appendChild(img)
    }
   


    if (video) {
      const vdo = document.createElement('video')
      vdo.setAttribute('src', vdoSrc)
      vdo.setAttribute('type', 'video/mp4')
      vdo.setAttribute('alt', title)
      vdo.autoplay = false
      vdo.controls = true
      vdo.muted = false
      vdo.classList.add('media')
      vdo.setAttribute('tabindex', 0)
      card.appendChild(vdo)
      linkForLightbox.setAttribute('href', vdoSrc)
      linkForLightbox.appendChild(vdo)
    }

    const cardFooter = document.createElement('div')
    cardFooter.setAttribute('class', 'card_footer')
    const h3 = document.createElement('h3')
    h3.setAttribute('class', 'title')
    h3.textContent = title
    const likeCounter = document.createElement('div')
    likeCounter.setAttribute('class', 'likeCount')
    const p = document.createElement('p')
    p.setAttribute('class', 'likes')
    p.innerHTML = likes
    const heart = document.createElement('i')
    heart.setAttribute('class', 'far fa-heart')
    heart.setAttribute('tabIndex', '0')
    // like handler
    heart.addEventListener('keydown', () => {
      if (p.classList.contains('liked')) {
        p.classList.remove('liked')
        heart.classList.remove('liked')
        heart.classList.remove('fa-solid')

        p.innerHTML = likes
      } else {
        p.classList.add('liked')
        heart.classList.add('liked')
        p.innerHTML = likes + 1
        heart.classList.add('fa-solid')
      }
      const allLikes = document.querySelectorAll('.likes')
      let newTotalLikes = 0
      allLikes.forEach((i) => {
        newTotalLikes += parseInt(i.textContent)
      })
      const elementTotalLike = document.querySelector('.photographer-info > p')
      elementTotalLike.innerHTML = `${newTotalLikes}<i class="fa-solid fa-heart"></i>`
    })

    heart.addEventListener('click', () => {
      if (p.classList.contains('liked')) {
        p.classList.remove('liked')
        heart.classList.remove('liked')
        heart.classList.remove('fa-solid')

        p.innerHTML = likes
      } else {
        p.classList.add('liked')
        heart.classList.add('liked')
        p.innerHTML = likes + 1
        heart.classList.add('fa-solid')
      }
      const allLikes = document.querySelectorAll('.likes')
      let newTotalLikes = 0
      allLikes.forEach((i) => {
        newTotalLikes += parseInt(i.textContent)
      })
      const elementTotalLike = document.querySelector('.photographer-info > p')
      elementTotalLike.innerHTML = `${newTotalLikes}<i class="fa-solid fa-heart"></i>`
    })


    // like handler keyboard controle
    heart.addEventListener('keypress', (e) => {
      if (e.key === "enter") {
      switch (e.key) {
        case 'Enter':
          if (p.classList.contains('liked')) {
            p.classList.remove('liked')
            heart.classList.remove('liked')
            p.innerHTML = likes - 1
          } else {
            p.classList.add('liked')
            heart.classList.add('liked')
            p.innerHTML = likes + 1
          }
          break

        default:
          e.preventDefault()
      }}
    })

    card.appendChild(cardFooter)
    cardFooter.appendChild(h3)
    cardFooter.appendChild(likeCounter)
    likeCounter.appendChild(p)
    likeCounter.appendChild(heart)

    return card
  }

  return { title, likes, getMediaCardDOM }
}
