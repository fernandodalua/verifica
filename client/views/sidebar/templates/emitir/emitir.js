const selectedProducts = new Mongo.Collection(null);

Template.issueTemplate.helpers({
  getTotal: function() {
    return selectedProducts.find({}).sum('subtotal');

  },


});

Template.issueTemplate.events({
  "click #saveOrder": function(event, template){
    // produto = [ID, valor, quantidade]

    var products = selectedProducts.find({});
    var client = Session.get("clientNota");
    // console.log("\n\n\n\n",client);
    // // var oClient = {
    // //   nome: client.nome,
    // //   cpf: client.cpf
    // // };
    //
    console.log("\n\nclient.nome:\n",client.nome);


    var order = new Object({
      client: client._id,
      products: products.fetch(),
      status: true
    });
    console.log("\n\n-- -- -- -- -- -- -- -- -- -- -- -- ");

    console.log("\nproducts:\n",client._id);
    console.log("\nproducts:\n",products.fetch());
    console.log("\norderClient:\n",order);

     Pedidos.insert({
       client: order.client,
       products: order.products,
       status: order.status
     });



  }
});


Template.findClient.helpers({
  getProducts: function() {
    console.log(Produtos.find({}).fetch());
    return Produtos.list();
  },

  setClientLabel: function() {
    var client = Session.get("clientNota");
    console.log(client);
    return client.nome;
  },


  settings: function() {
    return {
      collection: Clientes,
      rowsPerPage: 10,
      showFilter: true,
      showRowCount: true,
      showColumnToggles: true,
      fields: [

        {
          key: 'nome',
          label: 'Empresa',
          cellClass: 'col-md-4'
        },
        {
          key: 'cnpj',
          label: 'CNPJ',
          cellClass: 'col-md-4'
        },
        {
          key: 'telefone',
          label: 'NCM',
          cellClass: 'col-md-4'
        },
        {
          key: 'createdAt',
          label: 'Cadastrado',
          hidden: true
        },
        {
          key: 'endereco',
          label: 'Endereço',
          hidden: true
        },
        {
          key: 'bairro',
          label: 'Bairro',
          hidden: true
        },
        {
          key: 'municipio',
          label: 'Município',
          hidden: true
        },
        {
          key: 'cep',
          label: 'CEP',
          hidden: true
        },
        {
          key: 'uf',
          label: 'UF',
          hidden: true
        },
        {
          key: 'inscricaoestadual',
          label: 'Inscrição Estadual',
          hidden: true
        },
      ]
    };
  }

});

Template.findClient.events({
  'click .reactive-table tbody tr': function(event) {
    // set the blog post we'll display details and news for
    var client = this;
    console.log('post: ', client);
    Session.set("clientNota", client);
    $("#findClientModal").modal("hide");


  }
});

Template.findClientTable.helpers({


  settings: function() {
    return {
      collection: Clientes.list(),
      rowsPerPage: 10,
      showFilter: true,
      showRowCount: true,
      // showColumnToggles: true,
      fields: [{
          key: 'nome',
          label: 'Empresa'
        },
        {
          key: 'cnpj',
          label: 'CNPJ/CPF'
        },
        {
          key: 'inscricaoestadual',
          label: 'Incrição Estadual',
          cellClass: 'col-md-4',
          hidden: true
        },
        {
          key: 'telefone',
          label: 'Telefone'
        },
        {
          key: 'cep',
          label: 'CEP',
          cellClass: 'col-md-4',
          hidden: true
        },
        {
          key: 'endereco',
          label: 'Endereço',
          cellClass: 'col-md-4',
          hidden: true
        },
        {
          key: 'municipio',
          label: 'Município',
          cellClass: 'col-md-4',
          hidden: true
        },
        {
          key: 'bairro',
          label: 'Bairro',
          cellClass: 'col-md-4',
          hidden: true
        },
        {
          key: 'uf',
          label: 'UF',
          cellClass: 'col-md-4',
          hidden: true
        },
        {
          key: 'createdAt',
          label: 'Data de criação',
          cellClass: 'col-md-4',
          hidden: true
        }
      ]
    };
  }

});

