import {Template} from 'meteor/templating'

import './sidebar.html'

Template.SideBar.events({
  'click .ui.icon.button'(){
    $('.ui.sidebar').sidebar('toggle');
  }
});
