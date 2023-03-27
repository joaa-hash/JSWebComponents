//const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

//const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

// escape key closes drawer
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    drawer.open = false;
  }
});

// mdc.ripple.MDCRipple.attachTo(document.querySelectors('button'));
//mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

const buttons = document.querySelectorAll('.mdc-button');
for (let i = 0, button; button = buttons[i]; i++) {
  mdc.ripple.MDCRipple.attachTo(button);
}

// const listItems = document.querySelectorAll('.mdc-list-item');
// for (let i = 0, listItem; listItem = listItems[i]; i++) {
//   mdc.ripple.MDCRipple.attachTo(listItem);
// }


// When a nav-drawer item is clicked, or closed, set focus to the first input or button
const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('.main-content');
listEl.addEventListener('click', (event) => {
  drawer.open = false;
  mainContentEl.querySelector('input, button').focus();
});
document.body.addEventListener('MDCDrawer:closed', () => {
  mainContentEl.querySelector('input, button').focus();
});

// listen for text change to yourName
const yourNameEl = document.querySelector('#ti-yourName');
yourNameEl.addEventListener('input', (e) => {
  document.querySelector('#ti-text-area').textContent = e.target.value;
  e.target.value;
});
yourNameEl.addEventListener('focus', (e) => {
  document.querySelector('#hint-your-name').style['visibility'] = "hidden";
});
yourNameEl.addEventListener('blur', (e) => {
  if (e.target.value == '') {
    document.querySelector('#hint-your-name').style['visibility'] = "visible";
  }
});

// listen for text change to email Address
const emailAddressEl = document.querySelector('#ti-email-address');
emailAddressEl.addEventListener('input', (e) => {
  document.querySelector('#ti-text-area').textContent = e.target.value;
  e.target.value;

  if (e.target.value != '') {
    document.querySelector('#hint-email-address').style['visibility'] = "hidden";
  } else {
    document.querySelector('#hint-email-address').style['visibility'] = "visible";
  }
});
// emailAddressEl.addEventListener('focus', (e) => {
//   document.querySelector('#hint-email-address').style['visibility'] = "hidden";
// });
emailAddressEl.addEventListener('blur', (e) => {
  if (e.target.value == '') {
    document.querySelector('#hint-email-address').style['visibility'] = "visible";
  }
});
