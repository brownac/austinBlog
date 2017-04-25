/**
 * Created by austinbrown on 4/24/17.
 */
import {Template} from 'meteor/templating'

import './createAccount.html'

Template.CreateAccount.events({
  'submit .createAccount'(e)
  {
    e.preventDefault();
    let email = e.target.email.value;
    let pass = e.target.pass.value;
    let passMatch = e.target.passRepeat.value;
    if(email == "" || pass == "" || passMatch == "")
    {
      $('.message').removeClass('hide');
      $('.error').text("Do not leave any fields blank!");
    }
    else if(!pass.match(passMatch))
    {
        $('.message').removeClass('hide');
        $('.error').text("Passwords must match!");
    }
    else
    {
      var options = {
        email: email, password: pass
      };
      Accounts.createUser(options, (err) =>
      {
        if(err)
        {
          alert (err);
        }
        else
        {
          Router.go('/user/create-account/more-info');
        }
      });
    }
  }
});
