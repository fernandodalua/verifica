Template.post.events({
  "submit form": function(e, template) {
    e.preventDefault();
    var textarea = $("#content").val();
    Posts.publish(textarea);
    textarea = "";
    return false;
  }
});

Template.editable.helpers({

  rendered: function(){

  }
});
