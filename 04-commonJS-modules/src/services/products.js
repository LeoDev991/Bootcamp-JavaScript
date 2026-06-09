//Todas as funções que lidam com produtos ficam aqui

const productType = {
   version: "digital",
   tax: "x1"
}

//hidden const apiURL = "https://api.com/products" --- IGNORE ---
const apiURL = {
   url: "https://api.com/products" 
}

async function getFullName(codeId, productName) {
   console.log("product: " + codeId + "--" + productName);
   await doBreakLine();
}
//hidden function
async function doBreakLine() {
   console.log("\n") 
}


async function getProductLabel(productName) {
   console.log("\n")
   console.log("Product: " + productName);
}
module.exports = {
   getFullName,
   getProductLabel,
   productType,
};