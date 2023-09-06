import faker from "faker";

let productList = "";

for (let x = 0; x < 10; x++) {
  const productName = faker.commerce.product();
  productList += `<div>${productName}</div>`;
}

const productListEl = document.getElementById("productList");
productListEl.innerHTML = productList;

console.log(productList);
