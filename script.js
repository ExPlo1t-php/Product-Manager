let data;
 async function test(){
    response = await fetch("./Products.json");
    data = await response.json();
    console.log(data.products);
    document.querySelector("img").src = data.products[0].icon;
}

test();