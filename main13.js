//Task 2: Fetch Products from the API Using Fetch and Promises

fetch('https://www.course-api.com/javascript-store-products')
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    data.forEach(product => displayProduct(product));
})

//Task 4: Handle Errors Gracefully

.catch(error => {
    console.error('Error fetching products:', error);
    container.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
});

// Task 3: Display Product Details Dynamically
function displayProduct(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    
    productElement.innerHTML = `
        <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
        <h3>${product.fields.name}</h3>
        <p>Company: ${product.fields.company}</p>
        <p>Price: $${(product.fields.price / 100).toFixed(2)}</p>
    `;
    
    container.appendChild(productElement);
}