Template.findProduct.helpers({
  setProductLabel: function() {
    var client = Session.get("productsNota");
    console.log("\n\n\n\nlabel", client);
    return client.nome;
  },
});

Template.showSelectecProducts.helpers({
  getSelectedProducts: function() {

    return selectedProducts.find({});

    // Session.set("productsNota",undefined);

    // return products;
  },

  getSubtotal: function(){
    console.log("\n\n\n\nsubtotal",this);
    var stotal = this.quantidade*this.valor

    // let sutotal =  elem.valor*elem.quantidade;
    // return subtotal;
  }


});

Template.showSelectecProducts.events({
  'click #removeProduct': function(event) {
    selectedProducts.remove(this);
    // console.log(this);
  },

  'click #saveQnt': function(event) {
    // selectedProducts.remove(this);
    console.log(this);

    // selectedProducts.update()

  },




});

Template.findProduct.events({
  'click .reactive-table tbody tr': function(event) {
    // set the blog post we'll display details and news for
    var product = this;
    console.log('findProduct: ', product);

    // selectedProducts.insert(this)

    // $("#productLabel").text(product.nome);
    // Session.set("productsNota", product);
    //
  },






});

Template.qntProduto.events({
  "click #saveQnt": function(event, template){
    var prod = Session.get("addingProd");
    var qntProd = $("#qntProdInput").val();
    var stotal = prod.valor*qntProd;

    Session.set("addingProd",null);
     console.log(prod);

     selectedProducts.insert(prod);

     selectedProducts.update({_id:prod._id}, {$set:{
       quantidade: qntProd,
       subtotal: stotal
     }});

     console.log(
       selectedProducts.find({_id:prod._id}).fetch()
     );


    //  $("#findProductModal").modal('show');
     $("#qtdProdModal").modal('hide');

  }
});

Template.qntProduto.events({
    'click #addProdBtn': function(event, template) {

      var prod = this;
      Session.set("addingProd",this);
      // var qntProd = $("#qntProdInput").val();

      console.log("\n\naddProd: ", this);

      // $("#findProductModal").modal('hide');
      $("#qtdProdModal").modal('show');






      // console.log("\n\naddProd: ", prod);



  }
});

Template.findProductTable.helpers({


  settingsProduct: function() {
    return {
      collection: Produtos.list(),
      rowsPerPage: 10,
      showFilter: true,
      showRowCount: true,
      // showColumnToggles: true,
      fields: [{
          key: 'codigo',
          label: 'Código',
          cellClass: 'col-md-4'
        },
        {
          key: 'nome',
          label: 'Produto',
          cellClass: 'col-md-4'
        },
        {
          key: 'ncm',
          label: 'NCM',
          cellClass: 'col-md-4',
          hidden: true
        },
        {
          key: 'unidade',
          label: 'Unidade'
        },
        {
          key: 'valor',
          label: 'Valor'
        },
        {
          key: 'ean',
          label: 'EAN',
          hidden: true
        },
        {
          key: 'eantributavel',
          label: 'EAN Tributável',
          hidden: true
        },
        {
          key: 'unidadetributavel',
          label: 'Uni. Tributável',
          hidden: true
        },
        {
          key: 'valortributavel',
          label: 'Valor Tributável',
          hidden: true
        },
        {
          key: 'add',
          label: '',
          tmpl: Template.qntProduto,
          // fn: function(value, object, key) {
          //   console.log("\n\nquantidade:", value, object, key);
          //
          //   return new Spacebars.SafeString("<input id='qntProdInput' type='Number' name='qnt' value='1'><button type='button' id='addProdBtn' class='btn btn-defaulnamet'><i class='fa fa-plus fa-2x'></i></button>");
          // }

        },
      ]
    };
  }

});
