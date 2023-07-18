async function getPhotographersPageData(id) {
  const dataPhotographers = await fetch("/data/photographers.json");
  const infoProfilePhotographers = await dataPhotographers.json();

  const infoProfilePhotograph = infoProfilePhotographers.photographers.find((value) => value.id == id);

  return infoProfilePhotograph;
}

async function displayPhotographerHeader(photographers) {
  let tabIndex = 2;
  console.log("displayPhotographerHeader data", photographers);
  const photographerModel = photographerTemplate(photographers, tabIndex);
  console.log("photographerModel", photographerModel);
  await photographerModel.getProfilePhotographer();
}

async function init() {
  // Récupère les datas des photographes
  let url = new URL(window.location.href);
  let searchParams = new URLSearchParams(url.search);
  let id = searchParams.get("id");

  const photographers = await getPhotographersPageData(id);
  console.log("init photographers", photographers);
  displayPhotographerHeader(photographers);
}

init();

const formElements = document.querySelector(".form-elements");

const fields = [
  { label: "Nom", type: "text" },
  { label: "Email", type: "email" },
  { label: "Message", type: "text" },
];

for (const field of fields) {
  const label = document.createElement("label");
  label.textContent = field.label;
  formElements.appendChild(label);

  const input = document.createElement("input");
  input.type = field.type;
  formElements.appendChild(input);
}
