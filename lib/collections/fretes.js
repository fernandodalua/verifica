Fretes = new Mongo.Collection('fretes');


Fretes.list = function(){
  var user = Meteor.users.findOne({_id:Meteor.userId()});
  return Fretes.find({});

  // return this.find({_id:{"$in":user.orders}});
};
