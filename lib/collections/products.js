Produtos = new Mongo.Collection('products');


Produtos.list = function(){
  return this.find({});
};
