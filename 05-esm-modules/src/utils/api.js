export  const key = {
    value: "<API_KEY>",
    permissions: "admin",
};

export const getDataFromApi = async () => {
    // lógica para obter dados da API usando a chave de acesso
    console.log("Dados da API sendo buscados, usando a chave de acesso: ", key.value);
}