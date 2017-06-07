
AllowedGender=["Masculino","Feminino"];
personal = "personalGroup";
phone = "phoneGroup";

allowedUnities = ["AMPOLA","BALDE","BANDEJ","BARRA","BISNAG","BLOCO","BOBINA","BOMB","CAPS","CART","CENTO","CJ","CM","CM2",
                  "CX","CX2","CX3","CX5","CX10","CX15","CX20","CX25","CX50","CX100","DISP","DUZIA","EMBAL","FARDO","FOLHA",
                  "FRASCO","GALAO","GF","GRAMAS","KG","JOGO","KIT","LATA","LITRO","M","M2","M3","MILHEI","ML","MWH","PACOTE",
                  "PALETE","PARES","PC","POTE","K","RESMA","ROLO","SACO","SACOLA","TAMBOR","TANQUE","TON","TUBO","UNID","VASIL","VIDRO"]

/******
Make secure: http://stackoverflow.com/questions/28624626/storing-per-user-data-in-meteor
******/
Schema = {};



Schema.orderSchema = new SimpleSchema({
  // [id,nome]
  client:{
    type: String,
    optional: true
  },


  //
  // clientName:{
  //     type:String,
  //     optional: true
  // },
  // produto = [ID, valor, quantidade]
  products:{
    type: [Object],
    optional:true
  },

  "products.$":{
    type: Object,
    blackbox: true
  },

  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    },
    denyUpdate: true
  },

  status:{
    //true : aberto
    //false: finalizado
    type: Boolean,
    optional: true,
    // default: "Em andamento",
  }


});

Schema.Tributos = new SimpleSchema({

  codigo:{
    type: String,
    optional: true
  },


});


Schema.Product = new SimpleSchema({

  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    },
    denyUpdate: true
  },

  codigo:{
    type: String,
    optional: true,
    autoform: {
      // group: personal,
      // afFormGroup: {
      //
      //   // 'formgroup-class':'col-lg-8'
      // }

    }
  },
  ean:{
    type: String,
    optional: true,
    autoform: {
      // group: personal,
      // afFormGroup: {
      //   // 'formgroup-class': 'col-lg-4'
      // }
    }
  },
  nome:{
    type: String,
    optional: true,
    autoform: {
      // group: personal,
      // afFormGroup: {
      //   // 'formgroup-class': 'col-lg-12'
      // }
    }
  },
  ncm:{
    type: String,
    optional: true,
    autoform: {
      // group: personal,
      // afFormGroup: {
      //
      //   // 'formgroup-class': 'col-lg-3'
      // }
    }
  },
  unidade:{
    type: String,
    optional: true,
    allowedValues: allowedUnities,
    autoform: {
      // options: allowedUnities,

      // group: personal,
      //
      // afFormGroup: {
      //   // 'formgroup-class': 'col-sm-5'
      // }
    }
  },

  valor:{
    type:Number,
    decimal: true,
    optional: true,
    autoform: {
      // group: personal,
      // afFormGroup: {
      //
      //   // 'formgroup-class': 'col-sm-3'
      // }
    }
  },

  eantributavel:{
    type: String,
    optional: true,
  },

  unidadetributavel: {
    type: String,
    optional: true,
    allowedValues: allowedUnities,
  },

  valortributavel:{
    type:Number,
    decimal: true,
    optional: true,
  },



});




