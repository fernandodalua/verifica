// TabularTables = {};
//
// Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);
//
//
// TabularTables.Clientes = new Tabular.Table({
//   name: "Clientes",
//   collection: Clientes,
//   columns: [
//     {data: "nome", title: "Empresa"},
//     {data: "cnpj", title: "CNPJ"},
//     {data: "inscricoestadual", title: "Inscrição Estadual"},
//     {data: "telefone", title: "Telefone"},
//     {data: "endereco", title: "Endereço"},
//     {data: "numero", title: "Número"},
//     {data: "complemento", title: "Complemento"},
//     {data: "municipio", title: "Município"},
//     {data: "bairro", title: "Bairro"},
//     {data: "uf", title: "UF"},
//     {data: "cep", title: "CEP"},
//     {data: "situacao", title: "Situção"},
//
//     {
//       tmpl: Meteor.isClient && Template.bookCheckOutCell
//     }
//   ]
// });
