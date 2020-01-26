export const tariffPage = {
    template: `
        <div class="tarrif-page">
            <router-link class="tarrif-page__header header" to="/">Тариф "{{ getTariffs.find(el => el.title === currentRoute).title}}"</router-link>
            <div class="tarrif-page__wrapper">
                <div class="tarrif-page__item" v-for="item in getTariffs.find(el => el.title === currentRoute).tarifs">
                    <div class="tarrif-page__item__time title">
                        {{ item.pay_period }} 
                        {{ item.pay_period === 1 ? 'месяц' : (item.pay_period < 5 ? 'месяца' : 'месяцев') }}
                    </div>

                    <router-link :to="'/' + $route.params.tariff + '/' + item.ID" class="tarrif-page__item__link">
                        <div class="tarrif-page__item__price">
                            {{ item.price / item.pay_period }} &#x20bd;/мес
                        </div>

                        <div class="tarrif-page__item__one-pay">
                            разовый платеж - {{ item.price }} &#x20bd;
                        </div>

                        <div class="tarrif-page__item__sale" v-if="getTariffs.find(el => el.title === currentRoute).tarifs[0].price * item.pay_period - item.price > 0">
                            скидка 

                            {{ getTariffs.find(el => el.title === currentRoute).tarifs[0].price * item.pay_period - item.price }} &#x20bd;                   
                            
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    `,
    data: function() {
        return {
            links: {
                "Земля": "earth",
                "Вода": "water",
                "Огонь": "fire",
                "Вода HD": "waterhd",
                "Огонь HD": "firehd"
            }
        }
    },
    computed: {
        getTariffs: function() {
            return this.$store.getters.getTariffs
        },
        currentRoute: function() {
            return Object.keys(this.links).find(key => this.links[key] === this.$route.params.tariff);
        }
    }
}