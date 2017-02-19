import { Template } from 'meteor/templating'

import './contact.html'

Meteor.subscribe("contacts");

Template.ContactPage.helpers({
});

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

Template.ContactPage.rendered = ()=>{
  let email = Meteor.user().emails[0].address;
  $("#email").val(email);
}
