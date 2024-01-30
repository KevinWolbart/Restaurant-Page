const Contact = (content = document.getElementById('content')) => {
    let contactWrap = document.createElement('div');

    let phone = document.createElement('div');
    phone.classList.add('content-wrap');

    let email = document.createElement('div');
    email.classList.add('content-wrap');
    
    let address = document.createElement('div');
    address.classList.add('content-wrap');

    let phone1 = document.createElement('h3');
    let phone2 = document.createElement('h3');
    let phone3 = document.createElement('h3');

    phone1.textContent = "444-444-4444";
    phone2.textContent = "222-222-2222";
    phone3.textContent = "333-333-3333";

    let email1 = document.createElement('h3');
    let email2 = document.createElement('h3');
    let email3 = document.createElement('h3');

    email1.textContent = "fake@fake.com";
    email2.textContent = "lorem@ipsom.com";
    email3.textContent = "Ipsom@lorem.com";

    let address1 = document.createElement('h3');
    let address2 = document.createElement('h3');
    let address3 = document.createElement('h3');

    address1.textContent = "123 Main Street";
    address2.textContent = "456 Main Street";
    address3.textContent = "789 Main Street";

    phone.appendChild(phone1);
    phone.appendChild(phone2);
    phone.appendChild(phone3);

    email.appendChild(email1);
    email.appendChild(email2);
    email.appendChild(email3);

    address.appendChild(address1);
    address.appendChild(address2);
    address.appendChild(address3);

    contactWrap.appendChild(phone);
    contactWrap.appendChild(email);
    contactWrap.appendChild(address);

    content.appendChild(contactWrap);
}

export default Contact;