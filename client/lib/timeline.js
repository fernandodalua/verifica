if (Meteor.isClient) {
  Session.setDefault('textAreaContent', "Some text area content that is editable on click");

  Template.editable.helpers({
    'textAreaContent': function () {
      return Session.get('textAreaContent');
    }
  });

  Template.editable.rendered = function(){
    $('#content').wysihtml5();

  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
};


Template.postItem.events({
  "click #deleteBtn": function(event, template){

    // console.log("\n--PostItem--\nthis: ",this);
    Posts.remove({_id:this._id});
  }
});
