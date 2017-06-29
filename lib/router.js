
Iron.utils.debug = true;

Router.configure({
  layoutTemplate: 'ApplicationLayout', //can be any template name

  // wait on the following subscriptions before rendering the page to ensure
  // the data it's expecting is present
  waitOn: function() {
    return [
  //
  //     Meteor.subscribe('startups'),
  //     Meteor.subscribe('skillList'),
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
  //     Meteor.subscribe('projects'),
  //
    ];
  //
  }
});


/*
Router.route("/", function(){
//  var user = Meteor.users.findOne({_id:Meteor.userId()});

  console.log("-- Home --\nthis:",this,"\nuser:",user);

  this.render("layout",{
    data: function(){
      return Meteor.users.findOne({_id:Meteor.userId()});
    }
  });
});


Router.route('/user/:_userId', function () {
  //var user =

  this.render('Profile', {
    data: function(){
      return Meteor.users.findOne({ _id: this.params._userId });
    }
  });
});

*/
