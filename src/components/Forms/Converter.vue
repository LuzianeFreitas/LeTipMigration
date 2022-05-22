<template>
<div class="container-form">
    <form class="form">
        <div class="input-converter">
            <span class="input-switch">
                EUR
                <label class="switch">
                    <input type="checkbox" v-model="form.coin">
                    <span class="slider round"></span>
                </label>
                USD
            </span>
        </div>
        <div class="input-converter">
            <label for="total-spend">Valor {{coinVerify}}</label>
            <input name="total-spend" id="total-spend" type="number" v-model="form.totalSpend"/>
        </div>
        <div class="input-converter">
            <label for="tip">Gorjeta: {{form.tip}} %</label>
            <span class="input-range">
                10<input name="tip" id="tip" type="range" v-model="form.tip" min="10" max="20"/>20
            </span>
        </div>
        <div class="input-converter">
            <label for="amount-people">Pessoas: {{form.amountPeople}}</label>
            <span class="input-range">
                2<input name="amount-people" id="amount-people" type="range" v-model="form.amountPeople" min="2" max="16"/>16
            </span>
        </div>
    </form>
</div>
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
            let baseURI = `https://v1.nocodeapi.com/luziane/cx/KAAhQTPFWkIqJhlX/rates/convert?amount=${this.calcPerPerson}&from=${this.form.coinSelect}&to=BRL`;

            this.$http.get(baseURI)
            .then((result) => {
                let convert = result.data.result.toFixed(2);

                let results = {
                    coinSelect: this.form.coinSelect,
                    totalSpend: this.form.totalSpend,
                    tip: this.calcTip,
                    total: this.calcTotal,
                    totalPerson: this.calcPerPerson,
                    totalPersonConvert: convert
                };

                this.$emit('dataResults',results);


                this.form.coin = false;
                this.form.coinSelect = '';
                this.form.totalSpend = 0;
                this.form.tip = 10,
                this.form.amountPeople = 2;
                this.calcTip = 0;
                this.calcTotal = 0;
                this.calcPerPerson = 0;
                this.time = null;

            })
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
    .container-form {
        width: 100%;
    }
    .form > .input-converter {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        margin-bottom: 15px;
    }

    .input-converter > .input-switch {
        display: flex;
        align-items: center;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 25px;

        margin: 0px 10px 0px 10px;
    }

    .switch > input { 
        opacity: 0;
        width: 0;
        height: 0;
    }

    .switch > .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .switch > .slider:before {
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        left: 9px;
        bottom: 5px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .switch > input:checked + .slider {
        background-color: #2196F3;
    }

    .switch > input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    .switch > input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .switch > .slider.round {
        border-radius: 34px;
    }

    .switch > .slider.round:before {
        border-radius: 50%;
    }

    .input-converter > #total-spend {
        border: 0;
        outline: none;
        border: 1px solid #c1c1c1;
        border-radius: 10px;
        padding: 10px;
    }

    .input-converter > input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }

    .input-converter > .input-range {
        display: flex;
        align-items: center;
    }

    .input-range > input {
        margin: 0px 10px 0px 10px;
    }
</style>