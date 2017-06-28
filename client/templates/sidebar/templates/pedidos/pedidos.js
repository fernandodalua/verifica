
Template.showOrders.onCreated(function() {
  Session.setDefault('showOpenFilter', true);
  Session.setDefault('showFinalizedFilter', false);

});
// Edit: It appears that this is deprecated
// Template.check.isTrue = function() { Session.get('key'); };

// Use 'helpers' instead


Template.orderFilter.events({
  'change #open': function() {
    // Also, no need for the pound sign here
    if (document.getElementById('open').checked)
      Session.set('showOpenFilter', true);
    else
      Session.set('showOpenFilter', false);
    },
    'change #finalized': function() {
      // Also, no need for the pound sign here
      if (document.getElementById('finalized').checked)
        Session.set('showFinalizedFilter', true);
      else
        Session.set('showFinalizedFilter', false);
      },

});

Template.showOrders.helpers({

  showOpen: function(){
    return Session.get("showOpenFilter");
    // return true;
  },

  showFinalized: function(){
    return Session.get("showFinalizedFilter");
    // return true;

  },

  getOpenOrders: function(){
    var user = Meteor.users.findOne({_id:Meteor.userId()});


    // console.log("\n\n\n-- -- --\ngetOrders:\n",Pedidos.find().fetch());
    return Pedidos.find({_id:{"$in":user.pedidos}}, {sort:{createdAt:-1}});
    // return Pedidos.find({_id:{"$in": user.orders }})



  },
  getFinalizedOrders: function(){
    var user = Meteor.users.findOne({_id:Meteor.userId()});


    // console.log("\n\n\n-- -- --\ngetOrders:\n",Pedidos.find().fetch());
    return Pedidos.find({status:false}, {sort:{createdAt:-1}});
    // return Pedidos.find({_id:{"$in": user.orders }})



  },

  getProducts: function(){
    // console.log("\n\n -- showOrders --\ngetProducts this:\n",this);

    return this.products;

  },
  getClient: function(){
    // console.log("\n\n -- showOrders --\ngetProducts this:\n",this);

    return Clientes.findOne({_id:this.client});
    ;

  }


});


Template.showOpenOrders.helpers({

  getOrders: function(){
    var user = Meteor.users.findOne({_id:Meteor.userId()});
    // console.log("\n\n\n-- -- --\ngetOrders:\n",Pedidos.find().fetch());
    return Pedidos.find({_id:{"$in":user.pedidos }},{sort:{createdAt:-1}});

    // return Pedidos.find({_id:{"$in": user.orders }})
  },

  getProducts: function(){
    // console.log("\n\n -- showOrders --\ngetProducts this:\n",this);

    return this.products;

  },
  getClient: function(){
    // console.log("\n\n -- showOrders --\ngetProducts this:\n",this);

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

  getTotal: function() {
    // console.log("\n\n -- gettotall --- -- -- -\n",this.products);

    var total = 0;

    this.products.map(function(doc) {
      total += doc.subtotal;
    });

    total = total.toFixed(2);

    // log("\n\n\n--------oioioio-----------\n\n",total.split("."));
    // total[total.length()-2] = ',';
    // alert(total.replaceAt(2,"!!"));
    // console.log(String(total).(2,"@@"));

    return String(total);


  },

  getProducts: function(){
    // console.log("\n\n -- showOrders --\ngetProducts this:\n",this);

    return this.products;

  },
  getClient: function(){
    // console.log("\n\n -- showOrders --\ngetProducts this:\n",this);

    return Clientes.findOne({_id:this.client});
    ;

  },


});

Template.orderOpen.events({
  "click #removeOrder": function(event, template){
     Pedidos.remove({_id:this._id});
     Meteor.users.update({_id:Meteor.userId()},{$pull:{
       pedidos:this._id
     }});

    console.log("\n\n--remove--\n",this._id);
  },
  "click #checkOrderBtn": function(event, template){
    console.log(this);
    Pedidos.update({_id:this._id},{$set:{
      status: false
    }});
    Meteor.users.update({_id:Meteor.userId()}, {$pull:{
      pedidos:this._id
    }});


  },
});

Template.orderFinalized.helpers({
  getTotal: function() {
    // console.log("\n\n -- gettotall --- -- -- -\n",this.products);

    var total = 0;
    this.products.map(function(doc) {
      total += doc.subtotal;
    });

    return total.toFixed(2);


  },

  getProducts: function(){
    // console.log("\n\n -- showOrders --\ngetProducts this:\n",this);

    return this.products;

  },
  getClient: function(){
    // console.log("\n\n -- showOrders --\ngetProducts this:\n",this);

    return Clientes.findOne({_id:this.client});
    ;

  }


});

Template.orderFinalized.events({
  "click #removeOrder": function(event, template){
     Pedidos.remove({_id:this._id});
     Meteor.users.update({_id:Meteor.userId()},{$pull:{
       pedidos:this._id
     }});

    console.log("\n\n--remove--\n",this._id);
  },
});
