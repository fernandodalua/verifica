
Iron.utils.debug = true;

Router.configure({
  layoutTemplate: 'ApplicationLayout', //can be any template name

  // wait on the following subscriptions before rendering the page to ensure
  // the data it's expecting is present
  waitOn: function() {
    return [
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

Router.route('/', function(){
  var user = Meteor.user();
  // var user = Meteor.users.findOne({_id:"recordId"});

  console.log(user);
  this.render("homeTemplate");
},{
  name:"home"
});

Router.route('/editClient/:_clientId', function(){
  var user = Meteor.user();
  // var user = Meteor.users.findOne({_id: Meteor.userId()});
  var client = Clientes.findOne({_id:this.params._clientId});

  this.render("editClientTemplate",{data: user});
});

Router.route('/profile/:_userId', function(){
  var user = Meteor.users.findOne({_id: this.params._userId});
  // var user = Meteor.user();
  this.render("userProfileTemplate",{data: user});
});

Router.route('/profile/edit/:_userId', function(){
  var user = Meteor.users.findOne({_id: this.params._userId});
  this.render("editProfileTemplate",{data: user});
});

Router.route('/issue', function(){
  var user = Meteor.user();
  this.render("issueTemplate",{data: user});
});

Router.route('/taxes', function(){
  var user = Meteor.user();
  this.render("taxesTemplate",{data: user});
});

Router.route('/orders', function(){
  var user = Meteor.user();
    Session.set('showOpenFilter', true);
    Session.set('showFinalizedFilter', false);
  this.render("orderTemplate",{data: user});
});

Router.route('/clients', function(){
  var user = Meteor.user();
  this.render("clientsTemplate",{data: user});
});

Router.route('/transport', function(){
  var user = Meteor.user();
  this.render("transporteTemplate",{data: user});
});

Router.route('/userConfig', function(){
  var user = Meteor.user();
  this.render("userConfigTemplate",{data: user});
});

Router.route('/products', function(){
  var user = Meteor.user();
  this.render("productsTemplate",{data: user});
});
Router.route('/editProduct/:_productId', function(){
  var user = Meteor.user();
  var product = Produtos.findOne({_id:this.params._productId});

  this.render("editProductTemplate",{data: user});
});
Router.route('/finances', function(){
  var user = Meteor.user();
  this.render("financesTemplate",{data: user});
});

Router.route('/repp', function(){
  var user = Meteor.user();
  this.render("reppTemplate",{data: user});
  });

//////////
