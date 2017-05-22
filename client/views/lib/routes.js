
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
  this.route('userProfile', {
    path: '/profile/:_userId',
    template: 'userProfileTemplate',
    layoutTemplate: 'ApplicationLayout',
    data: function() {
      return Meteor.users.findOne({_id: this.params._userId});

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

  this.route('clients', {
    path: '/clients',
    template: 'clientsTemplate',
    layoutTemplate: 'ApplicationLayout',
    data: function() {
      return Meteor.users.findOne({_id: Meteor.userId()});

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

  this.route('finances', {
    path: '/finances',
    template: 'financesTemplate',
    layoutTemplate: 'ApplicationLayout',
    data: function() {
      return Meteor.users.findOne({_id: Meteor.userId()});

    },
  });





});
