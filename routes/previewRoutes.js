Router.route('/preview/verify_email_user', function () {
  this.render('view_verify_email_user');
});


Router.route('/verify_email_user/:_id', function () {
  var item = verify_email_user.findOne({_id: this.params._id});
  this.render('verify_email_user_text', {data: item});
});
