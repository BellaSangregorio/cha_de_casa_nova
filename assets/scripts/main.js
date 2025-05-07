const products =  [
    {price: 10.00, description: 'fogão', img: 'https://brastemp.vtexassets.com/arquivos/ids/229852/7891129530300_2.jpg?v=637973942954430000'},
    {price: 20.00, description: 'fogão', img: 'https://brastemp.vtexassets.com/arquivos/ids/229852/7891129530300_2.jpg?v=637973942954430000'},
    {price: 30.00, description: 'fogão', img: 'https://brastemp.vtexassets.com/arquivos/ids/229852/7891129530300_2.jpg?v=637973942954430000'},
    {price: 40.00, description: 'fogão', img: 'https://brastemp.vtexassets.com/arquivos/ids/229852/7891129530300_2.jpg?v=637973942954430000'},
    {price: 50.00, description: 'fogão', img: 'https://brastemp.vtexassets.com/arquivos/ids/229852/7891129530300_2.jpg?v=637973942954430000'},
    {price: 60.00, description: 'fogão', img: 'https://brastemp.vtexassets.com/arquivos/ids/229852/7891129530300_2.jpg?v=637973942954430000'},
]

async function getData(){
    const data = await fetch()
    
    console.log(await data.json())
}

products.forEach(element => {
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
    
    const button = document.createElement('button');
    button.textContent = "Presentear"
    button.addEventListener('click', (event) => {
        //window.location.replace(``)
    })

    newProd.appendChild(Prod)
    Prod.appendChild(img)
    Prod.appendChild(description)
    Prod.appendChild(price)
    Prod.appendChild(button)
    document.querySelector('.main-content').appendChild(newProd)
})


