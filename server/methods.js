import {Meteor} from 'meteor/meteor'

import Posts from '../imports/api/posts'
import Images from '../imports/api/images'


Meteor.methods({
  createPost(content) {
    var now = new Date();
    var today = moment(now).format('MM/DD/YYYY');
    Posts.insert({
      content : content,
      createdAt : today
    });
  }
});
