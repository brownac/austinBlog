import { Meteor } from 'meteor/meteor'
import {Sparkpost} from 'meteor/agoldman:sparkpost-mail'
import Posts from '../imports/api/posts'
import Images from '../imports/api/images'
import Contacts from '../imports/api/contacts'
import {WebApp} from 'meteor/webapp'

Meteor.startup(() => {
  // code to run on server at startup
  Sparkpost.config('41f869fe72d40df7af0982193805f6c20c99915d');
  WebApp.connectHandlers.use("/.well-known/acme-challenge/8YYSJxoKpfvB1kyXG60ARbaC6A48PUWFBw_ypc_1Q94", function(req, res, next) {
  res.writeHead(200);
  res.end("8YYSJxoKpfvB1kyXG60ARbaC6A48PUWFBw_ypc_1Q94.J7O86oNK4FQRgcA7o8AEwu_C00z4l5TimPoKiEg1xls");
});
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

Meteor.publish("allUsers", ()=>{
  return Meteor.users.find({}, {fields : {emails : 1}});
});
