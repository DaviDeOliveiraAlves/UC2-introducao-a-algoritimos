const filme = {
  nome: "Gente grande",
  diretor: "Dennis Dugan",
  anoLancamento: 2010,
  elenco: ["Adam Sandler", "Kevin James", "Chris Rock"],
  personagens: ["Lenny Feder", "Eric Lamonsoff", "Kurt McKenzie" ],
  jaViu: true
};

filme.elenco[0] = "Xuxa";

for (let i = 0; i < filme.elenco.length; i++) {
  console.log(`${filme.elenco[i]} como ${filme.personagens[i]}`);
}

for (let propriedade in filme) {
  console.log(`${propriedade}: ${filme[propriedade]}`);
}
