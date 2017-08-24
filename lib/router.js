
Iron.utils.debug = true;

Router.configure({
  layoutTemplate: 'ApplicationLayout', //can be any template name

  // wait on the following subscriptions before rendering the page to ensure
  // the data it's expecting is present
  waitOn: function() {
    return [
      // Meteor.subscribe('posts'),
      Meteor.subscribe('userData'),
      Meteor.subscribe('images'),
      Meteor.subscribe('certificados'),
      Meteor.subscribe('clients'),
      Meteor.subscribe('products'),
      Meteor.subscribe('orders'),
      Meteor.subscribe('fretes'),
      Meteor.subscribe('transportadores'),
      Meteor.subscribe('tributos'),
      Meteor.subscribe('notas'),
    ];

  }
});



Router.route('/Landing');

//Show all photos of a project
Router.route("/home", function() {
  var user = Meteor.user();
  console.log("\n -- Home --\n user:",user);

  this.render('homeTemplate',{data: user});
});

Router.route('/', function () {
  this.redirect('/home');
});



Router.route("/fiscal", function() {
  var user = Meteor.user();
  console.log("\n -- Fiscal --\n user:",user);

  this.render('fiscalTemplate',{data: user});
});

Router.route("/emitir", function() {
  var user = Meteor.user();
  console.log("\n -- Emitir --\n user:",user);

  this.render('emitirTemplate',{data: user});
});
Router.route("/tributos", function() {
  var user = Meteor.user();
  console.log("\n -- Tributos --\n user:",user);

  this.render('tributosTemplate',{data: user});
});


Router.route("/financeiro", function() {
  var user = Meteor.user();
  console.log("\n -- Financeiro --\n user:",user);

  this.render('financeiroTemplate',{data: user});
});


Router.route("/contabil", function() {
  var user = Meteor.user();
  console.log("\n -- Contábil --\n user:",user);

  this.render('contabilTemplate',{data: user});
});

Router.route("/manufatura", function() {
  var user = Meteor.user();
  console.log("\n -- Manufatura --\n user:",user);

  this.render('manufaturaTemplate',{data: user});
});


Router.route("/suprimentos", function() {
  var user = Meteor.user();
  console.log("\n -- Suprimentos --\n user:",user);

  this.render('suprimentosTemplate',{data: user});
});

Router.route("/transporte", function() {
  var user = Meteor.user();
  console.log("\n -- Transporte --\n user:",user);

  this.render('transporteTemplate',{data: user});
});

Router.route("/custos", function() {
  var user = Meteor.user();
  console.log("\n -- Custos --\n user:",user);

  this.render('custosTemplate',{data: user});
});


Router.route("/mercado", function() {
  var user = Meteor.user();
  console.log("\n -- Mercado --\n user:",user);

  this.render('mercadoTemplate',{data: user});
});

Router.route("/clientes", function() {
  var user = Meteor.user();
  console.log("\n -- Mercado --\n user:",user);

  this.render('clientesTemplate',{data: user});
});

Router.route("/produtos", function() {
  var user = Meteor.user();
  console.log("\n -- Mercado --\n user:",user);

  this.render('produtosTemplate',{data: user});
});

Router.route("/pedidos", function() {
  var user = Meteor.user();
  console.log("\n -- Mercado --\n user:",user);

  this.render('pedidosTemplate',{data: user});
});

Router.route("/servicos", function() {
  var user = Meteor.user();
  console.log("\n -- Serviços --\n user:",user);

  this.render('servicosTemplate',{data: user});
});

Router.route("/crm", function() {
  var user = Meteor.user();
  console.log("\n -- CRM --\n user:",user);

  this.render('crmTemplate',{data: user});
});

Router.route("/pessoas", function() {
  var user = Meteor.user();
  console.log("\n -- Pessoas --\n user:",user);

  this.render('pessoasTemplate',{data: user});
});
