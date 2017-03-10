import { Template } from 'meteor/templating'

import Posts from '../api/posts'
import Images from '../api/images'

import './allPosts.html'

Meteor.subscribe("posts");
Meteor.subscribe("images");

Template.AllPosts.helpers({
	posts(){
		return Posts.find();
	},
	images(){
		return Images.find();
	}
});

Template.AllPosts.rendered = function(){
  $('.ui.sidebar').sidebar('hide')
  ;
}
