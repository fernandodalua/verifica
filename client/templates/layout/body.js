Template.ApplicationLayout.helpers({
  rendered: function(){
    console.log("\n\n--Render ApplicationLayout--\nthis: ",this );
  },

    getCurrentUser:function(){
      console.log("\n\n--getCurrentUser--\n this: ",this);
      var user = Meteor.users.findOne({_id:this._id});
      var name = user.profile.name;
      return name;

    }
});
