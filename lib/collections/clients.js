Clientes = new Mongo.Collection('clients');

Clientes.list = function(){
  var user = Meteor.users.findOne({_id:Meteor.userId()});

  return this.find({_id:{"$in":user.clientes}});
};
