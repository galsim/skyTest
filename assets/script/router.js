import {mainPage} from './view/mainPage.js'
import {tariffPage} from './view/tariffPage.js'
import {optionPage} from './view/optionPage.js'

const routes = [
    { path: '/', component: mainPage },
    { path: '/:tariff', component: tariffPage},
    { path: '/:tariff/:id', component: optionPage}
  ];
  
export const router = new VueRouter({routes});