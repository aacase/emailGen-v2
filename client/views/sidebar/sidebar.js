Template['sidebar'].helpers({
});

Template['sidebar'].events({
  'click .hideButton': function(){
    $('.sidebar').sidebar('hide');
  }
});

Template.sidebar.rendered= function(){
  $('.sidebar').sidebar();
};
