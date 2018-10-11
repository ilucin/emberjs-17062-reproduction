import {defineProperty, computed} from '@ember/object';
import Component from '@ember/component';
import {reads} from '@ember/object/computed';

export default Component.extend({
  a: computed(() => [1,2]),
  b: reads('a'),

  actions: {
    boom() {
      defineProperty(this, 'b', reads('a'));
      this.set('a', [1,2,3]);
    }
  }
});
