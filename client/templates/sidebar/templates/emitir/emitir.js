
const selectedProducts = new Mongo.Collection(null);

Template.issueTemplate.onCreated(function () {
  Session.set("clientNota", null);
  selectedProducts.remove({});




});



Template.issueTemplate.helpers({
  getTotal: function() {
    var total = selectedProducts.find({}).sum('subtotal');
    return "R$"+String(total.toFixed(2));

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

     var myOrderId = Pedidos.insert({
       client: order.client,
       products: order.products,
       status: order.status
     });

     var nota = Pedidos.find({_id:myOrderId}).fetch();

    //  Session.set("notaID",nota);

     console.log(nota);



     var user = Meteor.user();
     var cnpj = user.profile.cnpj;
     var cert = "a";
     //
    //  if(cert == null){
    //    cert = Meteor.user().profile.certificado;
     //
    //  }

     // var num2 = $("#n2").val();

     //?nome=&cnpj=19546609000199&arquivo=&senha=
      // var query = "?nome=&cnpj="+cnpj+"&arquivo="+cert+"&senha="+user.profile.senhacertificado;
       var query = "?a=gay";




    //  console.log("\n\n -- -- resposta -- --\n"+resposta);

    // var response = Meteor.call('getPost',query);
    Meteor.call('getPost',query,function(error, result){
      // var response = Session.get("httpResponse");
      // swal("confirm","resposta:",result.data);
      console.log("call result - ",result);
      // console.log("call response - ",response);
    });

// console.log("-- response:\n",response);
    //  Meteor.call('getPost', function(error, result){
    //   //  Session.set('responsePost', result);
    //    console.log("Result",result);
     //
    //  });

    // Meteor.call('getPost',nota, function(error, result){
    //   // swal("confirm","result",result);
    //   // console.log(result);
    //
    // });

     Meteor.users.update({_id:Meteor.userId()}, {$push:{
       pedidos:myOrderId
     }});


  }
});


Template.findClient.helpers({
  getProducts: function() {
    console.log(Produtos.find({}).fetch());
    return Produtos.list();
  },

  setClientLabel: function() {

    var client = Session.get("clientNota");
    if (client) {
      console.log(client);
      return client.nome;

    }
    else {
      return null;
    }

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

    if (client) {
      console.log("\n\n\n\nlabel", client);
      return client.nome;
    }
    else{
      return null;
    }

  },
});

Template.showSelectecProducts.helpers({
  getSelectedProducts: function() {

    return selectedProducts.find({});

    // Session.set("productsNota",undefined);

    // return products;
  },

  getValor: function(){
    console.log("\n\n\n\nvalor",this);
    var val = this.valor;

    return "R$"+String(val.toFixed(2));
    // let sutotal =  elem.valor*elem.quantidade;
    // return subtotal;
  },
  getSubtotal: function(){
    console.log("\n\n\n\nsubtotal",this);
    var stotal = this.quantidade*this.valor

    return "R$"+String(stotal.toFixed(2));
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
    var stotal = parseFloat((prod.valor*qntProd).toPrecision(3));

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
