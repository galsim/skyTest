import {store} from './store.js'
import {router} from './router.js'


new Vue({
    el: '#app',
    router,
    store,
    created() {
        store.dispatch('loadTariffs')
    },
})