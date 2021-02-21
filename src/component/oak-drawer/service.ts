export function recomputeDimensionsLeft(
  drawerEl: HTMLElement,
  contentEl: HTMLElement,
  isOpen: boolean
) {
  drawerEl.style.transform = `translateX(-${
    isOpen ? 0 : drawerEl.scrollWidth
  }px)`;
  contentEl.style.paddingLeft = `${isOpen ? drawerEl.scrollWidth : 0}px`;
}

export function recomputeDimensionsRight(
  drawerEl: HTMLElement,
  contentEl: HTMLElement,
  isOpen: boolean
) {
  drawerEl.style.transform = `translateX(${
    isOpen ? 0 : drawerEl.scrollWidth
  }px)`;
  contentEl.style.paddingRight = `${isOpen ? drawerEl.scrollWidth : 0}px`;
}
