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
          fn: function (value,object,key) {
            console.log(value,object,key);
            return new Spacebars.SafeString("<a href='/editProduct/"+object._id+"'><i class='fa fa-pencil fa-2x' aria-hidden='true'></i></a> <a href='#editClient'  data-toggle='modal'><i class='fa fa-times fa-2x' aria-hidden='true'></i></a>");
          }

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
