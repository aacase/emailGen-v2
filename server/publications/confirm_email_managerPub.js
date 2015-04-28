Meteor.publish('confirm_email_manager', function () {
  return confirm_email_manager.find();
});
