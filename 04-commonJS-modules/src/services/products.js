 //Todas as funções que lidam com produtos ficam aqui

 async function getFullName(codeId , productName) {
    console.log("\n")
    console.log("product: " + codeId + "--" + productName);   
 }



 async function getProductLabel(productName) {
    console.log("\n")
    console.log("Product: " + productName);
 }
 module.exports = {
    getFullName,
     getProductLabel,
 };