Template.ApplicationLayout.helpers({
  getCurrentUser:function(){
    console.log("\n\n--getCurrentUser--\n this: ",this);
    var user = Meteor.user();
    // var name = user.profile.name;
    return user;

  }


});
