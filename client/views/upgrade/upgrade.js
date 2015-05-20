Template['upgrade'].helpers({
});

Template['upgrade'].events({
  'click .menuButton': function(){
    $('.sidebar').sidebar('toggle');
  },

  'click .blue': function(){
    Router.go("/preview/upgrade");
  }
});
