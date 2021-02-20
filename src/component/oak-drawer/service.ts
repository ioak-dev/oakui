export function recomputeDimensionsLeft(
  drawerEl: HTMLElement,
  contentEl: HTMLElement,
  isOpen: boolean
) {
  drawerEl.style.transform = `translateX(-${
    isOpen ? 0 : drawerEl.scrollWidth
  }px)`;
  contentEl.style.marginLeft = `-${isOpen ? 0 : drawerEl.scrollWidth}px`;
  if (isOpen) {
    drawerEl.style.visibility = 'visible';
  } else {
    // setTimeout(() => {
    drawerEl.style.visibility = 'hidden';
    // }, 200);
  }
}

export function recomputeDimensionsRight(
  drawerEl: HTMLElement,
  contentEl: HTMLElement,
  isOpen: boolean
) {
  drawerEl.style.transform = `translateX(${
    isOpen ? 0 : drawerEl.scrollWidth
  }px)`;
  contentEl.style.marginRight = `-${isOpen ? 0 : drawerEl.scrollWidth}px`;
}
