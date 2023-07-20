async function getPhotographersPageData(id) {
  const dataPhotographers = await fetch("/data/photographers.json");
  const infoProfilePhotographers = await dataPhotographers.json();
  const infoProfilePhotograph = infoProfilePhotographers.photographers.find((value) => value.id == id);

  return infoProfilePhotograph;
}

async function getMediaData() {
  const mediaDataPhotographers = await fetch("/data/photographers.json")
  const infoMedia = await mediaDataPhotographers.json();
  const findIdForMedia = infoMedia.photographers.find((value) => value.id == id);

  return findIdForMedia;
}

async function displayPhotographerHeader(photographers) {
  let tabIndex = 2;
  console.log("displayPhotographerHeader data", photographers);
  const photographerModel = photographerTemplate(photographers, tabIndex);
  console.log("photographerModel", photographerModel);
  await photographerModel.getProfilePhotographer();
  await photographerModel.modalCreation();
}


async function displayMedia(media) {
  const photographerMediaModel = mediaFactory(media, tabIndex);
  await photographerMediaModel.getMediaData();
}


async function init() {
  // Récupère les datas des photographes
  let url = new URL(window.location.href);
  let searchParams = new URLSearchParams(url.search);
  let id = searchParams.get("id");

  const photographers = await getPhotographersPageData(id);
  //const media = await getMediaData(id)
  console.log("init photographers", photographers);
  displayPhotographerHeader(photographers);
  displayMedia(media)
}

init();



//logique de validation modal 

const lengthValidator = (string, length) => {
  return string.length > length;
}
