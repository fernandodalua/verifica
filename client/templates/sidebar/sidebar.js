
Template.sidebarHeader.helpers({

  getCurrentUser: function () {
    var user = Meteor.users.findOne({_id:Meteor.userId()});
    console.log("\n\nsidebar user: ", user);
    return user;

  },

  getUserPhoto: function(){

    // console.log("getUserPhoto: ",this);

    var path = Router.current().route._path;
    // console.log("caminho ",path);

    // path == "/editClient/:_clientId"


    switch (path) {
      case "/clients":
      // console.log("case clients: ",this);
        return Images.findOne({_id: this.profile.foto});

        break;

        case "/editClient/:_clientId":
          return Images.findOne({_id: this.user.profile.foto});

          break;

        case "/editProduct/:_productId":
          return Images.findOne({_id: this.user.profile.foto});

          break;




      default:
        return Images.findOne({_id: this.profile.foto});

    }





  }


});
