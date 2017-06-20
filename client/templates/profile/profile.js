Template.followButton.helpers({
  canFollow: function() {
    //var result = (this._id != Meteor.userId());
    //console.log("user", Meteor.userId(), "canFollow ", this._id, "?", result);
    //return result;
    return true;
  },

  isFollowing: function() {
    //var following = Meteor.users.isFollowing(this._id);
    //console.log("user", Meteor.userId(), "isFollowing ", this._id, "?", following);
    //return following;
    return false;
  }
});

Template.UserInfoPanel.helpers({

  getUserName: function () {
      console.log("\n\nuserInfoPanel this: ", this);
      console.log("\n\nuserInfoPanel _id: ", this.params._userId);

      var user = Meteor.users.findOne({_id:this.param._userId});

      return user.profile.name;

  }

});

Template.UserFeedPanel.helpers({

  getUserPosts: function(uId){
    console.log("\n\ngetUserPosts: ",uId);
    return Post.list(uId);

  }

});

Template.UserInfoPanel.events({

  "click #followBtn":function(event, template){
    console.log("FollowButton Clicked", Meteor.userId() ," follows", this._id);
    Meteor.users.follow( this._id );
  },

    "click #unfollowBtn":function(event, template){
      console.log("unFollowButton Clicked");
      Meteor.users.unfollow( this._id );
    },

  "click #edit-profile-btn": function(event,template) {
    console.log('UserInfoPanel event:  click #edit-profile-btn');

    $("#nextstp").removeClass("btn-success");
    $("#nextstp").addClass("btn-info");
    $("#nextstp").text("Próximo");

    var pstep = "ProfileFirstStep";

    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profileStep": pstep} });

    $('#myModal').modal('show');

  },

  "click #view-public-profile-btn": function(event,template) {
    Router.go('/Home?showPublicProfile=true');
  },

});

Template.Profile.onCreated(function () {
   console.log('Profile this:', this);
});



Template.ButtonBar.events({
  "click #FollowingBtn": function(event, template){
    Router.go("/following/"+this._id);
  },

  "click #FollowersBtn": function(event, template){
    Router.go("/followers/"+this._id);

  },

  "click #PortfolioBtn": function(event, template){
    Router.go("portfolio");
  },

  "click #PanelBtn": function(event, template){
    Router.go("panel");
  },

  "click #BudgetBtn": function(event, template){
    Router.go("budget");
  },

  "click #AvaliationBtn": function(event, template){
    Router.go("avaliation");
  },
  "click #TipsBtn": function(event, template){
    Router.go("tips");
  },

});


Template.editProfileTemplate.events({
  'click #submitForm'(){
    $("#UserProfileEdit").submit();



  },

  "click #getBtn"(){

    var query = "?n1="+num1+"&n2="+num2;
    console.log("\n\nquery: ",query);
    //var response = Meteor.call('getPost',query);

    // set Session variable in method callback
    Meteor.call('getPost', query, function(error, result){
      Session.set('responsePost', result);
      // console.log("Result",result);

    });

        console.log("\nresponse: ",Session.get('responsePost'));
      },

  "change .addPhoto": function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        if (err){
          // handle error
        } else {
          // handle success depending what you need to do
          var userId = Meteor.userId();
          var imagesURL = {
            "profile.image": "/cfs/files/images/" + fileObj._id
          };
          Meteor.users.update(userId, {$set: imagesURL});


          console.log("/cfs/files/images/"+fileObj._id);

          Meteor.users.update({_id:Meteor.userId()}, {$set:{
            "profile.photos":fileObj._id
          }});

        }
      });

    });
  },

  'click .person-row'() {
    Session.set("selectedPersonId", this._id);
  },
  'change .autosave-toggle'() {
    Session.set("autoSaveMode", !Session.get("autoSaveMode"));
  }
});

Template.editProfileTemplate.helpers({

  getResult: function(){
      return Session.get("responsePost");
  },

  autoSaveMode() {
    return Session.get("autoSaveMode") ? true : false;
  },
  selectedPersonDoc() {
    return People.findOne(Session.get("selectedPersonId"));
  },
  isSelectedPerson() {
    return Session.equals("selectedPersonId", this._id);
  },
  formType() {
    if (Session.get("selectedPersonId")) return "update";
    return "disabled";
  },
  disableButtons() {
    return !Session.get("selectedPersonId");
  }
});

Template.footerOptions.events({
  "click #save": function(event, template){
    var cert = Session.get("certificado");
    console.log(cert);

    if(cert == null){
      cert = Meteor.user().profile.certificado;

    }
    console.log(cert);

    if(cert){

      Meteor.users.update({_id:Meteor.userId()}, {$set:{
        "profile.certificado": cert
      }});
      $("#UserProfileEdit").submit();

      Session.set("certificado", null);

        console.log(Images.findOne({_id:cert}).url());
        // log()

      var certId = this.profile.certificado;
      var certPass = this.profile.senhacertificado;
      var query = "?"+certId+"&"+certPass;
      console.log("\n\nquery: ",query);
      //var response = Meteor.call('getPost',query);

      // set Session variable in method callback
      Meteor.call('getPost', query, function(error, result){
        Session.set('responsePost', result);
        // console.log("Result",result);

      });
      console.log("\nresponse: ",Session.get('responsePost'));




  }


  },
  "click #check": function(event, template){

    var user = Meteor.user();
    var cnpj = $("#cnpj").val();
    var cert = Session.get("certificado");
    
    if(cert == null){
      cert = Meteor.user().profile.certificado;

    }

    // var num2 = $("#n2").val();

    //?nome=&cnpj=19546609000199&arquivo=&senha=
    var query = "?nome=&cnpj="+cnpj+"&arquivo="+cert+"&senha="+user.profile.senhacertificado;
    console.log("\n\nquery: ",query);
    //var response = Meteor.call('getPost',query);


    // set Session variable in method callback
      // console.log("Result",result);

      Meteor.call('getPost', query, function(error, result){
        Session.set('responsePost', result);
        swal("Resposta",result,"success");
      });


    console.log("\nresponse: ",Session.get('responsePost'));


  },

  "click #cancel": function(event,template){
    console.log("\n\n\ntemplte: ",template);
    Router.go("userConfig");
  }

});
