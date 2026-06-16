"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = require("./services/email");
(async () => {
    const email = await (0, email_1.getBaseEmail)("Leonardo");
    console.log(email);
})();
//# sourceMappingURL=index.js.map