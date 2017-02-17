import { Meteor } from 'meteor/meteor'
import Images from '../imports/api/images'
import Posts from '../imports/api/posts'

Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', {
	template: 'HomePage',
});

Router.route('/admin', {
	template: 'AdminPage',
  data: function(){
    var email = Meteor.user().emails[0].address;
    if(email=="blog@austincbrown.com"){
      return true;
    } else {
      alert("You're not allowed there, sorry!");
      Router.go("/");
    }
  }
});

Router.route('/contact', {
	template: 'ContactPage'
});
