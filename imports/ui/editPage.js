import { Template } from 'meteor/templating'

import Posts from '../api/posts'

import './editPage.html'

Meteor.subscribe("posts");

Template.EditPage.helpers({
  posts(){
    return Posts.find({_id:this._id});
  }
});

Template.EditPage.events({
  'submit .ui.form'(event){
    event.preventDefault();
    var content = $("#edit").val();
    Meteor.call("editPost", this._id, content);
    Router.go("/posts/"+this._id);
  }
});
