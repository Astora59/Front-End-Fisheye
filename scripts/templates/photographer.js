function photographerTemplate(data, tabIndex) {
    const { name, portrait, id, tagline, city, country, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        //img.setAttribute("alt", "Picture photographer profile")
        const h2 = document.createElement( 'h2' );
        article.appendChild(img);
        article.appendChild(h2);
        h2.textContent = name;
        
        
        
        const linkPartPhotographer = document.createElement('div')
        linkPartPhotographer.setAttribute("class", "clickable_part")
        linkPartPhotographer.appendChild(img)
        linkPartPhotographer.appendChild(h2)
        const aLink = document.createElement('a')
        aLink.appendChild(linkPartPhotographer)
        aLink.setAttribute("href", "/photographer.html")
        aLink.setAttribute("aria-label", "link")
        aLink.setAttribute("class", "photographer-link-style")
        aLink.href += `?id=${id}`
       
        //mettre l'image et le nom dans une div qu'on rendra cliquable et qui mènera à une autre page
        
        
        article.appendChild(aLink)




        //afficher la ville et le pays
        const cityAndCountry = document.createElement('p');
        cityAndCountry.textContent = city + ", " + country;
        article.appendChild(cityAndCountry);
        cityAndCountry.classList.add("cityAndCountry-style");
        cityAndCountry.setAttribute("alt", "city and country photographer Fisheye")
        //affiche le motto
        const taglinePhotographer = document.createElement('p');
        taglinePhotographer.textContent = tagline;
        article.appendChild(taglinePhotographer);
        taglinePhotographer.classList.add("tagline-style")
        taglinePhotographer.setAttribute("alt", "tagline photographer Fisheye")
        //affiche le prix
        const pricePhotographer = document.createElement('p');
        pricePhotographer.textContent = price + "€/jour";
        article.appendChild(pricePhotographer);
        pricePhotographer.classList.add("price-style")
        pricePhotographer.setAttribute("alt", "price photographer profile")
        //tabindex à modifier
        article.setAttribute("tabindex", tabIndex)
        

        
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

