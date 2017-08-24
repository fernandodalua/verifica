
Template.topNavbar.helpers({
  canUpdate: function(){
    var user = this;
    if (user._id == Meteor.userId()) {
      return true;
    } else {
      return false;
    }


  },
  useDefaultPhoto: function(){
    // var user = Meteor.users.findOne({_id:this.owner});
    var user = this;
    if (user.profile) {
      if (user.profile.fbPicture){
        return false;
      }

      else if (user.profile.picture) {
        return false;
      }

      else {
        return true;
      }
    } else {
      return false;

    }
  },

  getDate: function(){
      return this.createdAt.toLocaleString();
  },

  useFacebook: function(){
    // //console.log(this);
    // var user = Meteor.users.findOne({_id:this.owner});
    var user = this;
    if (user.profile) {

    if (user.profile.fbPicture) {
      return true;
    }
  }

  return false;

  },

  getFbPicture: function(){
    // //console.log("getFbPicture: ",this);
    // var user = Meteor.users.findOne({_id:this.owner});
    var user = this;
    // //console.log(user.profile.fbPicture);
    return user.profile.fbPicture;
  },

  getThumb: function(){
    // //console.log("profilePhoto - ",this);
    // var user = Meteor.users.findOne({_id:this.owner});
    var user = Meteor.user();

      if(user.profile.picture){
        var pic = Images.findOne({_id:user.profile.picture});
        return pic;
      }

      return "/serendipi_thumb.png";



  },


  useProfilePicture: function(){
    //console.log(this);
    var user = this;

    if (user.profile.picture) {
      return true;
    }
    else {
      false;
    }

  },

  getProfilePicture: function(){
    //console.log("profilePhoto - ",this);
    var user = this;

      if(user.profile.picture){
        var pic = Images.findOne({_id:user.profile.picture});
        return pic;
      }
      else {
        return null;
      }

  },


  getProfileCover: function(){
    var user = this;
    console.log("profileCover - ",this);
    if (user.profile) {
      console.log(user);
      if(user.profile.cover){
        //console.log("oi");
        var cover = Images.findOne({_id:user.profile.cover});
        if (cover) {
          //console.log(cover.url());
          return cover;
        }
        else {
          // return "/defaulCover.jpg";
          return null;
        }

      } else {

        return new Object({url:"/cover.jpg"});
      }

    } else {
       return null;
    }

  },

  getNumberOfViewsProfile: function(){
    //console.log("getNumberOfViewsProfile",this);
    if (this.profile.views) {
      //console.log("length",this.profile.views);
      return this.profile.views;
    // var viewsNumber = Projects.find({_id: {"$in": this.projects}}).sum("views");

    // //console.log("\ngetNUmberOfVIews\n",viewsNumber);
    // return viewsNumber;
  } else {
    return null;
  }
  },
  getNumberOfViewsProjects: function(){
    //console.log(this);
    if (this.projects) {

    var viewsNumber = Projects.find({_id: {"$in": this.projects}}).sum("views");

    //console.log("\ngetNUmberOfVIews\n",viewsNumber);
    return viewsNumber;
  } else {
    return null;
  }


  },
  getNumberOfFollowing: function(){
    // Meteor.users.findOne({_id:"recordId"});
    //console.log(this);
    if (this.following) {
      return this.following.length;
    }

    return undefined;
  },
  getNumberOfFollowers: function(){
    //console.log(this);
    if (this.followers) {
      return this.followers.length;

    } else {
      return undefined;
    }
  },

});

Template.topNavbar.events({

  "change .addProfilePhoto": function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        if (err){

        } else {
          // "profile.fbPicture": undefined,

          Meteor.users.update({_id:Meteor.userId()}, {$set:{
            "profile.fbPicture": null
          }});

          Meteor.users.update({_id:Meteor.userId()}, {$set:{
            "profile.picture": fileObj._id
          }});


          // Session.set("editTipID",fileObj._id);

        }
      });

    });
  },

  'click #changeProfilePhoto': function(event, template){

      if (this._id == Meteor.userId()) {
        $('#addProfilePhoto').trigger('click');
      }
      else{
        //console.log("User can not change profile photo",this);
      }

  },

  "change .addProfileCover": function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        if (err){
          //console.log("error saving cover image");

        } else {
          Meteor.users.update({_id:Meteor.userId()}, {$set:{
            "profile.cover":fileObj._id
          }});

          // Session.set("editTipID",fileObj._id);

        }
      });

    });
  },

  'click #changeProfileCover': function(event, template){
    if (this._id == Meteor.userId()) {
      $('#addProfileCover').trigger('click');
    } else {
      //console.log("User can not change profile cover",this);

    }

  },



  "click #followBtn":function(event, template){
    //console.log("FollowButton Clicked", Meteor.userId() ," follows", this._id);
    Meteor.users.follow( this._id );
  },

    "click #unfollowBtn":function(event, template){
      //console.log("unFollowButton Clicked");
      Meteor.users.unfollow( this._id );
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
