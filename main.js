// menu
const btnMenu = document.querySelector('.menu');
const menu = document.querySelector('.navbar-div');
const btnCloseMenu = document.querySelector('.close');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});
btnCloseMenu.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});

const projects = [
  {
    id: 1,
    projectimages: {
      cardimage: './images/snapshoot1.png',
      dotimage: './images/Counter.png',
      seeliveimage: '.images/seelive1.png',
      seesourceimage: './images/seesource1.png',
    },
    title: 'Tonic',
    projectdesc: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis enim officiis nulla tempore qui voluptatibus, veniam necessitatibus in deserunt porro fugit, cupiditate soluta maxime. Dicta sed quisquam nulla esse at?',
    skills: ['CANOPY', 'Back End Dev', '2015'],
    techies: ['html', 'css', 'javaScript'],
    btntext: 'See Project',
    seelivebtntext: 'See live',
    seesourcebtntext: 'See source',
    close: '&times;',
    navlinks: {
      live: '#',
      source: '#',
    },
  },
  {
    id: 2,
    projectimages: {
      cardimage: './images/snapshoot2.png',
      dotimage: './images/Counter.png',
      seeliveimage: '.images/seelive1.png',
      seesourceimage: './images/seesource1.png',
    },
    title: 'Tonic',
    projectdesc: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis enim officiis nulla tempore qui voluptatibus, veniam necessitatibus in deserunt porro fugit, cupiditate soluta maxime. Dicta sed quisquam nulla esse at?',
    skills: ['FACEBOOK', 'Back End Dev', '2015'],
    techies: ['html', 'css', 'javaScript'],
    btntext: 'See Project',
    seelivebtntext: 'See live',
    seesourcebtntext: 'See source',
    close: '&times;',
    navlinks: {
      live: '#',
      source: '#',
    },
  },
  {
    id: 3,
    projectimages: {
      cardimage: './images/snapshoot3.png',
      dotimage: './images/Counter.png',
      seeliveimage: '.images/seelive1.png',
      seesourceimage: './images/seesource1.png',
    },
    title: 'Facebook 360',
    projectdesc: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis enim officiis nulla tempore qui voluptatibus, veniam necessitatibus in deserunt porro fugit, cupiditate soluta maxime. Dicta sed quisquam nulla esse at?',
    skills: ['CANOPY', 'Back End Dev', '2015'],
    techies: ['html', 'css', 'javaScript'],
    btntext: 'See Project',
    seelivebtntext: 'See live',
    seesourcebtntext: 'See source',
    close: '&times;',
    navlinks: {
      live: '#',
      source: '#',
    },
  },
  {
    id: 4,
    projectimages: {
      cardimage: './images/snapshoot4.png',
      dotimage: './images/Counter.png',
      seeliveimage: '.images/seelive1.png',
      seesourceimage: './images/seesource1.png',
    },
    title: 'Uber Navigation',
    projectdesc: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis enim officiis nulla tempore qui voluptatibus, veniam necessitatibus in deserunt porro fugit, cupiditate soluta maxime. Dicta sed quisquam nulla esse at?',
    skills: ['CANOPY', 'Back End Dev', '2015'],
    techies: ['html', 'css', 'javaScript'],
    btntext: 'See Project',
    seelivebtntext: 'See live',
    seesourcebtntext: 'See source',
    close: '&times;',
    navlinks: {
      live: '#',
      source: '#',
    },
  },

];
// select popup parent
const popupWindow = document.querySelector('popup');
/* const wrapper = document.querySelector('wrapper'); */

// select btn see project
const project1 = document.querySelector('#project1');
const project2 = document.querySelector('#project2');
const project3 = document.querySelector('#project3');
const project4 = document.querySelector('#project4');

function hidePopup() {
  popupWindow.style.display = 'none';
}

// destructure arrays to display pop up
function displayPopup(project) {
  const {
    title,
    projectimages,
    projectdesc,
    skills,
    techies,
    seelivebtntext,
    seesourcebtntext,
    close,
    navlinks,
  } = projects[project];

  popupWindow.innerHTML = `
          <div class="div-content">
              <button class="close-popup" onclick="hidePopup()">${close}</button>
              <h2 class="card-title">${title}</h2>
                <ul class="list">
                  <li class="list-item1">${skills[0]}</li>
                  <li class="list-item"><img src="${projectimages[1]}" alt="dot image" class="dot"/>${skills[1]}</</li>
                  <li class="list-item"><img src="${projectimages[1]}" alt="dot image" class="dot"/>${skills[2]}</</li></ul>
          </div>
          <div class="div-card-pop"><img src="${projectimages[0]}" alt="card image" class="card-image1"/></div>
          <div class="text-btn">
          <div class="text">
              <p class="card-desc">${projectdesc}</p>
          </div> 
          <div class="btn-see">
            <ul class="lang-group">
              <li class="lang-list">${techies[0]}</li>
              <li class="lang-list">${techies[1]}</li>
              <li class="lang-list">${techies[2]}</li>
            </ul>
          <button class="btn-live">${seelivebtntext}<img href="${navlinks[0]} src="${projectimages[2]}" alt="live demo" class="live">
          </button>
          <button class="btn-source">${seesourcebtntext}<img href="${navlinks[1]}" src="${projectimages[3]}"" alt="live demo" class="source">
          </button>
        </div>   
        </div>
        </div> `;
  popupWindow.style.display = 'block';
}
// card1
project1.addEventListener('click', () => {
  displayPopup(0);
  popupWindow.classList.add('popup');
  popupWindow.style.display = 'block';
});

// card2
project2.addEventListener('click', () => {
  displayPopup(1);
  popupWindow.style.display = 'block';
});

// page card3
project3.addEventListener('click', () => {
  displayPopup(2);
  popupWindow.style.display = 'block';
});

// page card4
project4.addEventListener('click', () => {
  displayPopup(3);
  popupWindow.style.display = 'block';
});
popupWindow.addEventListener('click', hidePopup);

// validate form
const form = document.querySelector('form');
const emailAddress = document.getElementById('email');
const hintErrorMsg = document.getElementById('errHint');

form.addEventListener('submit', (e) => {
  if (emailAddress !== emailAddress.value.toLowerCase) {
    hintErrorMsg.textContent = 'Please enter email in lowercase!';
    hintErrorMsg.style.color = '#f0000';
    emailAddress.style.border = '2px solid #f0000';
  } else {
    e.preventDefault();
    form.submit();
  }
});

// local storage
const username = document.getElementById('name');
const useremail = document.getElementById('useremail');
const usermsg = document.getElementById('textarea');

form.addEventListener('submit', () => {
  const data = {
    username: username.value,
    useremail: useremail.value,
    usermsg: usermsg.value,
  };
  localStorage.setItem('userdata', JSON.stringify(data));
});

// retrueve data
const storedData = JSON.parse(localStorage.getItem('userdata'));
username.value = storedData.username;
useremail.value = storedData.useremail;
usermsg.value = storedData.usermsg;
