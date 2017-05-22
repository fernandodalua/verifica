Template.postItem.events({
  "click #deleteBtn": function(event, template){

    console.log("\n--PostItem--\nthis: ",this);
    Post.remove({_id:this._id});
    

  }
});
