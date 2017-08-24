// import { EJSON } from 'meteor/ejson'


const selectedProducts = new Mongo.Collection(null);

Template.emitirTemplate.onCreated(function () {
  Session.set("clientNota", null);
  selectedProducts.remove({});



});



Template.emitirTemplate.helpers({
  getTotal: function() {
    var total = selectedProducts.find({}).sum('subtotal');
    return "R$"+String(total.toFixed(2));

  },

  getRespostaNFE: function() {
    var resp = Session.get("nfeResposta");

    console.log("\n\n -- \n\n-- \n\n-- resp, ", resp);
    if (resp) {
      return resp.content;
    } else {
      return null;
    }


  },


});

Template.emitirTemplate.events({
  "click #saveNFE": function(event, template){

    var cliente = Session.get("clientNota");
    var transportador = Session.get("transportadorNota");
    var produtos = selectedProducts.find().fetch();

    console.log("\n\n-- -- -- -- -- -- Emitindo nota -- -- -- -- -- -- ");
    console.log("client: ",cliente);
    console.log("transportador: ",transportador);
    console.log("sProducts: ",produtos);

    var user = Meteor.user();

    var emitente = new Object({
      nome: user.profile.nome,
      cnpj: user.profile.cnpj,
      razaosocial: user.profile.razaosocial,
      nomefantasia: user.profile.nomefantasia,
      inscricaoestadual: user.profile.inscricaoestadual,
      inscricaomunicipal: user.profile.inscricaomunicipal,
      cnae: user.profile.cnae,
      crt: user.profile.crt
    });

    var nota = new Object({
      emitente: emitente,
      cliente: cliente,
      transportador: transportador,
      produtos: produtos
    });

    var notaID = Notas.insert(nota);
    nota._id = notaID;
    console.log("nota: ",nota);


    Meteor.call('swSaveNFE', nota, function(error, result){
      if (error) {
        console.log("erro: \n", error);
      } else {
        // console.log("resposta: \n\n",result);
        Session.set("nfeResposta", result);


      }
    });
    // var respostaCall =
    // console.log(respostaCall);
    // swal("success",respostaCall);

//
//
//
//
//     // var produtos = [];
//     // var i =0
//     // var somatotal = selectedProducts.find({}).sum('subtotal');
//
//     // console.log(selectedprodutos.length);
//     // for(i=0; i < sProducts.length;i++){
//     //   // produtos[i] = sProducts[i];
//     //   // produtos.push({
//     //   var produto = new Object({
//     //     item: i,
//     //     codigo: sProducts[i].codigo,
//     //     nome: sProducts[i].nome,
//     //     ean: sProducts[i].ean,
//     //     ncm: sProducts[i].ncm,
//     //     unidade: sProducts[i].unidade,
//     //     quantidade: sProducts[i].quantidade,
//     //     valor: sProducts[i].valor,
//     //     subtotal: sProducts[i].subtotal,
//     //     // total: somatotal,
//     //     unidadetributavel: sProducts[i].unidadetributavel,
//     //     valortributavel: sProducts[i].valortributavel,
//     //     eantributavel: sProducts[i].eantributavel,
//     //   });
//     //
//     //   produtos[i]=produto;
//     //
//     //
//     //   console.log("for i: ",i);
//     //   // vproduto="produto"+i;
//     //   // console.log("for vproduto: ",vproduto);
//     //
//     //
//     //   console.log("for produtos",produtos);
//     // }
//
//     // console.log("-- -- produtos: ", produtos);
//
//     var order = new Object({
//       client: cliente,
//       transport: transportador,
//       products: produtos,
//       status: true
//     });
//     console.log("order: ",order);
//
//     // console.log("\nproducts:\n",client._id);
//     // console.log("\nproducts:\n",products.fetch());
//
//      var myOrderId = Notas.insert({
//        client: order.client,
//        products: order.products,
//        status: order.status
//      });
//
//      var nota = Notas.findOne({_id:myOrderId});
//
//     //  Session.set("notaID",nota);
//
//      console.log("\n -- -- nota -- --\n  ",nota);
//
//     //  var cnpj = user.profile.cnpj;
//     //  var cert = "a";
//
//
//
//     nota.emitente = emitente;
//     nota.transportador = transportador;
//     console.log("-- nota final -- ",nota);
//      //
//     //  if(cert == null){
//     //    cert = Meteor.user().profile.certificado;
//      //
//     //  }
//
//      // var num2 = $("#n2").val();
//
//      //?nome=&cnpj=19546609000199&arquivo=&senha=
//       // var query = "?nome=&cnpj="+cnpj+"&arquivo="+cert+"&senha="+user.profile.senhacertificado;
//       //  var query = "?a=gay";
//
//
//
//
//     //  console.log("\n\n -- -- resposta -- --\n"+resposta);
//
//     // var response = Meteor.call('getPost',query);
//     Meteor.call('swSaveNFE',nota, function(error, result){
//       // var response = Session.get("httpResponse");
//       // swal("confirm","resposta:",result.data);
//       console.log("call result\n ",result);
//       // console.log("call response - ",response);
//     });
//
// // console.log("-- response:\n",response);
//     //  Meteor.call('getPost', function(error, result){
//     //   //  Session.set('responsePost', result);
//     //    console.log("Result",result);
//      //
//     //  });
//
//     // Meteor.call('getPost',nota, function(error, result){
//     //   // swal("confirm","result",result);
//     //   // console.log(result);
//     //
//     // });
//
//      Meteor.users.update({_id:Meteor.userId()}, {$push:{
//        pedidos:myOrderId
//      }});


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
    // console.log("\n\n\n\nvalor",this);
    var val = this.valor;

    return "R$"+String(val.toFixed(2));
    // let sutotal =  elem.valor*elem.quantidade;
    // return subtotal;
  },
  getSubtotal: function(){
    // console.log("\n\n\n\nsubtotal",this);
    var stotal = this.quantidade*this.valor

    return "R$"+String(stotal.toFixed(2));
    // let sutotal =  elem.valor*elem.quantidade;
    // return subtotal;
  }


});

