import {pageContent} from './components/pageContent.js'
import {mainPage} from './components/mainPage.js'

const routes = [
    { path: '/', component: mainPage },
    { path: '/home', component: pageContent },
  ];
  
export const router = new VueRouter({routes});