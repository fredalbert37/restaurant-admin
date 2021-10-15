import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.blue.lighten1, // #E53935
            secondary: colors.grey.lighten5, // #FFCDD2
            accent: colors.indigo.base, // #3F51B5
          },
        },
      },
});
