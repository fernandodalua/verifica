Template.clientsTemplate.helpers({
  rendered: function(){
    $("#clientForm").addClass("col-md-3");

  },

  addClass: function(){
    $("#clientForm").addClass("col-md-3");
  }

});



Template.addClientModal.events({
  "click #saveBtn": function(event, template){

    $("#addClientForm").submit();
    $("#myModal").modal("hide");
  },
  // "click #addClientBtn": function(event, template){
  //   $("#addClientModal").modal('show');
  // },
});


Template.editClientTemplate.events({
  "click #saveBtn": function(event, template){
    Router.go("clients");
  },
  // "click #addClientBtn": function(event, template){
  //   $("#addClientModal").modal('show');
  // },
});


Template.editClientTemplate.helpers({

  getClientes: function(){
    // console.log(Clientes.find({}).fetch());
    return Clientes.list();
  },

  getUser: function(){
    console.log("getUser",this);
  }

});



Template.clientTable.helpers({
  getClientes: function(){
    console.log(Clientes.find({}).fetch());
    return Clientes.list();
  },

  settings: function () {
    return {
      collection: Clientes,
      rowsPerPage: 3,
      showFilter: true,
      showRowCount: true,
      showColumnToggles: true,
      fields: [
        {
          key: 'edit',
          label: 'Edit',
          tmpl: Template.editItem,

        },
        { key: 'nome', label: 'Empresa' , cellClass: 'col-md-4'},
        { key: 'cnpj', label: 'CNPJ/CPF' , cellClass: 'col-md-4'},
        { key: 'inscricaoestadual', label: 'Inscrição Estadual' , cellClass: 'col-md-4'},
        { key: 'telefone', label: 'Telefone' , cellClass: 'col-md-4'},
        { key: 'cep', label: 'CEP' , cellClass: 'col-md-4'},
        { key: 'endereco', label: 'Endereço' , cellClass: 'col-md-4'},
        { key: 'municipio', label: 'Município' , cellClass: 'col-md-4'},
        { key: 'bairro', label: 'Bairro' , cellClass: 'col-md-4'},
        { key: 'uf', label: 'UF' , cellClass: 'col-md-4'},
        { key: 'createdAt', label: 'Data de criação' , cellClass: 'col-md-4'}
      ]
    };
  }

});
