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

  getPost: function(postQuery){
    console.log("\n\n\n\n-- -- -- -- getPost -- -- -- -- ");

    // var notaID = Meteor.user().profile.pedidos;
    // console.log("notaID: ", notaID);
    // var nota = Notas.findOne({_id:"gvttN9LAXqrP9Rs4A"});

    // var cliente = Clientes.findOne({_id:nota.client});

    // console.log("cliente : \n",cliente);
    // nota.client = cliente;
    // var nota = Session.get("notaID");
    // var nota = new Object({
    //
    // });
    // var nota = Session.get("nfe");
    // console.log("nota : \n",nota);
    console.log("postQuery: ",postQuery);
    // var myData = new Object(postQuery[0]);
    // console.log("myData: ",myData);




    // nota
    //  if(nota){
    //     // var myNota = Pedidos.find({_id:nota}).fetch();
    //     console.log("\nnota: ",nota);
    //  }
    //  else{ console.log("nota vazia");
    //  }



  // Meteor.http.get( 'http://177.35.44.10/verifica/nfe.php'+postQuery,
  Meteor.http.get('http://177.35.44.10/verifica/nfe.php',{params:{postQuery}},
   function( error, response ) {
    if ( error ) {
      console.log("\n\nhttp error:", error,'\nquery: ' );

    } else {
      console.log("\n\nhttp response:", response,'\nquery: ' );
      // Session.set("httpResponse",response);


    }
  });



  // swal("confirm","response:",results);

    // postQuery.JSON.stringify(obj);

    // console.log("query -- ",query);

    // var resposta = HTTP.call('POST','http://localhost/verifica/nfe.php', {
    //   data: { 'a':'json' }
    // }, (error, result) => {
    //   if (!error) {
    //     // Session.set('twizzled', true);
    //     console.log("return result-- ",result);
    //     return result;
    //   }
    // });
    // var resposta = HTTP.get( 'http://localhost/verifica/nfe.php'+postQuery );

    //  console.log(resposta);

      // return resposta.data;

},


});
