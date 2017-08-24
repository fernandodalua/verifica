Template.ApplicationLayout.helpers({

showLeftNavbar: function(){
  var path = Iron.Location.get().path;



  return true;
},
  isLogged: function(){
    var path = Iron.Location.get().path;
    var split = path.split("/");
    // console.log("\n\npath -- ",path);
    if (split) {
      // console.log(split);
      for (var j = 0; j < split.length; j++) {
        if(split[j] == "Landing"){
          console.log("landing");
          return false;

        }
      }

      if (Meteor.user()) {

        if (split.length == 3) {

          for (var i = 0; i < split.length; i++) {
            if(split[i] == "tip"){
              return Meteor.user();

            }

          }
          return Meteor.users.findOne({_id:split[split.length-1]});

        }

        return Meteor.user();
      }
    }




    return false;
  },
});
