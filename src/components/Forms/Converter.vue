<template>
    <form>
        <div>
            EUR
            <label class="switch">
                <input type="checkbox" v-model="coin">
                <span class="slider round"></span>
            </label>
            USD
        </div>
        <div class="input-converter">
            <label for="total-spend">Valor {{coinVerify}}</label>
            <input name="total-spend" id="total-spend" type="number" v-model="totalSpend"/>
        </div>
        <div class="input-converter">
            <label for="tip">Gorjeta: {{tip}}</label>
            <span>
                10<input name="tip" id="tip" type="range" v-model="tip" min="10" max="20"/>20
            </span>
        </div>
        <div class="input-converter">
            <label for="amount-people">Pessoas: {{amountPeople}}</label>
            <span>
                2<input name="amount-people" id="amount-people" type="range" v-model="amountPeople" min="2" max="16"/>16
            </span>
        </div>
    </form>
</template>

<script>
export default {
    name: "Converter",
    data() {
        return {
            coin: false,
            totalSpend: 0,
            tip: 10,
            amountPeople: 2,
        }
    },
    computed: {
        coinVerify() {
            if(this.coin) return '$';
            else return '€';
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