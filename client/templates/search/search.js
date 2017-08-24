



Template.search.onCreated( function() {
  var template = Template.instance();
  template.searchQuery = new ReactiveVar();
  template.searching   = new ReactiveVar( false );
  template.showResults   = new ReactiveVar( false );

  template.autorun( function() {
    console.log("\n\n-- -- [search autorun created] -- --\n");

    var subs = template.subscribe( 'projects', template.searchQuery.get(), function() {
      console.log("[search autorun subscribe searchQuery]",template.searchQuery.get());

      setTimeout( function() {
        console.log("[search autorun timeout searchQuery]",template.searchQuery.get());
        template.searching.set( false );
      }, 100 );



    });
    console.log("[search autorun subs]",subs);

    // console.log(Projects.findOne({_id: sb.subscriptionId}) );
  });


});

Template.showSearchResult.helpers({

});

Template.search.helpers({
  query: function() {
    // var qry = template.searchQuery.get();
    var qry = Template.instance().searchQuery.get();
    // var qry = "as";
    console.log("query --", qry);
    return qry;
  },
  projects: function() {

  // var inpu
  // var projects = Projects.find();
  console.log("\n\n-- -- projects -- --\n");
  var search = Template.instance().searchQuery.get();
  if (search) {
    console.log(search);

    var projects = Projects.list(search);

    if ( projects ) {
      console.log("projects", projects.fetch());
      // console.log(resp.fetch());
      return projects;
    }
  }
},

tips: function() {

// var inpu
// var projects = Projects.find();
console.log("\n\n-- -- tips -- --\n");
var search = Template.instance().searchQuery.get();
if (search) {
  console.log(search);

  var tips = Tips.list(search);

  if ( tips ) {
    console.log("tips", tips.fetch());
    // console.log(resp.fetch());
    return tips;
  }
}
},

users: function() {

// var inpu
// var projects = Projects.find();
console.log("\n\n-- -- users -- --\n");
var search = Template.instance().searchQuery.get();
if (search) {
  console.log(search);

  var users = Meteor.users.list(search);

  if ( users ) {
    console.log("users", users.fetch());
    // console.log(resp.fetch());
    return users;
  }
}
},

  searching: function() {
    var src = Template.instance().searching.get();
    console.log("searching-- ", src);
    return src;
  },

  showResult: function(){
    var src = Template.instance().showResults.get();
    console.log(src);
    // if (src && searchInput != '') {
      // return true;
    // }
    return src;
  },

});

Template.search.events({
  'keyup #searchInput' ( event, template ) {
  var value = event.target.value.trim();
  console.log("value - ", value,event.keyCode);


  // if ( value !== '' && value,event.keyCode == 13) {
  // if ( value !== '' && value,event.keyCode > 48 && value,event.keyCode < 111 && value,event.keyCode !== 91 && value,event.keyCode !== 92) {
    if ( value !== '') {
      Template.instance().searchQuery.set( value );
      Template.instance().searching.set( true );
      Template.instance().showResults.set( true );

      // var resp = Meteor.call("projects", value);
      var resp = Projects.find();

      console.log(resp.fetch());

      // Meteor.call('projects.projectsPublication', this._id);


      // template.autorun();
      // var qry = Template.instance().searchQuery.get();
      // console.log("query --", qry);

      // console.log("apertou");
    }

    if ( value === '' ) {
      Template.instance().showResults.set( false );
      Template.instance().searchQuery.set( value );
    }
  }
});
