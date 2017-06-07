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


Template.showOpenOrders.helpers({

  getOrders: function(){
    var user = Meteor.users.findOne({_id:Meteor.userId()});
    console.log("\n\n\n-- -- --\ngetOrders:\n",Pedidos.find().fetch());
    return Pedidos.find({status:true},{sort:{createdAt:-1}});
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
  tab: function() {
    return "allOrders";
  },
  tabData: function() {
    var tab = Template.instance().currentTab.get();

    var data = {
      "allOrders": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "openOrders": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "finalizedOrders": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ]
    };

    return data[ tab ];
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
  },
  "click #checkOrder": function(event, template){
    Pedidos.update({_id:this._id}, {$set:{
      status:false
    }});

  },
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
