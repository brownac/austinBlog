import {Meteor} from 'meteor/meteor'
import {Sparkpost} from 'meteor/agoldman:sparkpost-mail'

import Posts from '../imports/api/posts'
import Images from '../imports/api/images'
import Contacts from '../imports/api/contacts'
import Profiles from '../imports/api/profiles'


Meteor.methods({
  createPost(content, title) {
    var now = new Date();
    var today = moment(now).format('MM/DD/YYYY');
    Posts.insert({
      content : content,
      title : title,
      createdAt : today,
      likes: 0
    });
  },
  editPost(id, text, title){
    Posts.update(id, {
      $set: {
        content : text,
        title : title
      }
    });
  },
  submitComment(id, text){
    var now = new Date();
    var today = moment(now).format('dddd, MMMM Do YYYY, h:mm a');
    var user = Meteor.user().emails[0].address;
    Posts.update(id, {
      $push:{
        comment:{
          comment:text,
          commenter:user,
          commentedAt:today
        }
      }
    });
  },
  /**likePost(id){
    Posts.update(id, {
      $set: {
        likes: likes + 1
      }
    });
  },**/
  contact(first, last, email, subject){
    var now = new Date();
    var today = moment(now).format('MM/DD/YYYY');
    Contacts.insert({
      firstName : first,
      lastName : last,
      email : email,
      subject : subject,
      createdAt : today
    });
  },
  deleteContact(id){
    Contacts.remove(id);
  },
  deleteImage(id){
    Images.remove(id);
  },
  deletePosts(id){
    Posts.remove(id);
  },
  sendEmail(to, from, subject, text) {
			Sparkpost.send({
			from: from,
			to: to,
			subject: subject,
			text: text
		});
	},
  setProfile(first, last, email)
  {
    Profiles.insert({
      firstName: first,
        lastName: last,
        email: email
    });
  },
  deleteProfile(id)
  {
    Meteor.users.remove(id);
  }
});
