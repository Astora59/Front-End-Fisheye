//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographersPageData() {
    const dataPhotographers = await fetch('/data/photographers.json');
    const infoProfilePhotographers = await dataPhotographers.json();
    let url = new URL(window.location.href);
    let searchParams = new URLSearchParams(url.search);
    let id = searchParams.get('id')
    console.log(id)
    
    return infoProfilePhotographers;
}


async function displayPhotographerHeader(photographers) {
    const photographersSection = document.querySelector(".photograph-header");
    let tabIndex = 2
    const photographerModel = photographerTemplate(photographers.photograph, tabIndex);
    const photographerProfile = photographerModel.getProfilePhotographer();

    photographersSection.appendChild(photographerProfile)
}



async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographersPageData();
    displayPhotographerHeader(photographers);
}

init();


const formElements = document.querySelector('.form-elements');

const fields = [
  { label: 'Nom', type: 'text' },
  { label: 'Email', type: 'email' },
  { label: 'Message', type: 'text' }
];

for (const field of fields) {
  const label = document.createElement('label');
  label.textContent = field.label;
  formElements.appendChild(label);

  const input = document.createElement('input');
  input.type = field.type;
  formElements.appendChild(input);
}
