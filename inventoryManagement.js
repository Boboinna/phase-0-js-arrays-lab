// Write your code here

const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct(product) {
  console.log(products[0]);
}
logFirstProduct(products);

function addProduct(product) {
  products.push(product);
}

addProduct("Space buds");
console.log(products);

function updateProductName(index, name) {
  products[index] = name;
}

updateProductName(0, "Tablet");
console.log(products);

function removeLastProduct(product) {
  products.pop();
}

removeLastProduct(products);
console.log(products);

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
