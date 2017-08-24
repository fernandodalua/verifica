

Template.leftNavbar.helpers({
  getPerfilNumber: function(){
    // var user = Meteor.user();
    var user = this;
    //console.log(user);
     if (user.following) {
       return user.following.length;
     }
  },
  getFollowersNumber: function(){
    // var user = Meteor.user();
      var user = this;
      //console.log(user);
       if (user.followers) {
         return user.followers.length;
       }
  },

  getProfileViewsNumber: function(){
    // //console.log("getNumberOfViewsProfile",this);
    var user = this;
    //console.log(this);
    // var user = Meteor.user();
    if (user.profile) {

      if (user.profile.views) {
        //console.log("length",user.profile.views);
        return user.profile.views;
        // var viewsNumber = Projects.find({_id: {"$in": this.projects}}).sum("views");

        // //console.log("\ngetNUmberOfVIews\n",viewsNumber);
        // return viewsNumber;
      } else {
        return null;
      }
    } else {
      return null;
    }


  },

  getProjectViewsNumber: function(){
    // //console.log(this);
    var user = this;
    // var user = Meteor.user();

    if (user.projects) {

    var viewsNumber = Projects.find({_id: {"$in": user.projects}}).sum("views");
    // var viewsNumber = Projects.find({_id: {"$in": user.projects}}).sum("views");
    console.log(Projects.find({_id: {"$in": user.projects}}).fetch());
    //console.log("\ngetNUmberOfVIews\n",viewsNumber);
    return viewsNumber;
  } else {
    return null;
  }


  },

  getFbPicture: function(){
    //console.log("getFbPicture: ",this);
    var user = this;
    // var user = Meteor.users.findOne({_id:this.owner});

    return user.profile.fbPicture;
  },

  getProfilePicture: function(){
    // //console.log("profilePhoto - ",this);
    var user = this;
    // var user = Meteor.users.findOne({_id:this.owner});


      if(user.profile.picture){
        // var pic = Images.findOne({_id:user.profile.picture});
        return null;
      }
      else {
        return null;
      }

  },

  useDefaultPhoto: function(){
    var user = this;
    // var user = Meteor.users.findOne({_id:this.owner});

    if (user.profile.fbPicture){
      return false;
    }

    else if (user.profile.picture) {
      return false;
    }

    else {
      return true;
    }

  },

  useProfile: function(){
    var user = this;
    // var user = Meteor.users.findOne({_id:this.owner});

    // //console.log("\n\n-- ----\n useProfile[user]: ",user);
    if (user.profile.picture) {
      // //console.log("return true;");
      return true;
    }
    // //console.log("return false;");
    return false;

  },

  useFacebook: function(){
    // var user = Meteor.users.findOne({_id:this.owner});
    var user = this;

    // //console.log("\n\n-- ----\n useFacebook[user]: ",user);
    if (user.profile.fbPicture) {
      // //console.log("return true;");
      return true;
    }
    // //console.log("return false;");
    return false;

  },

  getFollowingNumber: function(){
    var user = this;
    //console.log(user);
     if (user.following) {
       return user.following.length;
     }
  },
  getFollowersNumber: function(){
      var user = this;
      //console.log(user);
       if (user.followers) {
         return user.followers.length;
       }
  },
  getUserName: function(){
    var user = this;
    if (user.profile) {
      // console.log(user);
      if (user.profile.firstName) {
        return user.profile.firstName+" "+user.profile.lastName;
      } else if(user.profile.name){
        return user.profile.name;
      }
    } else {
      return null;
    }
  },

  suggestedFriends: function(){
    var random = _.sample(Meteor.users.find().fetch(), 5 );
      console.log(random);

      // if (random) {
        return random;
    // return Meteor.users.find();

    // var user = this;
    //
    // if (user) {
    //
    // }
    // if (user.following) {
    //   var myFriends = Meteor.users.find({_id:{"$in":user.following}});
    //   var sFriends = [];
    //   var cFriends;
    //
    //   if (myFriends) {
    //
    //     for (var i = 0; i < myFriends.length; i++) {
    //         cFriends = Meteor.users.find({_id:{"$in": myFriends[i].following}});
    //
    //       sFriends.push(cFriends)
    //
    //     }
    //
    //     //console.log(sFriends);
    //     return myFriends;
    //   }
    // }




  },

});

Template.leftNavbar.events({
  "click #followBtn":function(event, template){
    var user = this;

    //console.log("FollowButton Clicked", Meteor.userId() ," follows", user._id);
    Meteor.users.follow( user._id );
  },

  "click #unfollowBtn":function(event, template){
    //console.log("unFollowButton Clicked");
    var user = this;
    Meteor.users.unfollow( user._id );
  },


  "click #view-public-profile-btn": function(event,template) {
    Router.go('/Home?showPublicProfile=true');
  },
  "click #edit-profile-btn": function(event,template) {
    //console.log('UserInfoPanel event:  click #edit-profile-btn');

    $("#nextstp").removeClass("btn-success");
    $("#nextstp").addClass("btn-info");
    $("#nextstp").text("Próximo");

    var pstep = "ProfileFirstStep";

    // Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profileStep": pstep} });
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profileStep": pstep} });

    $('#myModal').modal('show');

  },
});
