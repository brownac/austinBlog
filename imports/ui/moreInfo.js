/**
* Created by austinbrown on 4/25/17.
*/
import {Template} from 'meteor/templating'

import Images from '../api/images'

Meteor.subscribe("images");
Meteor.subscribe("profiles")

import './moreInfo.html'

Template.MoreInfo.events({
  'change #file-input'(e)
  {
    e.preventDefault();
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = (event) => {
      // set the preview
      var img = $("#profileImage");
      img.attr("src", event.target.result);
    }
  },
  'submit .moreInfo'(e)
  {
    e.preventDefault();
    let first = e.target.firstName.value;
    let last = e.target.lastName.value;
    let email = e.target.email.value;
    let profileImage = e.target.profileImage.files[0];
    if (first == "" || last == "" || email == "")
    {
      $(".message").removeClass('hide');
      $(".error").text("Don't leave any fields blank!");
    }
    /**else if (profileImage == null)
    {
      $(".message").removeClass('hide');
      $(".error").text("Be sure to upload a profile image!");
    }**/
    else
    {
      Meteor.call('setProfile', first, last, email, (err) =>
      {
        if (err)
        {
          console.log(err);
        }
        else
        {
          var fileObj = new FS.File(profileImage);
          fileObj.metadata = {
            belongsTo: email
          };
          Images.insert(fileObj, (err) =>
          {
            if (err)
            {
              console.log(err);
            }
            else
            {
              toastr.success("Thanks for signing up!", "Success!");
              setTimeout(() =>
              {
                Router.go("/")
              }, 1000);
            }
          });
        }
      });
    }
  }
});
