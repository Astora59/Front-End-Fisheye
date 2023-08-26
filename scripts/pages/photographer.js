async function getPhotographersPageData(id) {
  const dataPhotographers = await fetch("/data/photographers.json");
  const infoProfilePhotographers = await dataPhotographers.json();
  const infoProfilePhotograph = infoProfilePhotographers.photographers.find((value) => value.id == id);

  return infoProfilePhotograph;
}

async function getMediaData(id) {
  const mediaDataPhotographers = await fetch("/data/photographers.json")
  const infoMedia = await mediaDataPhotographers.json();
  const mediasForPhotographer = infoMedia.media.filter((value) => value.photographerId == id);

  return mediasForPhotographer;
}

async function getLikes(medias) {
  const likesCount = medias
    .map((item) => item.likes)
    .reduce((prev, curr) => prev + curr, 0)
  return likesCount
}

 


async function displayPhotographerHeader(photographers) {
  let tabIndex = 2;
  const photographerModel = photographerTemplate(photographers, tabIndex);
  await photographerModel.getProfilePhotographer();
  await photographerModel.modalCreation();
}





 async function displayMedia(medias, photographerName, orderType = 'popularite') {
   const containerMedias = document.querySelector('.photographer_main')
  containerMedias.innerHTML = "";
  console.log(medias)

  switch (orderType) {
    case "popularite":
      medias.sort((a, b) => (a.likes < b.likes ? 1 : -1))
      break; 
    case "date":
      medias.sort((x, y) => {
        const firstDate = new Date(x.date)
        const SecondDate = new Date(y.date)

        if (firstDate < SecondDate) return -1
        if (firstDate > SecondDate) return 1
        return 0
      })
      break;
    
    case "title" :
      medias.sort((a, b) => a.title.localeCompare(b.title))
      break;
  }



   medias.forEach(async (media) => {
     const photographerMediaModel = mediaFactory(media, photographerName);
     const mediaDOM = await photographerMediaModel.getMediaCardDOM();
     containerMedias.appendChild(mediaDOM)

  });

  


  
 }

 

 async function displayLikeCounter(medias, price) {
  //console.log(medias)
  const infoSection = document.querySelector('.photograph-info')
  const infoModel = infoFactory(medias, price)
  const userInfoDOM = infoModel.getUserInfoDOM()
  infoSection.appendChild(userInfoDOM)
}




 


async function init() {
  // Récupère les datas des photographes
  let url = new URL(window.location.href);
  let searchParams = new URLSearchParams(url.search);
  let id = searchParams.get("id");
  const photographers = await getPhotographersPageData(id);
  const medias = await getMediaData(id)
  const likesCount = await getLikes(medias)
  displayPhotographerHeader(photographers);
  displayMedia(medias, photographers.name)
  //add event listener sort
  const dropdownSelect = document.querySelector(".dropdown-select")
  dropdownSelect.addEventListener("change", (e) => {
    displayMedia(medias, photographers.name, orderType = "date")
    
  })

  displayLikeCounter(likesCount, photographers.price)
}

init();



// //logique de validation modal 

// const lengthValidator = (string, length) => {
//   return string.length > length;
// }



