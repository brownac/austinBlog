import {Template} from 'meteor/templating'

import './profilePage.html'

import Profiles from '../api/profiles'
import Images from '../api/images'

Meteor.subscribe('profiles');
Meteor.subscribe('images');

Template.ProfilePage.helpers({
  profiles()
  {
    return Profiles.find({
      email: Meteor.user().emails[0].address
    });
  },
  images()
  {
    return Images.find();
  }
});

Template.ProfilePage.events({
  'click .deleteAccount'(e)
  {
    e.preventDefault();
    let id = Meteor.userId();
    Meteor.call('deleteProfile', id, (err) =>
    {
      if (err)
      {
        console.log(err)
      }
      else
      {
        toastr.success("Your account has been successfully deleted!", "Sorry to see you go!");
        setTimeout(() =>
        {
          Router.go('/');
        }, 1000);
      }
    });
  }
});

Template.ProfilePage.rendered = () =>
{
  $('.ui.sidebar').sidebar('hide');
}
