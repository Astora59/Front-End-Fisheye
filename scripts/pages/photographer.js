async function getPhotographersPageData(id) {
  const dataPhotographers = await fetch('/data/photographers.json')
  const infoProfilePhotographers = await dataPhotographers.json()
  const infoProfilePhotograph = infoProfilePhotographers.photographers.find(
    (value) => value.id == id,
  )

  return infoProfilePhotograph
}

async function getMediaData(id) {
  const mediaDataPhotographers = await fetch('/data/photographers.json')
  const infoMedia = await mediaDataPhotographers.json()
  const mediasForPhotographer = infoMedia.media.filter(
    (value) => value.photographerId == id,
  )

  return mediasForPhotographer
}

async function getLikes(medias) {
  const likesCount = medias
    .map((item) => item.likes)
    .reduce((prev, curr) => prev + curr, 0)
  return likesCount
}

async function displayPhotographerHeader(photographers) {
  const tabIndex = 2
  const photographerModel = photographerTemplate(photographers, tabIndex)
  await photographerModel.getProfilePhotographer()
  await photographerModel.modalCreation()
  const sendButton = document.querySelector('.contact_button')
  const form = document.querySelector('#form')
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(firstname.value)
    console.log(last.value)
    console.log(email.value)
    console.log(message.value)
  })
}

async function displayMedia(medias, photographerName, orderType = '1') {
  const containerMedias = document.querySelector('.photographer_main')
  containerMedias.innerHTML = ''

  switch (orderType) {
    case '1':
      medias.sort((a, b) => (a.likes < b.likes ? 1 : -1))
      break
    case '2':
      medias.sort((x, y) => {
        const firstDate = new Date(x.date)
        const SecondDate = new Date(y.date)

        if (firstDate < SecondDate) return -1
        if (firstDate > SecondDate) return 1
        return 0
      })
      break

    case '3':
      medias.sort((a, b) => a.title.localeCompare(b.title))
      break
  }

  medias.forEach(async (media) => {
    const photographerMediaModel = mediaFactory(media, photographerName)
    const mediaDOM = await photographerMediaModel.getMediaCardDOM()
    containerMedias.appendChild(mediaDOM)
  })
  LightBox.init()
}

async function displayLikeCounter(medias, price) {
  const infoSection = document.querySelector('.photograph-info')
  const infoModel = infoFactory(medias, price)
  const userInfoDOM = infoModel.getUserInfoDOM()
  infoSection.appendChild(userInfoDOM)
}

async function init() {
  // Récupère les datas des photographes
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)
  const id = searchParams.get('id')
  const photographers = await getPhotographersPageData(id)
  const medias = await getMediaData(id)
  const likesCount = await getLikes(medias)
  displayPhotographerHeader(photographers)
  console.log(photographers)
  displayMedia(medias, photographers.name)
  // add event listener sort
  const dropdownSelect = document.querySelector('.dropdown-select')
  dropdownSelect.addEventListener('change', (e) => {
    const orderType = e.target.value
    displayMedia(medias, photographers.name, orderType)
  })

  displayLikeCounter(likesCount, photographers.price)
}

init()

// //logique de validation modal

// const lengthValidator = (string, length) => {
//   return string.length > length;
// }
