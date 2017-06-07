Template.postItem.events({
  "click #deleteBtn": function(event, template){

    console.log("\n--PostItem--\nthis: ",this);
    Posts.remove({_id:this._id});


  }
});
