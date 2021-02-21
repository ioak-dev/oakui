export function recomputeDimensionsLeft(
  drawerType: 'side' | 'over' | 'push',
  contentEl: HTMLElement | null,
  leftDrawerEl: HTMLElement | null,
  leftDrawerOpen: boolean
) {
  if (contentEl && leftDrawerEl) {
    switch (drawerType) {
      case 'side':
      case 'push':
        leftDrawerEl.style.transform = `translateX(-${
          leftDrawerOpen ? 0 : leftDrawerEl.scrollWidth
        }px)`;
        contentEl.style.paddingLeft = `${
          leftDrawerOpen ? leftDrawerEl.scrollWidth : 0
        }px`;
        break;
      case 'over':
        leftDrawerEl.style.transform = `translateX(-${
          leftDrawerOpen ? 0 : leftDrawerEl.scrollWidth
        }px)`;
        break;

      default:
        break;
    }
  }
}

export function recomputeDimensionsRight(
  drawerType: 'side' | 'over' | 'push',
  contentEl: HTMLElement | null,
  rightDrawerEl: HTMLElement | null,
  rightDrawerOpen: boolean
) {
  if (contentEl && rightDrawerEl) {
    switch (drawerType) {
      case 'side':
      case 'push':
        rightDrawerEl.style.transform = `translateX(${
          rightDrawerOpen ? 0 : rightDrawerEl.scrollWidth
        }px)`;
        contentEl.style.paddingRight = `${
          rightDrawerOpen ? rightDrawerEl.scrollWidth : 0
        }px`;
        break;
      case 'over':
        rightDrawerEl.style.transform = `translateX(${
          rightDrawerOpen ? 0 : rightDrawerEl.scrollWidth
        }px)`;
        break;

      default:
        break;
    }
  }
}
