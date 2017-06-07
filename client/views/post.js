Template.newPost.events({
  "click #newPostBtn": function(e, template) {
    e.preventDefault();
    var textarea = $("#content").val();
    var pid = Posts.publish(textarea);
    textarea = "";

    console.log("\n\n\n\npiddpidpidpidip",pid);

    return false;
  }
});

Template.editable.helpers({

  rendered: function(){

  }
});
