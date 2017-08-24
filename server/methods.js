

Meteor.methods({
  /* numActivity: limits number of recent activity */
  // getRecentActivity: function(numActivity) {
  //   var recentActivity = [];
  //
  //
  //   /* Get recent created users */
  //   var recentCreated = Meteor.users.find({}, {sort: {createdAt: -1}, limit: numActivity}).fetch();
  //   for (var i = 0; i < recentCreated.length; i++) {
  //     recentActivity.push({type:"created",
  //     userId: recentCreated[i]._id,
  //     firstName:recentCreated[i].profile.firstName,
  //     lastName:recentCreated[i].profile.lastName,
  //     date:recentCreated[i].createdAt});
  //   }
  //
  //   /* Get recent updated users */
  //   var recentUpdated = Meteor.users.find({}, {sort: {updatedAt: -1}, limit: numActivity}).fetch();
  //   for (var i = 0; i < recentUpdated.length; i++) {
  //     recentActivity.push({type:"updated",
  //     userId: recentUpdated[i]._id,
  //     firstName:recentUpdated[i].profile.firstName,
  //     lastName:recentUpdated[i].profile.lastName,
  //     date:recentUpdated[i].updatedAt});
  //   }
  //
  //   /* Get recent updated users */
  //   // var recentPost = Meteor.users.posts.find({}, {sort: {createdAt: -1}, limit: numActivity}).fetch();
  //   // for (var i = 0; i < recentUpdated.length; i++) {
  //   //   recentActivity.push({type:"newPost",
  //   //   userId: recentUpdated[i]._id,
  //   //   firstName:recentUpdated[i].profile.firstName,
  //   //   lastName:recentUpdated[i].profile.lastName,
  //   //   date:recentUpdated[i].updatedAt});
  //   // }
  //
  //   /* Sort by decreasing date */
  //   recentActivity.sort(function(a, b) {
  //     return  a.date < b.date;
  //   });
  //
  //   return recentActivity.slice(0, numActivity);
  // },
  //
  // getRecentPosts: function(numPosts) {
  //
  //   /* Get recent updated posts */
  //   return Posts.find({}, {sort: {update: -1}, limit: numPosts}).fetch();
  //
  // },
  //
  // nextStep: function(selectedUserId, stepName){
  //   // var profileStep = Meteor.users.findOne({ _id: selectedUserId }).profile.profileStep;
  //   console.log("u ", selectedUserId," s ", stepName);
  //   var profileStep = Meteor.user().profile.profileStep;
  //
  //   Meteor.users.update(Meteor.userId(), { $set: {"profile.profileStep": stepName} });
  //   console.log("From ",profileStep," to ",stepName);
  //   return stepName;
  //
  // },
  //
  // userPost: function(post){
  //   postFound = Posts.findOne({_id:post._id});
  //   if (postFound && postFound.authorId != Meteor.userId()) {
  //     console.log("Cannot edit this document, current user ins't the author");
  //     return;
  //   }
  //
  //   postId = post._id;
  //   delete post._id;
  //   var returned = Posts.upsert( postId, { $set: post } );
  //
  //   if (returned.insertedId){
  //     console.log("Post ", returned.insertedId, " created by", Meteor.userId());
  //     return returned.insertedId;
  //   }
  //   else{
  //     console.log("Post ", postId, " updated by", Meteor.userId());
  //     return postId;
  //   }
  // },

  // In your server code: define a method that the client can call

  swSaveNFE: function(postQuery){
      console.log("\n\n\n\n-- -- -- -- getPost -- -- -- -- ");
      console.log("\n -- -- -- <POSTQUERY> -- -- -- \n\n", postQuery,"\n\n -- -- -- </POSTQUERY> -- -- --\n\n");
      var nfe = EJSON.stringify(postQuery,{indent:true});
      // console.log('\n\n-- nfe (stringify) --\n', nfe);


      Meteor.http.get('http://177.35.44.10/verifica/nfe.php',{params:{a:nfe}},
       function( error, response ) {
        if ( error ) {
          console.log("\n\n\n\n -- http error:\n", error );
          return error;
        } else {
          console.log("\n -- -- -- <RESPOSTA> -- -- --\n\n", response,"\n\n-- -- -- </RESPOSTA> -- -- --\n\n" );
          // Session.set("httpResponse",response);

          // swal("success","Resposta:", response.content)
          return response;

        }
      });
    },


    sendEmail: function (mailFields) {
        console.log("about to send email...");
        check([mailFields.to, mailFields.from, mailFields.subject, mailFields.text, mailFields.html], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        // Meteor.Mailgun.send({
        //     to: mailFields.to,
        //     from: mailFields.from,
        //     subject: mailFields.subject,
        //     text: mailFields.text,
        //     html: mailFields.html
        // });
        Email.send({
          from: mailFields.from,
          to: mailFields.to,
          subject: mailFields.subject,
          text: mailFields.text,
          html: mailFields.html,
          cc: "jonas@7bi.me",

          // from: "sender@somewhere.net",
          // to: "receiver@elsewhere.io",
          // bcc: "lurker@somewhere.io",
          // replyTo: "public@somewhere.net",
          // subject: "Hello Email",
          // text: "lorem ispum...",
          // html: "",
          // headers: "",
        });
        // swal("confirm","Reportado com sucesso","success");
        console.log("email sent!");
        return true;
    }
  });

Meteor.startup(function(){
  process.env.MAIL_URL="smtp://guniorum%40gmail.com:4abc1234@smtp.gmail.com:465/";
  // Meteor.Mailgun.config({
  //   username: 'gunior.um%40gmail.com',
  //   password: '4abc1234'
  // });
});

ServiceConfiguration.configurations.remove({
  service: "facebook"
});

//server
ServiceConfiguration.configurations.insert({
  service: "facebook",
  appId: "1941888002712736",
  loginStyle: "popup",
  secret: "8d63fc8c0a302fb4cfb92f8d8a128ba2"
});

//localhost
// ServiceConfiguration.configurations.insert({
//   service: "facebook",
//   appId: "215555798925174",
//   loginStyle: "popup",
//   secret: "97ab86d2e504caa9ac3c5d4ba6f39ed3"
// });

ServiceConfiguration.configurations.upsert({
  service: 'pinterest'
}, {
  service: 'pinterest',
  scope: 'read_public', // optional
  clientId: '4894646559102219077',
  secret: 'e4776914338e17bd3a31e7d3fc4253befc3890fe59a98a4eff612ad3ac9c68bc'
});


var getFacebookProfile = function(accessToken) { // make async call to grab the picture from facebook
    var result;
    result = Meteor.http.get("https://graph.facebook.com/me", {
      params: {
        access_token: accessToken,
        // fields: 'picture',
        fields: 'id, name, first_name, last_name, email, link, gender, picture',
        // type: large
      }
    });
    if(result.error) {
      throw result.error;
    }
    // console.log("getFbPicture:", result.data.picture.data);
    return result.data; // return the picture's url
  };

// during new account creation get user picture from Facebook and save it on user object
// Accounts.onCreateUser(function(options, user) {
//
// });

Accounts.onCreateUser(function(options, user) {
  console.log(options.profile);
  if(options.profile) {
    // options.profile.name;

    options.profile.firstName="";
    options.profile.lastName="";


    if (user.services.facebook) {
      var fbUser = getFacebookProfile(user.services.facebook.accessToken);
      // console.log(fbUser);
      // options.profile.name = fbUser.name;
      options.profile.lastName = fbUser.last_name;
      options.profile.firstName = fbUser.first_name;
      // options.profile.useFacebook = true;
      // options.profile.fbPicture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";

      console.log("\n\n[if]options.profile --\n ",options.profile);
    }

    // if (user.services.) {

    // }


  }

  console.log("\n\n[after if]options.profile --\n ",options.profile);

  user.profile = options.profile;
  return user;


});