Schema.Client = new SimpleSchema({

  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    },
    denyUpdate: true
  },

  nome:{
    type: String,
    optional: true,
    autoform: {
      // group: personal,
      // afFormGroup: {
      //
      //   // 'formgroup-class':'col-lg-8'
      // }

    }
  },
  cnpj:{
    type: String,
    optional: true,
    autoform: {
      // group: personal,
      // afFormGroup: {
      //   // 'formgroup-class': 'col-lg-4'
      // }
    }
  },
  endereco:{
    type: String,
    optional: true,
    autoform: {
      // group: personal,
      // afFormGroup: {
      //   // 'formgroup-class': 'col-lg-12'
      // }
    }
  },
  bairro:{
    type: String,
    optional: true,
    autoform: {
      // group: personal,
      // afFormGroup: {
      //
      //   // 'formgroup-class': 'col-lg-3'
      // }
    }
  },
  cep:{
    type: String,
    optional: true,
    autoform: {
      // group: personal,
      //
      // afFormGroup: {
      //   // 'formgroup-class': 'col-sm-5'
      // }
    }
  },

  municipio:{
    type:String,
    optional: true,
    autoform: {
      // group: personal,
      // afFormGroup: {
      //
      //   // 'formgroup-class': 'col-sm-3'
      // }
    }
  },
  uf:{
    type:String,
    optional: true,
    autoform: {
      // group: personal,
      //
      // afFormGroup: {
      //   // 'formgroup-class': 'col-sm-1'
      // }
    }
  },


  inscricaoestadual:{
    type:String,
    optional: true,
    autoform: {
      // group: personal,
      // label:"Inscrição Estadual",
      // afFormGroup: {
      //
      //   // 'formgroup-class': 'col-sm-12'
      // }
    }
  },

  // item: {
  //       type: Object,
  //       optional: true
  //    },
  //    'item.name': {
  //       type: String
  //    },
  //    'item.quantity': {
  //       type: SimpleSchema.Integer
  //    }



      telefone: {
        type: String,
        optional: true,

        autoform:{
          // group: phone,
          // form: {
          //
          // // 'formgroup-class': 'col-sm-4'
          // }
        }
    },

  //  'telefone.$': {
  //     type: String
  //  },





});

Schema.UserProfile = new SimpleSchema({

  cnpj:{
    type: String,
    optional:true,

  },

  password:{
    type: String,
    optional: true

  },

  image:{
    type: [String],
    optional: true

  },

  photos:{
    type: String,
    optional: true

  },

  name: {
    type: String,
    regEx: /^[a-zA-Z-]{2,25}$/,
    optional: true,
  },
  firstName: {
    type: String,
    regEx: /^[a-zA-Z-]{2,25}$/,
    optional: true,
  },

  lastName: {
    type: String,
    regEx: /^[a-zA-Z]{2,25}$/,
    optional: true,

  },
  // birthday: {
  //   type: Date,
  //   optional: true,
  //   autoform:{
  //     type:"bootstrap-datetimepicker",
  //
  //
  //   },
  // },
  //
  // gender: {
  //
  //   type: String,
  //   allowedValues: AllowedGender,
  //   autoform: {
  //     options: [
  //       {label: "Masculino", value: AllowedGender[0]},
  //       {label: "Feminino", value: AllowedGender[1]},
  //     ]
  //   },
  //   optional: true,
  //
  // },


  city: {
    type: String,
    optional: true,

  },

  state:{
    type : String,
    optional: true,

  },


  registerstatus:{
    type: Boolean,
    optional: true
  },

  numConnections: {
    type: Number,
    optional: true
  },
  profileStep: {
    type: String,
    optional: true
  },



});

Schema.User = new SimpleSchema({

  /* Array with all portfolio Ids */
  clientes:{
    type: [String],
    optional:true,

  },

  produtos:{
    type: [String],
    optional:true,

  },


  pedidos:{
    type: [String],
    optional:true,

  },




  /* Keep the photos added for new projects not saved  */
  newProjectPhotos:{
    type: [String],
    optional: true,

  },



  emails: {
    type: [Object],
    // this must be optional if you also use other login services like facebook,
    // but if you use only accounts-password, then it can be required
    optional: true
  },
  username: {
    type: String,
    // this must be optional if you also use other login services like facebook,
    // but if you use only accounts-password, then it can be required
    optional: true,

  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },

  //people who the user is following
  following:{
    type: [String],
    optional: true,
    blackbox: true


  },

  //people who are following the user
  followers:{
    type: [String],
    optional: true,
    blackbox: true



  },
  // Force value to be current date (on server) upon insert



  // and prevent updates thereafter.

  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    },
    denyUpdate: true
  },


  profile: {
    type: Schema.UserProfile,
    optional: true
  },
  // Make sure this services field is in your schema if you're using any of the accounts packages
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },


  // Add `roles` to your schema if you use the meteor-roles package.
  // Option 1: Object type
  // If you specify that type as Object, you must also specify the
  // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
  // Example:
  // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
  // You can't mix and match adding with and without a group since
  // you will fail validation in some cases.
  roles: {
    type: Object,
    optional: true,
    blackbox: true
  },
  // Option 2: [String] type
  // If you are sure you will never need to use role groups, then
  // you can specify [String] as the type



});

SimpleSchema.debug = true;

Pedidos.attachSchema(Schema.orderSchema);
Clientes.attachSchema(Schema.Client);
Produtos.attachSchema(Schema.Product);
Meteor.users.attachSchema(Schema.User);
