verify_email_user = new Mongo.Collection('verify_email_user');

verify_email_user.attachSchema(
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
    webConsole: {
      type: String
    },
    keepHandy: {
      type: String
    },
    username: {
      type: String
    },
    downloadLink: {
      type: String
    },
    iconDesc: {
      type: String
    },
    iconLink: {
      type: String
    },
    iconAnd: {
      type: String
    },
    iconLink2: {
      type: String
    },
    helpfulResourcesLang: {
      type: String
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  verify_email_user.allow({
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
