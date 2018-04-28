import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);//usara el estandar de traduccion
import messages from '@/translation';

export default new VueI18n({
    locale:'es',
    messages
});