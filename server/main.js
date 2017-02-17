import { Meteor } from 'meteor/meteor'
import Posts from '../imports/api/posts'
import Images from '../imports/api/images'

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish("posts",()=>{
  return Posts.find();
});

Meteor.publish("images",()=>{
  return Images.find();
});
