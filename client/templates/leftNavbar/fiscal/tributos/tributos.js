// Template.tributosModal.onCreated = function(){
//    this.tributosTab = new ReactiveVar("icms");
//    Session.set("tributosTab","icms");
//
//    console.log("\n\n -- tributosTab -- ",tributosTab);
// };
Template.tributosModal.events({
  "click #icmsBtn": function(event, template){
     Session.set("tributosTab","icms");
     console.log(Session.get("tributosTab"));
  },
  "click #ipiBtn": function(event, template){
    Session.set("tributosTab","ipi");
    console.log(Session.get("tributosTab"));

  },
  "click #pisBtn": function(event, template){
    Session.set("tributosTab","pis");

    console.log(Session.get("tributosTab"));
  },
  "click #cofinsBtn": function(event, template){
    Session.set("tributosTab","cofins");
    console.log(Session.get("tributosTab"));

  },
  "click #iimportacaoBtn": function(event, template){
    Session.set("tributosTab","iimportacao");
    console.log(Session.get("tributosTab"));

  },
  "click #issqnBtn": function(event, template){
    Session.set("tributosTab","issqn");
    console.log(Session.get("tributosTab"));

  },
  "click #ipidevolvidoBtn": function(event, template){
    Session.set("tributosTab","ipidevolvido");
    console.log(Session.get("tributosTab"));

  },
  "click #icmsinterestadualBtn": function(event, template){
    Session.set("tributosTab","icmsinterestadual");
    console.log(Session.get("tributosTab"));

  },

});


Template.tributosTemplate.events({
  "click #icmsBtn": function(event, template){
     Session.set("tributosTab","icms");
     console.log(Session.get("tributosTab"));
  },
  "click #ipiBtn": function(event, template){
    Session.set("tributosTab","ipi");
    console.log(Session.get("tributosTab"));

  },
  "click #pisBtn": function(event, template){
    Session.set("tributosTab","pis");

    console.log(Session.get("tributosTab"));
  },
  "click #cofinsBtn": function(event, template){
    Session.set("tributosTab","cofins");
    console.log(Session.get("tributosTab"));

  },
  "click #iimportacaoBtn": function(event, template){
    Session.set("tributosTab","iimportacao");
    console.log(Session.get("tributosTab"));

  },
  "click #issqnBtn": function(event, template){
    Session.set("tributosTab","issqn");
    console.log(Session.get("tributosTab"));

  },
  "click #ipidevolvidoBtn": function(event, template){
    Session.set("tributosTab","ipidevolvido");
    console.log(Session.get("tributosTab"));

  },
  "click #icmsinterestadualBtn": function(event, template){
    Session.set("tributosTab","icmsinterestadual");
    console.log(Session.get("tributosTab"));

  },

});

Template.tributosTemplate.helpers({
  showICMS: function(){
    var tab = Session.get("tributosTab");
    // console.log(tab);


    if (tab) {
      if(tab=="icms"){
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }

  },
  showPIS: function(){
    var tab = Session.get("tributosTab");
    if (tab) {
      if(tab=="pis"){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  showIPI: function(){
    var tab = Session.get("tributosTab");
    if (tab) {
      if(tab=="ipi"){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
    return false;
  },
  showCOFINS: function(){
    var tab = Session.get("tributosTab");
    if (tab) {
      if(tab=="cofins"){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
    return false;
  },
  showIImportacao: function(){
    var tab = Session.get("tributosTab");
    if (tab) {
      if(tab=="iimportacao"){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
    return false;
  },
  showISSQN: function(){
    var tab = Session.get("tributosTab");
    if (tab) {
      if(tab=="issqn"){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
    return false;
  },
  showIPIDevolvido: function(){
    var tab = Session.get("tributosTab");
    if (tab) {
      if(tab=="ipidevolvido"){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
    return false;
  },
  showICMSInterestadual: function(){
    var tab = Session.get("tributosTab");
    if (tab) {
      if(tab=="icmsinterestadual"){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
    return false;
  },

  tab: function() {
    // var cTab = Template.instance().tributosTab.get();
    var cTab = Session.get("tributosTab");
    console.log("cTab -- ",cTab);
    if(cTab){
      return cTab ;

    } else {
      return "icms";
    }
  },
  tabData: function() {
    // var tab = Template.instance().currentTab.get();
    // var tab = Session.get("tributosTab");

    // if(!tab){
    var tab = "icms";
    // }

    var data = {
      "icms": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "ipi": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "pis": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "cofins": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "iimportacao": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "issqn": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "ipidevolvido": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "icmsinterestadual": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
    };

    return data[ tab ];
  }
});



Template.tributosModal.helpers({

  tab: function() {
    // var cTab = Template.instance().tributosTab.get();
    var cTab = Session.get("tributosTab");
    console.log("cTab -- ",cTab);
    if(cTab){
      return cTab ;

    } else {
      return "icms";
    }
  },
  tabData: function() {
    // var tab = Template.instance().currentTab.get();
    // var tab = Session.get("tributosTab");

    // if(!tab){
    var tab = "icms";
    // }

    var data = {
      "icms": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "ipi": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "pis": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "cofins": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "iimportacao": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "issqn": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "ipidevolvido": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
      "icmsinterestadual": [
        { user: Meteor.users.find({_id:Meteor.userId()}) }
      ],
    };

    return data[ tab ];
  }
});
