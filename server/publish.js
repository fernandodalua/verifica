
Meteor.publish('user', function () {
  return Meteor.users.find({});

  // Meteor.users.find({}, {fields: {portfolio:1 ,following:1, profile: 1, roles: 1, followers:1}});
});


Meteor.publish("posts", function () {
 return Posts.find();
});

Meteor.publish('tributos', function(){
  return Tributos.find();
});


Tributos.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});


Meteor.publish('notas', function(){
  return Notas.find();
});


Notas.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});


Meteor.publish('clients', function(){
  return Clientes.find();
});


Clientes.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Meteor.publish('products', function(){
  return Produtos.find();
});


Produtos.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Meteor.publish('fretes', function(){
  return Fretes.find();
});


Fretes.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Meteor.publish('transportadores', function(){
  return Transportadores.find();
});


Transportadores.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});


Meteor.publish('images', function(){
  return Images.find();
});

Images.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  },

});

Meteor.publish('certificados', function(){
  return Certificados.find();
});

Certificados.allow({
  'insert': function(){
    return true;
  },

});


Meteor.publish('orders', function(){
  return Pedidos.find();
});


Pedidos.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
