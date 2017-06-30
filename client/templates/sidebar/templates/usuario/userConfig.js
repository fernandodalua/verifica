


Template.userConfigTemplate.onCreated(function () {

  Session.set("certificado", null);



  //  console.log(' -- -- userConfigTemplate this: -- -- --\n', this);
});




Template.userConfigTemplate.events({

  "change .addCertificado": function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Certificados.insert(file, function (err, fileObj) {
        if (err){
          // handle error
        } else {

            // Meteor.users.update({_id:Meteor.userId()}, {$set:{
            //   certificado: fileObj._id
            // }});
            console.log(fileObj._id);
            // Session.set("certificado", fileObj._id);
            // console.log(Session.get("certificado"));
          // // handle success depending what you need to do
          // var userId = Meteor.userId();
          // var imagesURL = {
          //   "profile.image": "/cfs/files/images/" + fileObj._id
          // };
          Meteor.users.update({_id: Meteor.userId()}, {$set: {
            "profile.certificado": fileObj._id

          }});
          //
          //
          // console.log("/cfs/files/images/"+fileObj._id);
          //
          // Meteor.users.update({_id:Meteor.userId()}, {$set:{
          //   "profile.photos":fileObj._id
          // }});

        }
      });

    });
  },

  "change #addFoto": function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        if (err){
          // handle error
        } else {

            // Meteor.users.update({_id:Meteor.userId()}, {$set:{
            //   certificado: fileObj._id
            // }});
            console.log(fileObj._id);
            // Session.set("certificado", fileObj._id);
            // console.log(Session.get("certificado"));
          // // handle success depending what you need to do
          // var userId = Meteor.userId();
          // var imagesURL = {
          //   "profile.image": "/cfs/files/images/" + fileObj._id
          // };
          Meteor.users.update({_id: Meteor.userId()}, {$set: {
            "profile.foto": fileObj._id

          }});
          //
          //
          // console.log("/cfs/files/images/"+fileObj._id);
          //
          // Meteor.users.update({_id:Meteor.userId()}, {$set:{
          //   "profile.photos":fileObj._id
          // }});

        }
      });

    });
  },


});

Template.userConfigTemplate.helpers({

  getResult: function(){
      return Session.get("responsePost");
  },

  getCurrentUser: function(){
      // return Session.get("responsePost");
      return Meteor.user();
  },

});
