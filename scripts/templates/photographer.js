
function photographerTemplate(data, tabIndex) {
    const { name, portrait, id, tagline, city, country, price } = data;
    console.log("data", data);
  
    const picture = `assets/photographers/${portrait}`;
  
    function getUserCardDOM() {
      const article = document.createElement("article");
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.setAttribute("alt", "profile picture photographers Fisheye");
      const h2 = document.createElement("h2");
      article.appendChild(img);
      article.appendChild(h2);
      h2.textContent = name;
  
      const linkPartPhotographer = document.createElement("div");
      linkPartPhotographer.setAttribute("class", "clickable_part");
      linkPartPhotographer.appendChild(img);
      linkPartPhotographer.appendChild(h2);
      const aLink = document.createElement("a");
      aLink.appendChild(linkPartPhotographer);
      aLink.setAttribute("href", "/photographer.html");
      aLink.setAttribute("aria-label", "link");
      aLink.setAttribute("class", "photographer-link-style");
      aLink.href += `?id=${id}`;
  
      //mettre l'image et le nom dans une div qu'on rendra cliquable et qui mènera à une autre page
  
      article.appendChild(aLink);
  
      //afficher la ville et le pays
      const cityAndCountry = document.createElement("p");
      cityAndCountry.textContent = city + ", " + country;
      article.appendChild(cityAndCountry);
      cityAndCountry.classList.add("cityAndCountry-style");
      //affiche le motto
      const taglinePhotographer = document.createElement("p");
      taglinePhotographer.textContent = tagline;
      article.appendChild(taglinePhotographer);
      taglinePhotographer.classList.add("tagline-style");
      //affiche le prix
      const pricePhotographer = document.createElement("p");
      pricePhotographer.textContent = price + "€/jour";
      article.appendChild(pricePhotographer);
      pricePhotographer.classList.add("price-style");
      //tabindex à modifier
      article.setAttribute("tabindex", tabIndex);
  
      return article;
    }
  
    async function getProfilePhotographer() {
      console.log("getProfilePhotographer called");
      const photographersSection = document.querySelector(".photograph-header");
  
      let img = document.createElement("img");
      img.src = picture;
      photographersSection.appendChild(img);
      img.setAttribute('class', 'photographer_section article img')

      const h2 = document.createElement("h2");
      photographersSection.appendChild(h2);
      h2.textContent = name;



      const cityAndCountry = document.createElement("p");
      cityAndCountry.textContent = city + ", " + country;
      photographersSection.appendChild(cityAndCountry);
      cityAndCountry.classList.add("cityAndCountry-style");
      //affiche le motto
      const taglinePhotographer = document.createElement("p");
      taglinePhotographer.textContent = tagline;
      photographersSection.appendChild(taglinePhotographer);
      taglinePhotographer.classList.add("tagline-style");
      img.setAttribute('class', 'img-form')
      
      

    



      //tabindex à modifier
      photographersSection.setAttribute("tabindex", tabIndex);



      return photographersSection;
    }

    function modalCreation() {
      const formElements = document.querySelector(".form-elements");
    
      const fields = [
        { label: "Nom", type: "text", for: "last", id: "last" },
        { label: "Email", type: "email", for:"email", id: "email" },
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
      const modalText = document.querySelector('.modal-text')
      namePhotographerModal = document.createElement('p')
      namePhotographerModal.textContent = name;
      modalText.appendChild(namePhotographerModal)

      }
    return { name, picture, getUserCardDOM, getProfilePhotographer, modalCreation };
  }
  
/*function mediaFactory(data) {
  const {photographerID, title, image, video, likes, id, date} = data;

  const picture = `assets/photographers/${image}`;
  const recorder = `assets/media/videos/${video}`;


  const article = document.createElement('article')
  const div = document.createElement('div')
  const h2 = document.createElement('h2')
  const i = document.createElement('i')
  const divLikes = document.createElement('div')
  const index = document.createElement('div')
  const spanForLike = document.createElement('span')
  const buttonLike = document.createElement('button')

  function getVideo() {
    const tape = document.createElement('video')
    const source = document.createElement('source')

    h2.textContent = title;
    spanForLike.textContent = likes

    i.setAttribute("class", "fa-solid fa-heart")
    i.setAttribute("aria-label", "likes")
    index.setAttribute("class", "lgthBox")


    spanForLike.setAttribute("class", "numberLike_"+id)
    divLikes.setAttribute("class", "containerMedia");
    div.setAttribute("class", "titleMedia")
    article.setAttribute("class", "openLightBox")

    buttonLike.setAttribute("type", "button")
    buttonLike.setAttribute("class", "buttonLike")

    //au clic du bouton j'aime, il s'incrémente et s'ajoute au total de like
    buttonLike.addEventListener("click", () => {
      const sessionStorageLiked = JSON.parse(window.sessionStorage.getItem("liked"));

    //récupère l'index de l'élément
    const findIndexOfElement = sessionStorageLiked.findIndex(item => {
      return item === id;
    })

    const actualTotalLikeOnMedia = parseInt(document.querySelector(".numberLike"))
    
  
  
  })


  }

}*/



//modale : critères de validation



//const loginForm = document.querySelector('.modal')


/*loginForm.addEventListener('submit', (event)=> {
  event.preventDefault(); //empêche l'envoi du formulaire par défaut
  console.log(event.target.elements);
  const {first, last, email} = event.target.elements; // permet de sélectionner tous les éléments qui concernent firstname et lastname, aucun autre, c'est la destructuration
  const errorOnFirstnameAlreadyExist = document.querySelector("#first_error"); // va permettre la non répétition du texte d'erreur
  let hasErrorOnForm = false; // condition générale qui permet que le formulaire ne s'envoie pas s'il y a un true quelque part
  if (!lengthValidator(first.value, 2)) { // "si la fonction lengthvalidator n'est pas true (donc si firstnameForm plus petit que 2)"
    hasErrorOnForm = true; 
    first.classList.add('text-control--red'); //ajoute la classe text-control--red à la balise, sans l'utilisation de style inline 
    //formData.insertAfter (pElement);
    if (!errorOnFirstnameAlreadyExist) { //s'il y a une erreur et pas encore de message d'erreur
      const errorMessage = createErrorElement(first.id, "Veuillez entrer 2 caractères ou plus pour le champ du prénom"); //création du message d'erreur
      const containerInputFirstname = document.querySelector("#first"); //on déclare là où sera le message d'erreur
      containerInputFirstname.parentElement.appendChild(errorMessage);
    }
    
  }
  else { //s'il n'y a aucune erreur
   if(errorOnFirstnameAlreadyExist) { //s'il y a déjà ou pas de message d'erreur...
    errorOnFirstnameAlreadyExist.remove(); //alors on retire et on s'arrête là
   }
   first.classList.remove('text-control--red'); //on enlève le style cadre rouge d'indication d'erreur
  }

  


  const errorOnLastNameAlreadyExist = document.querySelector('#last_error');

  if (!lengthValidator(last.value, 2)) {
    hasErrorOnForm = true; 
    last.classList.add('text-control--red');
    if (!errorOnLastNameAlreadyExist) {
      const errorMessage = createErrorElement(last.id, "Veuillez entrer 2 caractères ou plus pour le champ du nom");
      const containerInputLastname = document.querySelector("#last");
      containerInputLastname.parentElement.appendChild(errorMessage);
    }
  }
  else {
    if(errorOnLastNameAlreadyExist) {
      errorOnLastNameAlreadyExist.remove();
    }
    
    last.classList.remove('text-control--red');
  }



  const errorOnEmailAlreadyexist = document.querySelector('#email_error');
    if (!emailRegex.test(email.value)) {
      
      // Si l'email n'est pas valide, affichage d'un message d'erreur
      hasErrorOnForm = true;
      email.classList.add('text-control--red');
     if (!errorOnEmailAlreadyexist) {
      const errorMessage = createErrorElement(email.id, "L'adresse email est invalide"); //création du message d'erreur
      const containerInputEmail = document.querySelector("#email"); //on déclare là où sera le message d'erreur
      containerInputEmail.parentElement.appendChild(errorMessage);
     }
    }
    
    else {
      if(errorOnEmailAlreadyexist) {
        errorOnEmailAlreadyexist.remove();
      }
       
      email.classList.remove('text-control--red');
    }




  if(!hasErrorOnForm) {
    
    loginForm.style.display = "none";
    const divConfirm = document.createElement("div");
    divConfirm.classList.add('container-confirmation');
    const confirmMessage = document.createElement("p");
    confirmMessage.innerText = 'Merci pour votre participation';
    const closeModalAfterConfirm = document.createElement("button");
    closeModalAfterConfirm.innerText = 'Fermer';
    closeModalAfterConfirm.classList.add('btn-submit');
    closeModalAfterConfirm.addEventListener("click", closeModalWindow)
    const modalBody = document.querySelector('.modal-body');
    divConfirm.appendChild(confirmMessage);
    divConfirm.appendChild(closeModalAfterConfirm);
    modalBody.appendChild(divConfirm);
    loginForm.reset();
  }

  


});

const lengthValidator = (string, length) => {
  return string.length > length;
}

const createErrorElement = (id, errorMessage) => { 
  const pElement = document.createElement("p");
  pElement.setAttribute("id",id + "_error");
  pElement.innerText = errorMessage;
  pElement.classList.add('red-text');

  return pElement;
}

//formData.insertAfter (pElement)




//fonction pour vérification de la saisie d'une valeur numérique

 
    const validateQuantity = (quantity) => {
      return parseInt(quantity) >= 0;
    }

    
  
  //vérification de la sélection d'un bouton radio 
 
  
  
 
  
const submitButton = document.querySelector(".btn-submit");*/

// All factories

//  photographer factory
/*function photographerFactory(data) {
  const { id, name, portrait, city, country, tagline, price } = data

  const picture = `assets/photographers/${portrait}`
  // creation of elements
  function getUserCardDOM() {
    const a = document.createElement('a')
    a.setAttribute('href', `photographer.html?id=${id}`)
    const article = document.createElement('article')
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('alt', name)
    const h2 = document.createElement('h2')
    h2.textContent = name
    const h3 = document.createElement('h3')
    h3.textContent = `${city}, ${country}`
    const p = document.createElement('p')
    p.textContent = tagline
    const small = document.createElement('small')
    small.textContent = `${price}€/jours`

    a.appendChild(article)
    article.appendChild(img)
    article.appendChild(h2)
    article.appendChild(h3)
    article.appendChild(p)
    article.appendChild(small)

    return a
  }
  return { name, picture, getUserCardDOM }
}
*/
