import { Template } from 'meteor/templating'

import Posts from '../api/posts'
import Images from '../api/images'
import Contacts from '../api/contacts'

import './adminPage.html'

Meteor.subscribe("posts");
Meteor.subscribe("images");
Meteor.subscribe("contacts");

Template.Contacts.helpers({
  contacts(){
    return Contacts.find();
  }
});

Template.AdminPage.events({
    'submit .ui.form'(event) {
        event.preventDefault();
        var post = $("#blog").val();
        Meteor.call('createPost', post);
        $("#blog").val("");
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
  }
});
