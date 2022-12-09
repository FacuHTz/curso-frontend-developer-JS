const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAsside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAsside() {
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Monitor",
  price: 320,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Notebook",
  price: 1200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


function renderProducts(arr) { 
    for (product of productList) {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
    
      const productImg = document.createElement("img");
      productImg.setAttribute("src", product.image);
    
      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");
    
      const productInfoDiv = document.createElement("div");
    
      const productPrice = document.createElement("p");
      productPrice.innerHTML = "$" + product.price;
    
      const productName = document.createElement("p");
      productName.innerHTML = product.name;
    
      const productInfoFigure = document.createElement("figure");
      const productImgCart = document.createElement("img");
      productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
      cardsContainer.appendChild(productCard);
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
      productInfoFigure.appendChild(productImgCart);
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
    }
}
renderProducts(productList);



// for(product in productList){ // devuelve el indice de cada producto de la productList
//     console.log(product);
// }
