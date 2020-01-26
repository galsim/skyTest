export const mainPage = {
    template: '<div class="container"><router-link to="home">link to home</router-link><div>{{ getTarrifs }}</div></div>',
    computed: {
        getTarrifs() {
            return this.$store.getters.getTariffs
        }
    }
}