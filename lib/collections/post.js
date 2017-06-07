Posts = new Meteor.Collection('posts');
Posts.publish = function(message) {
  this.insert({
    message: message,
    date: new Date(),
    userId: Meteor.userId()
  });
};

// Post.list = function(userId) {
//   return this.find({userId: userId},{sort:{date:-1}});
// };
