
Template.rightNavbar.helpers({
  getFollowingNumber: function(){
    var user = this;
    console.log(user);
     if (user.following) {
       return user.following.length;
     }
  },
  getFollowersNumber: function(){
      var user = this;
      console.log(user);
       if (user.followers) {
         return user.followers.length;
       }
  },
  getFbPicture: function(){
    console.log("getFbPicture: ",this);
    var user = this;
    // var user = Meteor.users.findOne({_id:this.owner});

    return user.profile.fbPicture;
  },

  getProfilePicture: function(){
    // console.log("profilePhoto - ",this);
    var user = this;
    // var user = Meteor.users.findOne({_id:this.owner});


      if(user.profile.picture){
        var pic = Images.findOne({_id:user.profile.picture});
        return pic;
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

    // console.log("\n\n-- ----\n useProfile[user]: ",user);
    if (user.profile.picture) {
      // console.log("return true;");
      return true;
    }
    // console.log("return false;");
    return false;

  },

  useFacebook: function(){
    // var user = Meteor.users.findOne({_id:this.owner});
    var user = this;

    // console.log("\n\n-- ----\n useFacebook[user]: ",user);
    if (user.profile.fbPicture) {
      // console.log("return true;");
      return true;
    }
    // console.log("return false;");
    return false;

  },

  getFollowingNumber: function(){
    var user = this;
    console.log(user);
     if (user.following) {
       return user.following.length;
     }
  },
  getFollowersNumber: function(){
      var user = this;
      console.log(user);
       if (user.followers) {
         return user.followers.length;
       }
  },
  getIcon: function(){
    // return "/"+this.iconID;
    var cat = this.category;
    console.log(cat);
    // console.log("\n\ncategory",cat,this.iconID);
    switch (cat) {
      case "Iluminação":
        return "/iluminacao.png";
        break;

        case "Jardinagem":
        return "/jardinagem.png";
        break;

        case "Mobilidade":
        return "/mobilidade.png";
        break;


      default:
        return "/Tips-icon.png";
    }
  },
  serendipiTips: function(){

    console.log(Tips.find().fetch());

  var random = _.sample(Tips.find().fetch(),5 );
    console.log(random);

    // if (random) {
      return random;
    // }

    // var tips = Tips.find();
    // if (tips) {
    //   console.log(tips.fetch());
    //   return tips
    // }

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
    //     console.log(sFriends);
    //     return myFriends;
    //   }
    // }




  },

});

Template.rightNavbar.events({
  "click #refreshTips": function(event, template){
    console.log("refresh");

  },
  "click #allTips": function(event, template){
    console.log("refresh2");

  },

});
