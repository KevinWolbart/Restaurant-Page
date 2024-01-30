const Menu = (content = document.getElementById('content')) => {
    let menuWrap = document.createElement('div');
    
    let appetizers = document.createElement('div');
    appetizers.classList.add('content-wrap');
    let appHead = document.createElement('h2');
    let appDish1 = document.createElement('div');
    appDish1.classList.add('content-wrap');
    let appDish1Name = document.createElement('h3');
    let appDish1Des = document.createElement('p');
    let appDish2 = document.createElement('div');
    appDish2.classList.add('content-wrap');
    let appDish2Name = document.createElement('h3');
    let appDish2Des = document.createElement('p');
    let appDish3 = document.createElement('div');
    appDish3.classList.add('content-wrap');
    let appDish3Name = document.createElement('h3');
    let appDish3Des = document.createElement('p');

    appHead.textContent = "Appetizers";
    appDish1Name.textContent = "German Pretzel";
    appDish1Des.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    appDish2Name.textContent = "Salad";
    appDish2Des.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    appDish3Name.textContent = "Fried Green Beans";
    appDish3Des.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    let mains = document.createElement('div');
    mains.classList.add('content-wrap');
    let mainHead = document.createElement('h2');
    let mainDish1 = document.createElement('div');
    mainDish1.classList.add('content-wrap');
    let mainDish1Name = document.createElement('h3');
    let mainDish1Des = document.createElement('p');
    let mainDish2 = document.createElement('div');
    mainDish2.classList.add('content-wrap');
    let mainDish2Name = document.createElement('h3');
    let mainDish2Des = document.createElement('p');
    let mainDish3 = document.createElement('div');
    mainDish3.classList.add('content-wrap');
    let mainDish3Name = document.createElement('h3');
    let mainDish3Des = document.createElement('p');

    mainHead.textContent = "Mains";
    mainDish1Name.textContent = "Ribeye";
    mainDish1Des.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    mainDish2Name.textContent = "NY Strip";
    mainDish2Des.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    mainDish3Name.textContent = "Prime Rib";
    mainDish3Des.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    let desserts = document.createElement('div');
    desserts.classList.add('content-wrap');
    let desHead = document.createElement('h2');
    let desDish1 = document.createElement('div');
    desDish1.classList.add('content-wrap');
    let desDish1Name = document.createElement('h3');
    let desDish1Des = document.createElement('p');
    let desDish2 = document.createElement('div');
    desDish2.classList.add('content-wrap');
    let desDish2Name = document.createElement('h3');
    let desDish2Des = document.createElement('p');
    let desDish3 = document.createElement('div');
    desDish3.classList.add('content-wrap');
    let desDish3Name = document.createElement('h3');
    let desDish3Des = document.createElement('p');

    desHead.textContent = "Desserts";
    desDish1Name.textContent = "Ice cream";
    desDish1Des.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    desDish2Name.textContent = "Bread Pudding";
    desDish2Des.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    desDish3Name.textContent = "Chocolate Cake";
    desDish3Des.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    appDish1.appendChild(appDish1Name);
    appDish1.appendChild(appDish1Des);
    appDish2.appendChild(appDish2Name);
    appDish2.appendChild(appDish2Des);
    appDish3.appendChild(appDish3Name);
    appDish3.appendChild(appDish3Des);
    appetizers.appendChild(appHead);
    appetizers.appendChild(appDish1);
    appetizers.appendChild(appDish2);
    appetizers.appendChild(appDish3);

    mainDish1.appendChild(mainDish1Name);
    mainDish1.appendChild(mainDish1Des);
    mainDish2.appendChild(mainDish2Name);
    mainDish2.appendChild(mainDish2Des);
    mainDish3.appendChild(mainDish3Name);
    mainDish3.appendChild(mainDish3Des);
    mains.appendChild(mainHead);
    mains.appendChild(mainDish1);
    mains.appendChild(mainDish2);
    mains.appendChild(mainDish3);

    desDish1.appendChild(desDish1Name);
    desDish1.appendChild(desDish1Des);
    desDish2.appendChild(desDish2Name);
    desDish2.appendChild(desDish2Des);
    desDish3.appendChild(desDish3Name);
    desDish3.appendChild(desDish3Des);
    desserts.appendChild(desHead);
    desserts.appendChild(desDish1);
    desserts.appendChild(desDish2);
    desserts.appendChild(desDish3);

    menuWrap.appendChild(appetizers);
    menuWrap.appendChild(mains);
    menuWrap.appendChild(desserts);

    content.appendChild(menuWrap);
}

export default Menu;