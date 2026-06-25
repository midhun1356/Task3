let cart =
JSON.parse(localStorage.getItem("cart")) || [];



// Load products

fetch("/products")

.then(res=>res.json())

.then(data=>{


let div=document.getElementById("products");


if(div){


data.forEach(product=>{


div.innerHTML += `

<div class="card">

<h3>${product.name}</h3>

<p>₹${product.price}</p>


<button onclick='addCart(${JSON.stringify(product)})'>

Add Cart

</button>


</div>


`;



});


}


});




// Add cart

function addCart(product){


cart.push(product);


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


alert("Added to cart");


}




// Register

function register(){


fetch("/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:name.value,

email:email.value,

password:password.value

})


})

.then(res=>res.json())

.then(data=>alert(data.message));


}





// Login


function login(){


fetch("/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},


body:JSON.stringify({

email:email.value,

password:password.value

})


})


.then(res=>res.json())

.then(data=>{


alert(data.message);


});


}
