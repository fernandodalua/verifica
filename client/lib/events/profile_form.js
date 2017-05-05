Template.profileForm.events({
'submit form': function(e, template) {
e.preventDefault();
var inputs = template.findAll('input');
Meteor.users.update({_id: this._id},{$set: {'profile.name': inputs[0].value}});
Session.set("editProfile", false);
}
});
