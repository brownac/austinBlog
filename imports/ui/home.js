import { Template } from 'meteor/templating'
import Posts from '../api/posts'
import Images from '../api/images'

import './home.html';

Meteor.subscribe("posts");
Meteor.subscribe("images");

Template.HomePage.helpers({
   images(){
     return Images.find();
   },
   posts(){
     return Posts.find();
   }
});
