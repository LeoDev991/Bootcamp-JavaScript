import { getBaseEmail } from "./services/email";

(async () => {
  const email = await getBaseEmail("Leonardo");
  console.log(email);
})();

console.log("Finalizado")
console.log("...")