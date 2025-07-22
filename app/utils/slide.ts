export const slideUp = (elm: HTMLElement, duration: number = 250) => {
  if (!elm) return;
  
  elm.style.transitionProperty = 'height, margin, padding';
  elm.style.transitionDuration = `${duration}ms`;
  elm.style.boxSizing = 'border-box';
  elm.style.height = elm.offsetHeight + 'px';
  elm.offsetHeight; // Force reflow
  elm.style.overflow = 'hidden';
  elm.style.height = '0';
  elm.style.paddingTop = '0';
  elm.style.paddingBottom = '0';
  elm.style.marginTop = '0';
  elm.style.marginBottom = '0';
  
  setTimeout(() => {
    elm.style.display = 'none';
    elm.style.removeProperty('height');
    elm.style.removeProperty('padding-top');
    elm.style.removeProperty('padding-bottom');
    elm.style.removeProperty('margin-top');
    elm.style.removeProperty('margin-bottom');
    elm.style.removeProperty('overflow');
    elm.style.removeProperty('transition-duration');
    elm.style.removeProperty('transition-property');
  }, duration);
};

export const slideDown = (elm: HTMLElement, duration: number = 250) => {
  if (!elm) return;
  
  elm.style.removeProperty('display');
  let display = window.getComputedStyle(elm).display;
  if (display === 'none') display = 'block';
  elm.style.display = display;
  
  const height = elm.offsetHeight;
  elm.style.overflow = 'hidden';
  elm.style.height = '0';
  elm.style.paddingTop = '0';
  elm.style.paddingBottom = '0';
  elm.style.marginTop = '0';
  elm.style.marginBottom = '0';
  elm.offsetHeight; // Force reflow
  elm.style.boxSizing = 'border-box';
  elm.style.transitionProperty = 'height, margin, padding';
  elm.style.transitionDuration = `${duration}ms`;
  elm.style.height = height + 'px';
  elm.style.removeProperty('padding-top');
  elm.style.removeProperty('padding-bottom');
  elm.style.removeProperty('margin-top');
  elm.style.removeProperty('margin-bottom');
  
  setTimeout(() => {
    elm.style.removeProperty('height');
    elm.style.removeProperty('overflow');
    elm.style.removeProperty('transition-duration');
    elm.style.removeProperty('transition-property');
  }, duration);
};