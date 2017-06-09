
Router.map(function() {

  this.route('home', {
    path: '/',
    template: 'layout',
    layoutTemplate: 'ApplicationLayout',
    data: function() {
      var user = Meteor.users.findOne({_id:Meteor.userId()});

      return user;

    },
  });

  this.route('editClient', {
    path: '/editClient/:_clientId',
    template: 'editClientTemplate',
    layoutTemplate: 'ApplicationLayout',
    data: function() {
      var user = Meteor.users.findOne({_id: Meteor.userId()});
      var client = Clientes.findOne({_id:this.params._clientId});

      return {user,client};

    }
  });

  this.route('userProfile', {
    path: '/profile/:_userId',
    template: 'userProfileTemplate',
    layoutTemplate: 'ApplicationLayout',
    data: function() {
      var user = Meteor.users.findOne({_id: this.params._userId});
      return {user};

    },
  });
  /*
  */


  this.route('editProfile', {
    path: '/profile/edit/:_userId',
    template: 'editProfileTemplate',
    layoutTemplate: 'ApplicationLayout',
    data: function() {
      return Meteor.users.findOne({_id: this.params._userId});

    },
  });

  //Emitir nota
  this.route('issue', {
    path: '/issue',
    template: 'issueTemplate',
    layoutTemplate: 'ApplicationLayout',
    data: function() {
      return Meteor.users.findOne({_id: Meteor.userId()});

    },
  });

  //Pedidos
  this.route('orders', {
    path: '/orders',
    template: 'orderTemplate',
    layoutTemplate: 'ApplicationLayout',
    data: function() {
      Session.set('showOpenFilter', true);
      Session.set('showFinalizedFilter', false);
      return Meteor.users.findOne({_id: Meteor.userId()});

    },
  });

  this.route('clients', {
    path: '/clients',
    template: 'clientsTemplate',
    layoutTemplate: 'ApplicationLayout',
    data: function() {
      var user = Meteor.users.findOne({_id: Meteor.userId()});
      return user;
    },
  });

  this.route('userConfig', {
    path: '/userConfig',
    template: 'userConfigTemplate',
    layoutTemplate: 'ApplicationLayout',
    data: function() {
      return Meteor.users.findOne({_id: Meteor.userId()});

    },
  });

  this.route('products', {
    path: '/products',
    template: 'productsTemplate',
    layoutTemplate: 'ApplicationLayout',
    data: function() {
      return Meteor.users.findOne({_id: Meteor.userId()});

    },
  });

  this.route('editProduct', {
    path: '/editProduct/:_productId',
    template: 'editProductTemplate',
    layoutTemplate: 'ApplicationLayout',
    data: function() {
      var user = Meteor.users.findOne({_id: Meteor.userId()});
      var product = Produtos.findOne({_id:this.params._productId});

      return {user,product};

    }
  });

  this.route('finances', {
    path: '/finances',
    template: 'financesTemplate',
    layoutTemplate: 'ApplicationLayout',
    data: function() {
      return Meteor.users.findOne({_id: Meteor.userId()});

    },
  });





});
