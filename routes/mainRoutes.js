Router.route('/', function () {
  this.render('home');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});


Router.route('/slack', function () {
  this.render('slack');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});
