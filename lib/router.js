import { Meteor } from 'meteor/meteor'
import Images from '../imports/api/images'
import Posts from '../imports/api/posts'

Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', {
	template: 'HomePage',
});

Router.route('/posts/:_id', {
  template: 'BlogPage',
  data: function(){
    return Posts.findOne({_id : this.params._id});
  }
});

Router.route('/edit/:_id', {
  template: 'EditPage',
  data: function(){
    return Posts.findOne({_id : this.params._id});
  }
});


Router.route('/admin', {
	template: 'AdminPage',
  data: function(){
    var email = Meteor.user().emails[0].address;
    if(email=="blog@austincbrown.com"){
      return true;
    } else {
      toastr.warning("You're not allowed there, sorry!", "Error!")
      Router.go("/");
    }
  }
});

Router.route('/contact', {
	template: 'ContactPage'
});

Router.route('/about', {
	template: 'AboutPage'
});
