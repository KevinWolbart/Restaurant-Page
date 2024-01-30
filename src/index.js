import about from './about.js';
import menu from './menu.js';
import contact from './contact.js';

const checkTab = (function() {
    let content = document.getElementById('content');
    let aboutNode = document.getElementById('about');
    let menuNode = document.getElementById('menu');
    let contactNode = document.getElementById('contact');

    aboutNode.addEventListener('click', function() {
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
        }

        about(content);
    });

    menuNode.addEventListener('click', function() {
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
        }

        menu(content);
    });

    contactNode.addEventListener('click', function() {
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
        }

        contact(content);
    });
})();   