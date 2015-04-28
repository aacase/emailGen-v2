Meteor.publish('upgrade', function () {
  return upgrade.find();
});
