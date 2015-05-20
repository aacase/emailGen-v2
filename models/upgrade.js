upgrade = new Mongo.Collection('upgrade');

upgrade.attachSchema(
  new SimpleSchema({
    language: {
      type: String
    },
    header: {
      type: String
    },
    greeting: {
      type: String
    },
    paragraph1: {
      type: String
    },
    paragraph2: {
      type: String
    },
    buttonText: {
      type: String
    },
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  upgrade.allow({
    insert: function() {
      return true;
    },
    update: function() {
      return true;
    },
    remove: function() {
      return true;
    }
  });
}
