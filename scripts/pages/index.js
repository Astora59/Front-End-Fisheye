async function getPhotographers() {
  const dataPhotographers = await fetch('/data/photographers.json')
  const infoProfilePhotographers = await dataPhotographers.json()
  return infoProfilePhotographers
}

async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section')
  let tabIndex = 2
  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer, tabIndex)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
    tabIndex++
  })
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers()
  displayData(photographers)
}

init()
