Meteor.publish('verify_email_user', function () {
  return verify_email_user.find();
});
