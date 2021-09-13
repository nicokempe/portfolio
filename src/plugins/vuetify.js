import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#0096c7',
        secondary: '#00b4d8',
        accent: '#48cae4',
        error: '#023e8a',
        info: '#90e0ef',
        success: '#ade8f4',
        warning: '#03045e'
      },
      dark: {
        primary: '#0096c7',
        secondary: '#00b4d8',
        accent: '#48cae4',
        error: '#023e8a',
        info: '#90e0ef',
        success: '#ade8f4',
        warning: '#03045e'
      },
    },
  },
  icons: {
    iconfont: 'fa4',
  },
});
