Notas = new Mongo.Collection('notas');


Notas.list = function(){
  var user = Meteor.users.findOne({_id:Meteor.userId()});
  return Notas.find({});

  // return this.find({_id:{"$in":user.orders}});
};
