
 function test(){
    let products = Require("./product manager/Products.json");
    fetch("./students.json")
    .then(response => {
    return response.json();
    })
    .then(jsondata => console.log(jsondata));
}

test();