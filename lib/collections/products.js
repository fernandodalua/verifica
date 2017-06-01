Produtos = new Mongo.Collection('products');


Produtos.list = function(){
  var user = Meteor.users.findOne({_id:Meteor.userId()});

  return this.find({_id:{"$in":user.produtos}});
};
