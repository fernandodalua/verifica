Template.findTransportTable.helpers({
  getProducts: function() {
    console.log(Produtos.find({}).fetch());
    return Produtos.list();
  },

  getTransportadores: function() {

    return Transportadores.find({});

  },


  settings: function() {
    return {
      collection: Transportadores,
      rowsPerPage: 10,
      showFilter: true,
      showRowCount: true,
      showColumnToggles: true,
      fields: [


        {
          key: 'transportador.nome',
          label: 'Nome',
          cellClass: 'col-md-4'
        },
        {
          key: 'transportador.documento',
          label: 'Documento',
          // hidden: true
        },
        {
          key: 'transportador.inscricaoestadual',
          label: 'Inscrição Estadual',
          // hidden: true
        },
        {
          key: 'transportador.isentoicms',
          label: 'Isento ICMS',
          // hidden: true
        },
        {
          key: 'transportador.endereco.logradouro',
          label: 'Logradouro',
          // hidden: true
        },
        {
          key: 'transportador.endereco.uf',
          label: 'UF',
          // hidden: true
        },
        {
          key: 'transportador.endereco.municipio',
          label: 'Município',
          // hidden: true
        },

      ]
    };
  }

});

Template.findTransportTable.events({
  'click .reactive-table tbody tr': function(event) {
    // set the blog post we'll display details and news for
    // console.log(this);
    var transportador = this;
    // console.log('post: ', transportador);
    Session.set("transportadorNota", transportador);



    $("#transpModal").modal("hide");


  }
});


Template.transporteModal.onCreated(function () {
  Session.set("transportadorNota", null);
  // selectedProducts.remove({});



});


Template.transporteModal.helpers({
  getTransportador: function(){
    var transp = Session.get("transportadorNota");
    // Session.set("transportadorNota", null);
    if (transp) {
      console.log("transp: ",transp);
      return transp.transportador.nome;

    } else {
      return null;
    }


  }

});
