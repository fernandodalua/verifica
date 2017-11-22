Template.register.events({
  'submit form': function(event){
      event.preventDefault();
      var email = $('[name=registerEmail]').val();
      var password = $('[name=registerPassword]').val();

      Accounts.createUser({
        email: email,
        password: password
      });

  }
});

Template.login.events({
  'submit form': function(event){
      event.preventDefault();
      var email = $('[name=loginEmail]').val();
      var password = $('[name=loginPassword]').val();

      Meteor.loginWithPassword(email, password, function(error){
        swal("Ops!", error.reason, "error");
      });

  }
});
