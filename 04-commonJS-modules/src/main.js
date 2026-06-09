const product = require("./services/products")
const config = require("./services/config")
const database = require("./services/database")


async function main() {
    console.log("Carrinho de compras:  ")
    product.getFullName("408", "mousepad")
    product.getFullName("508", "mouse")
    product.getFullName("608", "notebook")
    product.getProductLabel("mousepad")
    database.connectToDataBase(config.databaseName)
    database.disconnectDatabase()

}

main()