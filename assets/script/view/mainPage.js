export const mainPage = {
    template: `
        <div class="main-page">
            <div v-for="(tarrif, ind) in getTariffs" class="tariff-item" :key="'tarrif-list' + ind">
                <div class="tariff-item__title title">Тариф "{{ tarrif.title }}"</div>
                <router-link :to="'/' + links[tarrif.title]" class="tariff-item__info">
                    <div class="tariff-item__info__speed" :class="{'brown' : +tarrif.speed == 50, 'blue': +tarrif.speed == 100, 'red': +tarrif.speed == 200}">
                        {{ tarrif.speed}} Мбит/с
                    </div>

                    <div class="tariff-item__info__price">
                        {{ Math.min.apply(null, tarrif.tarifs.map(el => el.price / el.pay_period)) }}
                        -
                        {{ Math.max.apply(null, tarrif.tarifs.map(el => el.price / el.pay_period)) }}
                        &#x20bd;/мес
                    </div>

                    <div v-if="!!tarrif.free_options" class="tariff-item__free-options">
                        <div class="tariff-item__free-options__item" v-for="item in tarrif.free_options">
                            {{ item }}
                        </div>
                    </div>
                </router-link>
                <a :href="tarrif.link" class="tariff-item__link">
                    узнать подробнее на сайте www.sknt.ru
                </a>
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
        }  
    }
}