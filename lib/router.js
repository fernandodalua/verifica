
Iron.utils.debug = true;

Router.configure({
  layoutTemplate: 'ApplicationLayout', //can be any template name

  // wait on the following subscriptions before rendering the page to ensure
  // the data it's expecting is present
  waitOn: function() {
    return [
      // Meteor.subscribe('posts'),
      Meteor.subscribe('posts'),
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


  // var user = Meteor.users.findOne({_id:"recordId"});

// <<<<<<< HEAD

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
// =======
//   console.log(user);
//   this.render("homeTemplate");
// },{
//   name:"home"
// });
//
// Router.route('/editClient/:_clientId', function(){
//   var user = Meteor.user();
//   // var user = Meteor.users.findOne({_id: Meteor.userId()});
//   var client = Clientes.findOne({_id:this.params._clientId});
//
//   this.render("editClientTemplate",{data: user});
// });
//
// Router.route('/profile/:_userId', function(){
//   var user = Meteor.users.findOne({_id: this.params._userId});
//   // var user = Meteor.user();
//   this.render("userProfileTemplate",{data: user});
// });
//
// Router.route('/profile/edit/:_userId', function(){
//   var user = Meteor.users.findOne({_id: this.params._userId});
//   this.render("editProfileTemplate",{data: user});
// });
//
// Router.route('/issue', function(){
//   var user = Meteor.user();
//   this.render("issueTemplate",{data: user});
// });
//
// Router.route('/taxes', function(){
//   var user = Meteor.user();
//   this.render("taxesTemplate",{data: user});
// });
//
// Router.route('/orders', function(){
//   var user = Meteor.user();
//     Session.set('showOpenFilter', true);
//     Session.set('showFinalizedFilter', false);
//   this.render("orderTemplate",{data: user});
// });
//
// Router.route('/clients', function(){
//   var user = Meteor.user();
//   this.render("clientsTemplate",{data: user});
// });
//
// Router.route('/transport', function(){
//   var user = Meteor.user();
//   this.render("transporteTemplate",{data: user});
// });
//
// Router.route('/userConfig', function(){
//   var user = Meteor.user();
//   this.render("userConfigTemplate",{data: user});
// });
//
// Router.route('/products', function(){
//   var user = Meteor.user();
//   this.render("productsTemplate",{data: user});
// });
// Router.route('/editProduct/:_productId', function(){
//   var user = Meteor.user();
//   var product = Produtos.findOne({_id:this.params._productId});
//
//   this.render("editProductTemplate",{data: user});
// });
// Router.route('/finances', function(){
//   var user = Meteor.user();
//   this.render("financesTemplate",{data: user});
// });
//
// Router.route('/repp', function(){
//   var user = Meteor.user();
//   this.render("reppTemplate",{data: user});
//   });
//
// //////////
// >>>>>>> 4d1714ba2fc426ff9d4966cb4c6f3a9c9960a875
