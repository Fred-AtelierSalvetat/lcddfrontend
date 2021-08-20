/**
 * Used to hide Header on Scroll Down and show on Scroll Up
 */

const doc = document.documentElement;
const w = window;
let curScroll;
let prevScroll = w.scrollY || doc.scrollTop;
let curDirection = 0;
let prevDirection = 0;
let toggled;
const threshold = 300;

export const checkScroll: (header: HTMLElement) => void = (header) => {
  curScroll = w.scrollY || doc.scrollTop;
  if (curScroll > prevScroll) {
    // scrolled down
    curDirection = 2;
  } else if (curScroll < prevScroll) {
    // scrolled up
    curDirection = 1;
  }

  if (curDirection !== prevDirection) {
    toggled = toggleHeader(header);
  }

  prevScroll = curScroll;
  if (toggled) {
    prevDirection = curDirection;
  }
};

const toggleHeader = (header) => {
  toggled = true;
  if (curDirection === 2 && curScroll > threshold) {
    header.classList.add('hide');
  } else if (curDirection === 1) {
    header.classList.remove('hide');
  } else {
    toggled = false;
  }
  return toggled;
};
