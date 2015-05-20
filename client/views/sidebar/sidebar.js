Template['sidebar'].helpers({
  // x:function(){
  //   if(this.model=="verify_email_user"){
  //     Session.set('y',verify_email_user.find());
  //   }
  // },
  y:function(){console.log ( Session.get('y'))}
});

Template['sidebar'].events({
  'click .hideButton': function(){
    $('.sidebar').sidebar('hide');
  }
});

Template.sidebar.rendered= function(){
  $('.sidebar').sidebar();
  // console.log(this.model);



};
