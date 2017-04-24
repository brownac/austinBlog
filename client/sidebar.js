import {Template} from 'meteor/templating'

import './sidebar.html'

Template.SideBar.events({
  'click .ui.icon.button'(){
      $('.ui.sidebar').sidebar('toggle');
  }
});

Template.sidebarContents.events({
  'click a.item.signOut'(event){
    Meteor.logout(function() {
      Router.go('/');
      $('.ui.sidebar').sidebar('toggle');
    });
  }
});