Template.showSelectecProducts.events({
  'click #removeProduct': function(event) {
    var prod = this;

    swal({
      title: 'Tem certeza?',
      text: "Apagar este produto da minha lista!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
       confirmButtonText: 'Sim!',
      closeOnConfirm: false
    },
    function(){
      selectedProducts.remove(prod);
      swal(
          'Deletado com sucesso!',
          'O produto foi removido da lista.',
          'success'
        )
    });

    // swal({
    //   title: 'Tem certeza?',
    //   text: "Apagar este produto da minha lista!",
    //   type: 'warning',
    //   showCancelButton: true,
    //   closeOnConfirm: false,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Sim!'
    // }).then(function () {
    //
    //   // swal(
    //   //   'Deletado com sucesso!',
    //   //   'O produto foi removido da lista.',
    //   //   'success'
    //   // )
    // });


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
    Session.set("currentProduct",this);
  },

  'dblclick .reactive-table tbody tr': function(event) {
    console.log("click table row -- ", this);

    var prod = this;

    var findProd = selectedProducts.findOne({_id:prod._id});

    //Se o produto já está na lista
    if(findProd){
      console.log("   if(findProd) - ", findProd);

      prod.quantidade = findProd.quantidade+1;
      // findProd.quantidade=qnt+1;
      prod.subtotal = parseFloat((prod.valor*prod.quantidade).toPrecision(3));

      selectedProducts.update({_id:findProd._id}, {$set:{
        quantidade: prod.quantidade,
        subtotal : prod.subtotal
      }});


    } else{
      console.log("else");

      prod.quantidade=1;
      prod.subtotal = parseFloat((prod.valor*prod.quantidade).toPrecision(3));
      selectedProducts.insert(prod);


    }


      // console.log(prod);

       $("#findProductModal").modal('show');
       $("#qtdProdModal").modal('hide');




    // set the blog post we'll display details and news for
    var product = this;

    console.log('findProduct: ', product);
    if(this.quantidade){
      this.quantidade=this.quantidade+1;
    }
    else{
      this.quantidade = 1;
    }


    // selectedProducts.insert(this)

    // $("#productLabel").text(product.nome);
    // Session.set("productsNota", product);
    //
  },






});

