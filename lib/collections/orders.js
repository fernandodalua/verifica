Pedidos = new Mongo.Collection('orders');


Pedidos.list = function(){
  var user = Meteor.users.findOne({_id:Meteor.userId()});

  return this.find({_id:{"$in":user.orders}});
};
