Template.profileForm.events({
'submit form': function(e, template) {
e.preventDefault();
var inputs = template.findAll('input');
console.log("this: ",this,"\ninput: ",inputs[0].value);
Meteor.users.update({_id: this.user._id,},{$set: {"profile.name": inputs[0].value}});
Session.set("editProfile", false);
}
});
