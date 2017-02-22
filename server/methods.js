import {Meteor} from 'meteor/meteor'
import {Sparkpost} from 'meteor/agoldman:sparkpost-mail'

import Posts from '../imports/api/posts'
import Images from '../imports/api/images'
import Contacts from '../imports/api/contacts'


Meteor.methods({
  createPost(content, title) {
    var now = new Date();
    var today = moment(now).format('MM/DD/YYYY');
    Posts.insert({
      content : content,
      title : title,
      createdAt : today
    });
  },
  editPost(id, text){
    Posts.update(id, {
      $set: {
        content : text
      }
    });
  },
  /**uploadImage(file){
      var today = new Date();
      var now = moment(today).format('MM/DD/YYYY');
      var fileObj = new FS.File(file);
      fileObj.metadata = { createdAt : now };
      Images.insert(fileObj, (err) => {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
        if(err){ console.log(err); }
        else { console.log('- All good -'); }
      });
  }**/
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
	}
});
