Template.sidebarHeader.helpers({

  getCurrentUser: function () {
    var user = Meteor.users.findOne({_id:Meteor.userId()});
    console.log("\n\nsidebar user: ", user);
    return user;

  },

  getUserPhoto: function(){

    console.log("getUserPhoto: ",this);

    return Images.findOne({_id: this.profile.photos});

  }


});
