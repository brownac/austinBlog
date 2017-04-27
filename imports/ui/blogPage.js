import { Template } from 'meteor/templating'

import Posts from '../api/posts'
import Images from '../api/images'
import Profiles from '../api/profiles'


import './blogPage.html'

Meteor.subscribe("posts");
Meteor.subscribe("images");

Template.BlogPage.helpers({
  posts(){
    return Posts.find({_id : this._id});
  },
  images(){
    return Images.find();
  },
    profiles()
    {
      return Profiles.find();
    }
});

Template.BlogPage.events({
  'click .ui.red.button'(){
    Meteor.call("deleteImage", this._id);
  },
  'submit .ui.form'(event){
    event.preventDefault();
    let comment = $("#comment").val();
    Meteor.call("submitComment", this._id, comment);
    $("#comment").val("");
  }
  /**'click .like'(){
    Meteor.call("likePost", this._id);
  }**/
});

Template.BlogPage.rendered = function () {
    $('.shape').shape();
}
