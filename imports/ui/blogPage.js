import { Template } from 'meteor/templating'

import Posts from '../api/posts'
import Images from '../api/images'

import './blogPage.html'

Meteor.subscribe("posts");
Meteor.subscribe("images");

Template.BlogPage.helpers({
  posts(){
    return Posts.find({_id : this._id});
  },
  images(){
    return Images.find();
  }
});
