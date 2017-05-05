


Template.navbarHeader.helpers({
  activeIfTemplateIs: function (template) {
    var currentRoute = Router.current();
    console.log(template, currentRoute, currentRoute.lookupTemplate());
    return currentRoute &&
    template === currentRoute.lookupTemplate() ? 'active' : '';
  }
});

Template._loginButtonsLoggedInDropdown.events({

  "click #login-buttons-edit-profile": function(event,template) {





  },

  'click #login-buttons-logout': function(event) {
      Router.go('home');
  },




});



// var options = {
//     secure: true // choose between `http://www.gravatar.com`
//                  //            and `https://secure.gravatar.com`
//                  //            default is `false`
// };
// var url = Gravatar.imageUrl('email@example.com', options);

Template._loginButtonsLoggedInDropdown.helpers({
		displayName: function() {
        var user = Meteor.user();
    		if (!user){
    			return '';
    		}

    		if (user.profile && user.profile.firstName && user.profile.lastName){
    			return user.profile.firstName +" "+ user.profile.lastName;
    		}

    		return '';
		}

});
