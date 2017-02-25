import {Template} from 'meteor/templating'

import './about.html'

Template.AboutPage.rendered = function(){
    $('.ui.sidebar').sidebar('hide');
}
