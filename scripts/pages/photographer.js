//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographers() {
    const dataPhotographers = await fetch('/data/photographers.json');
    const infoProfilePhotographers = await dataPhotographers.json();
    console.log(infoProfilePhotographers);
    
    return infoProfilePhotographers;
}





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
