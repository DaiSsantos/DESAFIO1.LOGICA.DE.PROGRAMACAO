console.log("Ano Novo está chegando!");
let cantora = "Mariah Carey";
let idade = 54;
let anoAtual = 2023 - idade;

console.log(cantora);
console.log(idade);
console.log(anoAtual);

let nascimento = 2023 - idade;
console.log(nascimento);

let quartaFeira = true;
console.log(quartaFeira);

console.log(typeof quartaFeira);

let idadePessoa = 36;

if (idadePessoa >= 18) {
  console.log(
    "Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey"
  );
} else {
  console.log("Sinto muito, mas assistirá da tv globo");
}

let mês = "Abril";

if (mês == "Agosto" || mês == "Dezembro" || mês == "Junho") {
  console.log(`Uma ou mais opções estão corretas. 
  O mês escolhido foi o mês ${mês}`);
} else {
  console.log(`Algo de errado não está certo, o mês digitado foi 
  o mês de ${mês}`);
}
