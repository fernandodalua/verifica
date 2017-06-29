Transportadores = new Mongo.Collection('transportadores');


Transportadores.list = function(){
  var user = Meteor.users.findOne({_id:Meteor.userId()});
  return Transportadores.find({});

  // return this.find({_id:{"$in":user.orders}});
};
