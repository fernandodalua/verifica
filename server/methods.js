import { EJSON } from 'meteor/ejson'


Meteor.methods({
  /* numActivity: limits number of recent activity */
  getRecentActivity: function(numActivity) {
    var recentActivity = [];


    /* Get recent created users */
    var recentCreated = Meteor.users.find({}, {sort: {createdAt: -1}, limit: numActivity}).fetch();
    for (var i = 0; i < recentCreated.length; i++) {
      recentActivity.push({type:"created",
      userId: recentCreated[i]._id,
      firstName:recentCreated[i].profile.firstName,
      lastName:recentCreated[i].profile.lastName,
      date:recentCreated[i].createdAt});
    }

    /* Get recent updated users */
    var recentUpdated = Meteor.users.find({}, {sort: {updatedAt: -1}, limit: numActivity}).fetch();
    for (var i = 0; i < recentUpdated.length; i++) {
      recentActivity.push({type:"updated",
      userId: recentUpdated[i]._id,
      firstName:recentUpdated[i].profile.firstName,
      lastName:recentUpdated[i].profile.lastName,
      date:recentUpdated[i].updatedAt});
    }

    /* Get recent updated users */
    // var recentPost = Meteor.users.posts.find({}, {sort: {createdAt: -1}, limit: numActivity}).fetch();
    // for (var i = 0; i < recentUpdated.length; i++) {
    //   recentActivity.push({type:"newPost",
    //   userId: recentUpdated[i]._id,
    //   firstName:recentUpdated[i].profile.firstName,
    //   lastName:recentUpdated[i].profile.lastName,
    //   date:recentUpdated[i].updatedAt});
    // }

    /* Sort by decreasing date */
    recentActivity.sort(function(a, b) {
      return  a.date < b.date;
    });

    return recentActivity.slice(0, numActivity);
  },

  getRecentPosts: function(numPosts) {

    /* Get recent updated posts */
    return Posts.find({}, {sort: {update: -1}, limit: numPosts}).fetch();

  },

  nextStep: function(selectedUserId, stepName){
    console.log("u ", selectedUserId," s ", stepName);
    var profileStep = Meteor.users.findOne({ _id: selectedUserId }).profile.profileStep;


    Meteor.users.update(Meteor.userId(), { $set: {"profile.profileStep": stepName} });
    console.log("From ",profileStep," to ",stepName);
    return stepName;
  },

  userPost: function(post){
    postFound = Posts.findOne({_id:post._id});
    if (postFound && postFound.authorId != Meteor.userId()) {
      console.log("Cannot edit this document, current user ins't the author");
      return;
    }

    postId = post._id;
    delete post._id;
    var returned = Posts.upsert( postId, { $set: post } );

    if (returned.insertedId){
      console.log("Post ", returned.insertedId, " created by", Meteor.userId());
      return returned.insertedId;
    }
    else{
      console.log("Post ", postId, " updated by", Meteor.userId());
      return postId;
    }
  },

  checkTwitter: function(userId) {
    check(userId, String);
    this.unblock();
    try {
      const result = HTTP.call('GET', 'http://api.twitter.com/xyz', {
        params: { user: userId }
      });
      return true;
    } catch (e) {
      // Got a network error, timeout, or HTTP error in the 400 or 500 range.
      return false;
    }
  },

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


});
