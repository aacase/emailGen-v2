Meteor.publish('renewal_manager', function () {
  return renewal_manager.find();
});
