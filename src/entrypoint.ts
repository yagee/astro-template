import type { Alpine } from 'alpinejs';

import mask from '@alpinejs/mask';

export default (Alpine: Alpine) => {
  Alpine.plugin(mask);
  Alpine.data('dropdown', () => ({
    open: false,
    toggle() {
      this.open = !this.open;
    },
  }));
};