Template.qntProduto.events({
  "change #qtdProdCellInput": function(event, template){
    console.log("\n -- -- --\nchange to:", this);
    var val = $("#qtdProdCellInput").val();
    console.log("val: ", val);


  },

  "click #qtdProdCellModal": function(event, template){
    $("#findProductModal").modal("hide");
    console.log("\n -- -- --\nmodal -- ", this);
    // var qntProd = $("#qntProdInput").val();
    // console.log(qntProd);
    var prod = Session.get("currentProduct");
    // console.log("prod: ",prod);


    swal({
      title: "Quantidade",
      text: "de "+prod.nome,
      type: "input",
      // input: "number",
      showCancelButton: true,
      closeOnConfirm: true,
      animation: "slide-from-top",
      inputPlaceholder: "Write something"
    },
    function(inputValue){
      if (inputValue === false) return false;

      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false
      }
      console.log("\n\n--- --- --- -- -- swal -- -- -- -- --");
      var cProd = selectedProducts.findOne({_id:prod._id});

      var newQtd = parseInt(inputValue);

      if(cProd){
        console.log("if cProd: ",cProd);

        console.log("newQtd: ", newQtd);


        selectedProducts.update({_id:cProd._id}, {$set:{
          quantidade: newQtd
        }});
      } else {
        console.log("else prod: ",prod);

        // prod.quantidade = new Number(inputValue);
        prod.quantidade = parseInt(inputValue);
        prod.subtotal = parseFloat((prod.valor*prod.quantidade).toPrecision(3));

        // console.log("prod after: ", prod);

        selectedProducts.insert(prod);


        }

      // var newQtd = parseFloat(inputValue).toPrecision(3);

      console.log("produttooooo00000-----",selectedProducts.findOne({_id:prod._id}));

      $("#findProductModal").modal("show");
      // $("#qtdProdModal").modal("show");


      // swal("Nice!", "You wrote: " + inputValue, "success");
    });

    // var val = $("#qtdProdCellInput").val();
    // console.log("val: ", val);


  },

  "click #closeBtn": function(event, template){
    $("#qtdProdModal").modal("hide");

  },

  "click #saveQnt": function(event, template){
    // var prod = Session.get("addingProd");
    console.log("\nsave -- ",this);
    var qntProd = $("#qntProdInput").val();
    console.log(qntProd);

    // var stotal = parseFloat((prod.valor*qntProd).toPrecision(3));
    // Session.set("addingProd",null);
    //  console.log(prod);

    //  selectedProducts.insert(prod);

    //  selectedProducts.update({_id:prod._id}, {$set:{
    //    quantidade: qntProd,
    //    subtotal: stotal
    //  }});

    //  console.log(
    //    selectedProducts.find({_id:prod._id}).fetch()
    //  );


    //  $("#findProductModal").modal('show');
     $("#qtdProdModal").modal('hide');

  }
});

Template.qntProduto.helpers({
  getCurrentProd: function(){
    // console.log("getProduct -- -- ",this);
    var prod = Session.get("currentProduct");

    if (prod) {
      return prod;

    } else {
      return null;

    }

  },


  getQuantidade: function(){
    // console.log("\nprod qnt -- ",this);
    // var row = this;
    var findProd = selectedProducts.findOne({_id:this._id});

    if(findProd){
      console.log("[getQuantidade] if findProd -- ", findProd);
      return findProd.quantidade;
    } else {
      console.log("else", findProd);
      return "0";
    }


  //   var prod = this;
  //   if(!prod.quantidade){
  //     prod.quantidade = 10;
  //   } else{
  //
  //   // console.log("prod antes: ",prod);
  //   // prod.quantidade = 10;
  //   // console.log("prod depois: ",prod);
  //
  // }
    return this.quantidade;
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
      fields: [
        {
          key: 'codigo',
          label: 'Código',
          cellClass: 'col-md-2'
        },
        {
          key: 'nome',
          label: 'Produto',
          cellClass: 'col-md-6'
        },
        {
          key: 'unidade',
          label: 'Unidade',
          cellClass: 'col-md-1',

        },
        {
          key: 'valor',
          label: 'Valor',
          cellClass: 'col-md-2',

        },
        {
          key: 'add',
          label: "Qtd",
          cellClass: 'col-md-1',
          tmpl: Template.qntProduto,
        },
        {
          key: 'ncm',
          label: 'NCM',
          cellClass: 'col-md-4',
          hidden: true
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

      ]
    };
  }

});
