Template.timeline.helpers({
  posts: function() {
    return Post.list(Meteor.userId());
  }
});
Template.layout.helpers({
  tab: function() {
    return "news";
  },
  tabData: function() {
    var tab = "news";
    var user = Meteor.users.findOne({_id:Meteor.userId()});
    var data = {
      "news": user
    };

    console.log("\n\ntabdATA: ",this);
    console.log("data: ",data);

    return data[ tab ];
  }
});
