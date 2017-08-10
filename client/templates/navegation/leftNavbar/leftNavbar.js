

Template.leftNavbar.helpers({

  getProfilePicture: function(){
    // //console.log("profilePhoto - ",this);
    var user = Meteor.user();

    // var user = Meteor.users.findOne({_id:this.owner});


      if(user.profile.picture){
        var pic = Images.findOne({_id:user.profile.picture});
        return pic;
      }
      else {
        return null;
      }

  },


  getUserName: function(){
    var user = this;
    console.log(this);
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

});

Template.leftNavbar.events({

  "change .addProfilePhoto": function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        if (err){

        } else {
          // "profile.fbPicture": undefined,

          // Meteor.users.update({_id:Meteor.userId()}, {$set:{
          //   "profile.fbPicture": null
          // }});

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
});
