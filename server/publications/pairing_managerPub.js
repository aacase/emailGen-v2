Meteor.publish('pairing_manager', function () {
  return pairing_manager.find();
});
