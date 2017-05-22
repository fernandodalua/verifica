Template.clientsTemplate.helpers({
  rendered: function(){
    $("#clientForm").addClass("col-md-3");

  },

  addClass: function(){
    $("#clientForm").addClass("col-md-3");
  }

});



Template.clientsTemplate.events({
  "click #saveBtn": function(event, template){
    
  },
  // "click #addClientBtn": function(event, template){
  //   $("#addClientModal").modal('show');
  // },
});


Template.showClients.helpers({
  getClientes: function(){
    console.log(Clientes.find({}).fetch());
    return Clientes.list();
  },

});
