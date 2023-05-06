// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

var loginbutton = document.querySelector('.loginbtn');
var signupbutton = document.querySelector('.sighupbtn');


loginbutton.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log("first")
    window.location.href = "/F3-Final-Project/login.html";
});

signupbutton.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log("first")
    window.location.href = "/F3-Final-Project/signup.html";
});

var myCart = document.querySelector('.myCart');

myCart.addEventListener('click', (e) => {
    if(!sessionStorage.getItem('currentUserObj')){
        alert('Login First');
    }
    else{
        window.location.href = "/F3-Final-Project/cart.html"
    }
})

var myProfile = document.querySelector('.profile');

myProfile.addEventListener('click', (e) => {
    if(!sessionStorage.getItem('currentUserObj')){
        alert('Login First');
    }
    else{
        window.location.href = "/F3-Final-Project/profile.html"
    }
})
