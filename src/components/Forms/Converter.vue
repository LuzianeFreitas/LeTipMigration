<template>
    <form>
        <div>
            EUR
            <label class="switch">
                <input type="checkbox" v-model="form.coin">
                <span class="slider round"></span>
            </label>
            USD
        </div>
        <div class="input-converter">
            <label for="total-spend">Valor {{coinVerify}}</label>
            <input name="total-spend" id="total-spend" type="number" v-model="form.totalSpend"/>
        </div>
        <div class="input-converter">
            <label for="tip">Gorjeta: {{form.tip}}</label>
            <span>
                10<input name="tip" id="tip" type="range" v-model="form.tip" min="10" max="20"/>20
            </span>
        </div>
        <div class="input-converter">
            <label for="amount-people">Pessoas: {{form.amountPeople}}</label>
            <span>
                2<input name="amount-people" id="amount-people" type="range" v-model="form.amountPeople" min="2" max="16"/>16
            </span>
        </div>
    </form>
</template>

<script>
export default {
    name: "Converter",
    data() {
        return {
            form: {
                coin: false,
                coinSelect: '',
                totalSpend: 0,
                tip: 10,
                amountPeople: 2,
            },
            calcTip: 0,
            calcTotal: 0,
            calcPerPerson: 0,
            time: null
        }
    },
    methods: {
        calculation() {
            this.calcTip = ((this.form.tip / 100) * this.form.totalSpend);
            this.calcTip = parseFloat(this.calcTip.toFixed(2));

            this.calcTotal = (parseFloat(this.calcTip) + parseFloat(this.form.totalSpend));
            this.calcTotal = parseFloat(this.calcTotal.toFixed(2));

            this.calcPerPerson = this.calcTotal / parseInt(this.form.amountPeople);
            this.calcPerPerson = parseFloat(this.calcPerPerson.toFixed(2));

            if(this.form.coin) {
                this.form.coinSelect = 'USD';
            } else { 
                this.form.coinSelect = 'EUR';
            }
            
            window.clearTimeout(this.time);

            this.time = window.setTimeout(() => {
                this.getConvert();
            }, 2000);
        },
        getConvert() {
            // let baseURI = `https://v1.nocodeapi.com/luziane/cx/KAAhQTPFWkIqJhlX/rates/convert?amount=${this.calcPerPerson}from=${this.coinSelect}&to=BRL`;

            // this.$http.get(baseURI)
            // .then((result) => {
            //     console.log(result.data);
            // })

            let results = {
                coinSelect: this.form.coinSelect,
                totalSpend: this.form.totalSpend,
                tip: this.calcTip,
                total: this.calcTotal,
                totalPerson: this.calcPerPerson,
                totalPersonConvert: 0
            };

            this.$emit('dataResults',results);
        },
    },
    computed: {
        coinVerify() {
            if(this.form.coin) return '$';
            else return '€';
        },
    },
    watch: {
       form: {
            handler(val){
                if(val.totalSpend != 0) {
                    this.calculation();
                }
            },
            deep: true
       }
    }
}
</script>

<style scoped>
    .input-converter {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>