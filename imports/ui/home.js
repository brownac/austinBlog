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

Template.HomePage.events({
  // click events for the cube
  'click #left'(){
    $(".shape").shape("flip left");
  },
  'click #right'(){
    $(".shape").shape("flip right");
  },
  'click #up'(){
    $(".shape").shape("flip up");
  },
  'click #down'(){
    $(".shape").shape("flip down");
  },
});

Template.HomePage.rendered = function(){
  $(".shape").shape();
}
