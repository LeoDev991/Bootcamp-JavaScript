const p = require("./services/products")
const config = require("./services/config")


async function main() {
    // p.getFullName("408", "mousepad")
    //p.getFullName("508", "mouse")
    //p.getFullName("608", "notebook")
    //p.getProductLabel("mousepad")

    console.log(config.client)
}

main()