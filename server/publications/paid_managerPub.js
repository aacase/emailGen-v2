Meteor.publish('paid_manager', function () {
  return paid_manager.find();
});
