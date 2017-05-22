
AllowedGender=["Masculino","Feminino"];
personal = "personalGroup";
phone = "phoneGroup";

/******
Make secure: http://stackoverflow.com/questions/28624626/storing-per-user-data-in-meteor
******/
Schema = {};



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


  inscricoestadual:{
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
  projects:{
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


Clientes.attachSchema(Schema.Client);
Meteor.users.attachSchema(Schema.User);
