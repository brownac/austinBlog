import { Template } from 'meteor/templating'

import './contact.html'

Meteor.subscribe("contacts");

Template.ContactPage.events({
  'submit .ui.form'(event){
        event.preventDefault();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
          Meteor.call("contact", firstName, lastName, email, subject);
        toastr.success("Thanks for contacting me! I'll get back to you soon.", "Thanks!");
        Meteor.call("sendEmail", "blog@austincbrown.com", "blog@austincbrown.com" , firstName + " contacted you via your contact page", firstName + " " + lastName + " contacted you with the following message: " + subject);
        Router.go("/");
      }
});

Template.ContactPage.rendered = () => {
  let email = Meteor.user().emails[0].address;
  $("#email").val(email);
  $('.ui.form')
  .form({
    fields: {
      firstName: {
        identifier: 'firstName',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your first name'
          }
        ]
      },
      lastName: {
        identifier: 'lastName',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your last name'
          }
        ]
      },
      email: {
        identifier: 'email',
        rules: [
          {
            type   : 'email',
            prompt : 'Please enter a valid e-mail address'
          }
        ]
      },
      subject: {
        identifier: 'subject',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a subject'
          }
        ]
      }
    }
  })
;
}
