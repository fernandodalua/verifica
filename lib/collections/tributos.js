Tributos = new Mongo.Collection('tributos');


Tributos.list = function(){
  var user = Meteor.users.findOne({_id:Meteor.userId()});

  return Tributos.find({});

  // return this.find({_id:{"$in":user.orders}});
};
