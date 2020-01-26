export const optionPage = {
    template: `
        <div class="option-page">
            <router-link :to="'/' + $route.params.tariff" class="header">Выбор тарифа</router-link>
            <div class="option-page__title title">Тариф "{{ getTariffs.find(el => el.title === currentRoute).tarifs.find(el => +el.ID === +$route.params.id).title}}"</div>
            <div class="option-page__info">
                <div class="option-page__pay-period">
                    Период оплаты - 
                    {{ getTariffs.find(el => el.title === currentRoute).tarifs.find(el => +el.ID === +$route.params.id).pay_period }}
                    {{ getTariffs.find(el => el.title === currentRoute).tarifs.find(el => +el.ID === +$route.params.id).pay_period === 1 
                        ? 'месяц'
                        : (getTariffs.find(el => el.title === currentRoute).tarifs.find(el => +el.ID === +$route.params.id).pay_period < 4) ? 'месяца' : 'месяцев'}}
                    <div>{{ getTariffs.find(el => el.title === currentRoute).tarifs.find(el => +el.ID === +$route.params.id).price / getTariffs.find(el => el.title === currentRoute).tarifs.find(el => +el.ID === +$route.params.id).pay_period }} &#x20bd;/мес</div>
                </div>
                <div class="option-page__pay">
                        разовый платеж - {{ getTariffs.find(el => el.title === currentRoute).tarifs.find(el => +el.ID === +$route.params.id).price }} &#x20bd;
                        <div>со счета спишется - {{ getTariffs.find(el => el.title === currentRoute).tarifs.find(el => +el.ID === +$route.params.id).price }} &#x20bd;</div>
                </div>
                <div class="option-page__time">
                    <div>вступит в силу - сегодня</div>
                    <div>активно до - 
                    {{ currentDate(getTariffs.find(el => el.title === currentRoute).tarifs.find(el => +el.ID === +$route.params.id).pay_period).getDay() < 10 
                        ? '0' + currentDate(getTariffs.find(el => el.title === currentRoute).tarifs.find(el => +el.ID === +$route.params.id).pay_period).getDay() 
                        : currentDate(getTariffs.find(el => el.title === currentRoute).tarifs.find(el => +el.ID === +$route.params.id).pay_period).getDay()  }}.{{ currentDate(getTariffs.find(el => el.title === currentRoute).tarifs.find(el => +el.ID === +$route.params.id).pay_period).getMonth() < 10 
                            ? '0' + currentDate(getTariffs.find(el => el.title === currentRoute).tarifs.find(el => +el.ID === +$route.params.id).pay_period).getMonth()
                            : currentDate(getTariffs.find(el => el.title === currentRoute).tarifs.find(el => +el.ID === +$route.params.id).pay_period).getMonth() }}.{{ currentDate(getTariffs.find(el => el.title === currentRoute).tarifs.find(el => +el.ID === +$route.params.id).pay_period).getFullYear() }}
                    </div>
                </div>
            </div>
            <div class="option-page__button-container">
                <div class="option-page__button">Выбрать</div>
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
        },
        getDate: function() {
            let data = new Date()
            return data
        }
    },
    methods: {
        currentDate(month) {
            let data = new Date()
            data.setTime(data.getTime() + 1000  * 60 * 60 * 24 * 31 * month) 

            return data
        }
    }
}