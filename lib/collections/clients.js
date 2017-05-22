Clientes = new Mongo.Collection('clients');


Clientes.list = function(){
  return this.find({},{sort:{"createdAt":-1}});
};
