function photographerTemplate(data, tabIndex) {
  const { name, portrait, id, tagline, city, country, price } = data

  const picture = `assets/photographers/${portrait}`

  function getUserCardDOM() {
    const article = document.createElement('article')
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('alt', 'profile picture photographers Fisheye')
    const h2 = document.createElement('h2')
    article.appendChild(img)
    article.appendChild(h2)
    h2.textContent = name

    const linkPartPhotographer = document.createElement('div')
    linkPartPhotographer.setAttribute('class', 'clickable_part')
    linkPartPhotographer.appendChild(img)
    linkPartPhotographer.appendChild(h2)
    const aLink = document.createElement('a')
    aLink.appendChild(linkPartPhotographer)
    aLink.setAttribute('href', '/photographer.html')
    aLink.setAttribute('aria-label', 'link')
    aLink.setAttribute('class', 'photographer-link-style')
    aLink.href += `?id=${id}`

    // mettre l'image et le nom dans une div qu'on rendra cliquable et qui mènera à une autre page

    article.appendChild(aLink)

    // afficher la ville et le pays
    const cityAndCountry = document.createElement('p')
    cityAndCountry.textContent = `${city}, ${country}`
    article.appendChild(cityAndCountry)
    cityAndCountry.classList.add('cityAndCountry-style')
    // affiche le motto
    const taglinePhotographer = document.createElement('p')
    taglinePhotographer.textContent = tagline
    article.appendChild(taglinePhotographer)
    taglinePhotographer.classList.add('tagline-style')
    // affiche le prix
    const pricePhotographer = document.createElement('p')
    pricePhotographer.textContent = `${price}€/jour`
    article.appendChild(pricePhotographer)
    pricePhotographer.classList.add('price-style')
    // tabindex à modifier
    article.setAttribute('tabindex', tabIndex)

    return article
  }

  async function getProfilePhotographer() {
    const photographersSection = document.querySelector('.photograph-header')
    const photoHeader = document.querySelector('.photoHeader')
    const info = document.querySelector('.info')

    const img = document.createElement('img')
    img.src = picture
    photoHeader.appendChild(img)
    img.setAttribute('class', 'photographer_section article img')
    img.setAttribute('alt', name)
    const h2 = document.createElement('h2')
    h2.setAttribute('class', 'photographer_Name_style')
    info.appendChild(h2)
    h2.textContent = name

    const cityAndCountry = document.createElement('p')
    cityAndCountry.textContent = `${city}, ${country}`
    info.appendChild(cityAndCountry)
    cityAndCountry.classList.add('cityAndCountry-style--PhotographerPage')
    // affiche le motto
    const taglinePhotographer = document.createElement('p')
    taglinePhotographer.textContent = tagline
    info.appendChild(taglinePhotographer)
    // taglinePhotographer.classList.add("tagline-style");
    img.setAttribute('class', 'img-form')

    // tabindex à modifier
    photographersSection.setAttribute('tabindex', tabIndex)

    return photoHeader
  }

  function modalCreation() {
    const formElements = document.querySelector('.form-elements')

    const fields = [
      {
        label: 'Nom',
        type: 'text',
        for: 'last',
        id: 'last',
      },
      {
        label: 'Email',
        type: 'email',
        for: 'email',
        id: 'email',
      },
      { label: 'Message', type: 'text', id: 'message' },
    ]
    fields.forEach((field) => {
      const label = document.createElement('label')
      label.textContent = field.label
      formElements.appendChild(label)
      label.setAttribute('for', field.id)
      const input = document.createElement('input')
      input.setAttribute('id', field.id)
      input.setAttribute('name', field.id)
      input.type = field.type
      formElements.appendChild(input)
    })

    const modalText = document.querySelector('.modal-text')
    const namePhotographerModal = document.createElement('p')
    namePhotographerModal.textContent = name
    modalText.appendChild(namePhotographerModal)
  }
  return {
    name,
    picture,
    getUserCardDOM,
    getProfilePhotographer,
    modalCreation 
  }
}

// info fixed bot on profil factory
function infoFactory(data, price) {
  const likesCount = data
  // creation of elements
  function getUserInfoDOM() {
    const info = document.createElement('div')
    info.classList.add('photographer-info')
    const likes = document.createElement('p')
    const divLikes = document.createElement('div')
    divLikes.appendChild(likes)
    const p = document.createElement('p')
    p.textContent = `${price}€/jour`

    // live incrementation

    likes.innerHTML = `${likesCount}<i class="fa-solid fa-heart"></i>`

    info.appendChild(likes)
    info.appendChild(p)

    return info
  }

  return { likesCount, getUserInfoDOM }
}
