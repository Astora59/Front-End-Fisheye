
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