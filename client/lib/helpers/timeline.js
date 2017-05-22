Template.timeline.helpers({
  posts: function() {
    return Post.list(Meteor.userId());
  },



});

Template.postItem.helpers({

    getNameById: function(uId){
      var user = Meteor.users.findOne({_id: uId});
      return user.profile.name;

    }
});




Template.layout.helpers({
  tab: function() {
    return "news";
  },
  tabData: function() {
    //var tab = "news";

    var tab = Session.get("currentSidebar");

    var user = Meteor.users.findOne({_id:Meteor.userId()});
    var data = {
      "news": user,
      "Profile": this.params._userId
    };

    console.log("\n\ntabdATA: ",this);
    console.log("data: ",data);

    return data[ tab ];
  }
});
