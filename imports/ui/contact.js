import { Template } from 'meteor/templating'

import './contact.html'

Template.ContactPage.helpers({
  loggedInUser(){
    return Meteor.user();
  }
});
