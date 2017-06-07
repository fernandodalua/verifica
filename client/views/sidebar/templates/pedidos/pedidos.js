Template.showOrders.helpers({

  getOrders: function(){
    var user = Meteor.users.findOne({_id:Meteor.userId()});
    console.log("\n\n\n-- -- --\ngetOrders:\n",Pedidos.find().fetch());
    return Pedidos.find({},{sort:{createdAt:-1}});
    // return Pedidos.find({_id:{"$in": user.orders }})
  },

  getProducts: function(){
    console.log("\n\n -- showOrders --\ngetProducts this:\n",this);

    return this.products;

  },
  getClient: function(){
    console.log("\n\n -- showOrders --\ngetProducts this:\n",this);

    return Clientes.findOne({_id:this.client});
    ;

  }


});


Template.orderOpen.helpers({


  getProducts: function(){
    console.log("\n\n -- showOrders --\ngetProducts this:\n",this);

    return this.products;

  },
  getClient: function(){
    console.log("\n\n -- showOrders --\ngetProducts this:\n",this);

    return Clientes.findOne({_id:this.client});
    ;

  },


});

Template.orderOpen.events({
  "click #removeOrder": function(event, template){
     Pedidos.remove({_id:this._id});
    console.log("\n\n--remove--\n",this._id);
  }
});

Template.orderFinalized.helpers({

  getProducts: function(){
    console.log("\n\n -- showOrders --\ngetProducts this:\n",this);

    return this.products;

  },
  getClient: function(){
    console.log("\n\n -- showOrders --\ngetProducts this:\n",this);

    return Clientes.findOne({_id:this.client});
    ;

  }


});