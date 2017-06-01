Template.addProductModal.events({
  "click #saveBtn": function(event, template){

    $("#addProductForm").submit();
    $("#myModal").modal("hide");
  },
  // "click #addClientBtn": function(event, template){
  //   $("#addClientModal").modal('show');
  // },
});


Template.productsTable.helpers({
  getProducts: function(){
    console.log(Produtos.find({}).fetch());
    return Produtos.list();
  },

  settings: function () {
    return {
      collection: Produtos,
      rowsPerPage: 10,
      showFilter: true,
      showRowCount: true,
      showColumnToggles: true,
      fields: [
        {
          key: 'edit',
          label: 'Edit',
          tmpl: Template.editItem
          // fn: function (value,object,key) {
          //   console.log(value,object,key);
          //   return new Spacebars.SafeString("");
          // }

        },
        { key: 'codigo', label: 'Código' , cellClass: 'col-md-4'},
        { key: 'nome', label: 'Produto' , cellClass: 'col-md-4'},
        { key: 'ncm', label: 'NCM' , cellClass: 'col-md-4'},
        { key: 'unidade', label: 'Unidade' , cellClass: 'col-md-4'},
        { key: 'valor', label: 'Valor' , cellClass: 'col-md-4'},
        { key: 'ean', label: 'EAN' , cellClass: 'col-md-4'},
        { key: 'eantributavel', label: 'EAN Tributável' , cellClass: 'col-md-4'},
        { key: 'unidadetributavel', label: 'Uni. Tributável' , cellClass: 'col-md-4'},
        { key: 'valortributavel', label: 'Valor Tributável' , cellClass: 'col-md-4'},
      ]
    };
  }

});

Template.editItem.events({
  "click #removeItemBtn": function(event, template){
     console.log("\n\nRemoveItem: ",this,template);


     switch (Router.current().route.path()) {
       case "/products":
       Produtos.remove({_id:this._id});

       Meteor.users.update({_id:Meteor.userId()}, {$pull:{
         produtos:this._id
       }});

       break;

       case "/clients":
       Meteor.users.update({_id:Meteor.userId()}, {$pull:{
         clientes:this._id
       }});
       Clientes.remove({_id:this._id});

       break;

     }

  },

  "click #editItemBtn": function(event, template){
     console.log("\n\nRemoveItem: ",this,template);


     switch (Router.current().route.path()) {
       case "/products":
        Router.go("/editProduct/"+this._id);

       break;

       case "/clients":
        Router.go("/editClient/"+this._id);

       break;

     }


  }
});

Template.editProductTemplate.events({
  "click #saveBtn": function(event, template){
    Router.go("products");
  },
  // "click #addClientBtn": function(event, template){
  //   $("#addClientModal").modal('show');
  // },
});


Template.editProductTemplate.helpers({

  getProducts: function(){
    // console.log(Clientes.find({}).fetch());
    return Produtos.list();
  },

  getUser: function(){
    console.log("produtos getUser",this);
  }

});
