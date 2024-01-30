const createAbout = (content = document.getElementById('content')) => {
    let aboutDiv = document.createElement('div');
    let headerDiv = document.createElement('div');
    let pDiv = document.createElement('div');
    let adWrapper = document.createElement('div');
    let ad1 = document.createElement('div');
    let ad2 = document.createElement('div');
    let ad3 = document.createElement('div');

    let restName = document.createElement('h2');
    let restBio = document.createElement('p');
    let restAd1 = document.createElement('h4');
    let restAd2 = document.createElement('h4');
    let restAd3 = document.createElement('h4');

    let steak = document.createElement('img');

    aboutDiv.classList.add('about');
    headerDiv.classList.add('content-wrap');
    pDiv.classList.add('content-wrap');
    restAd1.classList.add('content-wrap');
    restAd2.classList.add('content-wrap');
    restAd3.classList.add('content-wrap');
    
    steak.src = './steak.png';
    restName.textContent = "Kevin's Steaks";
    restBio.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    restAd1.textContent = "Savory";
    restAd2.textContent = "Seared";
    restAd3.textContent = "Succulant";

    headerDiv.appendChild(restName);
    pDiv.appendChild(restBio);
    ad1.appendChild(restAd1);
    ad2.appendChild(restAd2);
    ad3.appendChild(restAd3);
    adWrapper.appendChild(ad1);
    adWrapper.appendChild(ad2);
    adWrapper.appendChild(ad3);

    aboutDiv.appendChild(headerDiv);
    aboutDiv.appendChild(pDiv);
    aboutDiv.appendChild(steak);
    aboutDiv.appendChild(adWrapper);

    content.appendChild(aboutDiv);
}

export default createAbout;