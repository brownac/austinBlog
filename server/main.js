import { Meteor } from 'meteor/meteor'
import {Sparkpost} from 'meteor/agoldman:sparkpost-mail'
import Posts from '../imports/api/posts'
import Images from '../imports/api/images'
import Contacts from '../imports/api/contacts'
import {WebApp} from 'meteor/webapp'

Meteor.startup(() => {
  // code to run on server at startup
  Sparkpost.config('41f869fe72d40df7af0982193805f6c20c99915d');
});

Meteor.publish("posts",()=>{
  return Posts.find();
});

Meteor.publish("images",()=>{
  return Images.find();
});

Meteor.publish("contacts", ()=>{
  return Contacts.find();
});
