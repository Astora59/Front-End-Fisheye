function mediaFactory(data) {
    const { id, photographerId, title, image, video, date, price } = data
    const { likes } = data
    const imgSrc = `assets/photos/${photographerId}/${image}`
    const vdoSrc = `assets/photos/${photographerId}/${video}`
    const mediaSection = document.querySelector(".photographer_main")
  
    const svgNs = 'http://www.w3.org/2000/svg'
    // creation of elements
    function getUserMediaDOM() {
      const card = document.createElement('a')
      card.setAttribute('class', 'card')
      card.setAttribute('data-id', id)
      if (image) {
        const img = document.createElement('img')
        img.setAttribute('src', imgSrc)
        img.setAttribute('class', 'image')
        img.setAttribute('alt', title)
        img.classList.add('media')
        img.setAttribute('tabindex', 0)
  
        card.appendChild(img)
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
      }
      const cardFooter = document.createElement('div')
      cardFooter.setAttribute('class', 'card_footer')
      const h3 = document.createElement('h3')
      h3.setAttribute('class', 'title')
      h3.textContent = title
      const likeCounter = document.createElement('div')
      likeCounter.setAttribute('class', 'likeCount')
      const p = document.createElement('p')
      p.setAttribute('id', 'likes')
      p.innerHTML = likes
      const heart = document.createElement('i')
      heart.setAttribute('class', 'far fa-heart')
      heart.setAttribute('tabIndex', '0')
      // like handler
      heart.addEventListener('click', (e) => {
        if (p.classList.contains('liked')) {
          p.classList.remove('liked')
          heart.classList.remove('liked')
  
          p.innerHTML = likes - 1
        } else {
          p.classList.add('liked')
          heart.classList.add('liked')
          p.innerHTML = likes + 1
        }
      })
      // like handler keyboard controle
      heart.addEventListener('keypress', (e) => {
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
        }
      })
  
      card.appendChild(cardFooter)
      cardFooter.appendChild(h3)
      cardFooter.appendChild(likeCounter)
      likeCounter.appendChild(p)
      likeCounter.appendChild(heart)
  
      return card
      return mediaSection
    }
  
    return { title, likes, getUserMediaDOM }
  }