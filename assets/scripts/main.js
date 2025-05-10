async function getData(){
    const data = await fetch('assets/data.json')
    
    const products = await data.json()

    products.data.forEach(element => {
        const newProd = document.createElement('div');
        newProd.className = "product-container"
        
        const Prod = document.createElement('div');
        Prod.className = "product"
        
        const img = document.createElement('img');
        img.src = element.img
        
        const description = document.createElement('p');
        description.className = "description"
        description.textContent = element.description
    
        const price = document.createElement('p');
        price.className = "price-tag"
        price.textContent = "R$ " + element.price

        const gift_icon = document.createElement('img');
        gift_icon.className = "gift-icon"
        gift_icon.src = "assets/img/gift-solid.svg"
        
        const button_text = document.createElement('p');
        button_text.textContent = "Presentear"

        const button = document.createElement('button');
        button.addEventListener('click', (event) => {
        })
        
        newProd.appendChild(Prod)
        Prod.appendChild(img)
        Prod.appendChild(description)
        Prod.appendChild(price)
        button.appendChild(gift_icon)
        button.appendChild(button_text)
        Prod.appendChild(button)
        document.querySelector('.main-content').appendChild(newProd)
    })
    
    
}

const products = getData()

