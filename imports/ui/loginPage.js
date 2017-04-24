/**
 * Created by austinbrown on 4/24/17.
 */
import {Template} from 'meteor/templating'

import './loginPage.html'

Template.LoginPage.events({
    'submit .login'(e)
    {
        e.preventDefault();
        let email = e.target.email.value;
        let pass = e.target.pass.value;
        if (email == "" || pass == "")
        {
            $('.message').removeClass('hide');
            $('.error').text("Do not leave a field blank!");
        }
        else if(email == "" && pass == "")
        {
            $('.message').removeClass('hide');
            $('.error').text("Do not leave both fields blank!");
        }
        else
        {
            Meteor.loginWithPassword(email, pass, (err) =>
            {
                if(err)
                {
                  $('.message').removeClass('hide');
                  $('.error').text(err.message.split('[')[0] + "!");
                }
                else
                {
                  Router.go('/');
                }
            });
        }

    }

});

Template.LoginPage.rendered = function () {
    $('.ui.sidebar').sidebar('hide');
}
