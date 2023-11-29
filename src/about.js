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