import { Template } from 'meteor/templating'

import Posts from '../api/posts'
import Images from '../api/images'
import Contacts from '../api/contacts'

import './adminPage.html'

Meteor.subscribe("posts");
Meteor.subscribe("images");
Meteor.subscribe("contacts");
Meteor.subscribe("allUsers");

Template.Contacts.helpers({
  contacts(){
    return Contacts.find();
  }
});

Template.AdminPage.events({
    'submit .ui.form'(event) {
        event.preventDefault();
        var post = $("#blog").val();
        var title = $("#title").val();
        Meteor.call('createPost', post, title);
        $("#blog").val("");
        $("#title").val("");
    },

    'change #file'(event) {
      var file = event.target.files[0];
      var today = new Date();
      var now = moment(today).format('MM/DD/YYYY');
      var fileObj = new FS.File(file);
      fileObj.metadata = { createdAt : now };
      Images.insert(fileObj, (err) => {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
        if(err){ console.log(err); }
        else { toastr.success("Image uploaded!", "Woo!"); }
      });
      //Meteor.call("uploadImage", file);
  },

  'click .ui.red.button'(){
    Meteor.call("deleteContact", this._id)
  }
});

Template.AdminPage.rendered = function(){
  $('.ui.sidebar').sidebar('hide')
  ;
}
