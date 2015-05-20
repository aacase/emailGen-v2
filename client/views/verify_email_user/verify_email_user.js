Template['verify_email_user'].helpers({
});

Template['verify_email_user'].events({
  'click .menuButton': function(){
    $('.sidebar').sidebar('toggle');
  },

  'click .blue': function(){
    Router.go("/preview/verify_email_user");
  }
});
