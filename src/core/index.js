// https://docs.microsoft.com/en-us/windows/desktop/api/winuser/nf-winuser-setdoubleclicktime
const INTERVAL = 500;

module.exports = function(interval){
  let cy = this;
  let clicked = null;

  interval = interval || INTERVAL;

  cy.on('click', (evt) => {
    if (clicked && clicked === evt.target) {
      clicked = null;
      evt.preventDefault();
      evt.stopPropagation();
      evt.target.emit('dblclick', [evt]);
    } else {
      clicked = evt.target;
      setTimeout(() => {
        if (clicked && clicked === evt.target) {
          clicked = null;
          evt.target.emit('dblclick:timeout', [evt]);
        }
      }, interval);
    }
  });

  return this; // chainability
};
