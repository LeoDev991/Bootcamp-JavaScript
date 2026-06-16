export async function getBaseEmail(senderName: string): Promise<string> {
    let base =  await getHeaderText();

    base += `Olá ${senderName}. gostaria de me inscrever para receber as novidades do site.`;

    base += '\n Como faço para me inscrever?';
    
    return base;
}

async function getHeaderText (): Promise<string> {
    return "EMAIL PARA VOCÊ";
}

export {getBaseEmail as getEmail};