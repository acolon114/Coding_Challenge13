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