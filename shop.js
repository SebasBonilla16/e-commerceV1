// JSON
let http = new XMLHttpRequest();
//Open a GET request to get my products.json 
http.open('get', 'products.json', true);
//Sends the request
http.send();

http.onload = function(){
    //Checks if the request in the readyState is DONE and the status is OK
    if(this.readyState == 4 && this.status == 200){
        // Parse the response text as JSON and store it in 'products' variable
        let products = JSON.parse(this.responseText);
        //Empty String to store generated HTML
        let output = "";
        //Iterate over each item in the 'products' array
        for(let item of products){
            // Generate HTML code for each product item and connect it to JSON
            output += `
                <div class="products">
                    <img src="${item.image}" alt="${item.image}">
                    <p class="title">${item.title}</p>
                    <p class="description">${item.description}</p>
                    <p class="price">
                        <span>${item.price}</span>
                    </p>
                    <p class="cart"> Add to cart <i class="fa-solid fa-cart-shopping"></i></p>
                </div>
                `; 
        }
        // Set the HTML content of the element with the class "products" to the generated 'output' string
        document.querySelector(".products").innerHTML = output;
    }
}