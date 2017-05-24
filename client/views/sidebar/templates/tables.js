Template.bookCheckOutCell.events({
  'click .check-out': function () {
    addBookToCheckoutCart(this._id);
  }
});

Template.containsTheDataTable.helpers({
    reactiveDataFunction: function () {
        return Clientes.find().fetch();
    },

    optionsObject: function(){
    columns: [{
        title: 'Real Name',
        data: 'profile.realname', // note: access nested data like this
        className: 'nameColumn'
    }, {
        title: 'Photo',
        data: 'profile.picture',
        render: renderPhoto, // optional data transform, see below
        className: 'imageColumn'
    }];
    return columns;
    // ... see jquery.dataTables docs for more

    // NOTE! saveState: true, is ON by default, which can cause unexpected
    // issues during development. Set saveState: false here to disable this.

}
});
