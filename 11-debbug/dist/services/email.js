"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseEmail = getBaseEmail;
exports.getEmail = getBaseEmail;
async function getBaseEmail(senderName) {
    let base = `Olá ${senderName}. gostaria de me inscrever para receber as novidades do site.`;
    base += '\n Como faço para me inscrever?';
    return base;
}
//# sourceMappingURL=email.js.map