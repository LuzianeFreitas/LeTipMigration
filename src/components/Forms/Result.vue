<template>
    <div class="container-result">
        <div class="field-result">
            Conta
            <strong>
                {{formatCoin(result.totalSpend)}}
            </strong>
        </div>
        <div class="field-result">
            Gorjeta
            <strong>
                {{formatCoin(result.tip)}}
            </strong>
        </div>
        <div class="field-result">
            Total
            <strong>
                {{formatCoin(result.total)}}
            </strong>
        </div>
        <div class="field-result">
            Por Pessoa 
            <strong>
                {{formatCoin(result.totalPerson)}}
            </strong>     
        </div>
        <div class="field-result">
            Por Pessoa em R$
            <strong>
                {{result.totalPersonConvert}}
            </strong>
        </div>

    </div>
</template>

<script>
export default {
    name: "Result",
    props: {
        result: {}
    },
    methods: {
        formatCoin(coin) {
            if(coin != undefined) {
                return new Intl.NumberFormat('de-DE', { style: 'currency', currency: this.result.coinSelect }).format(coin);
            }
        }
    }
}
</script>

<style scoped>
    .container-result {
        width: 100%;
    }

    .container-result > .field-result {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: 15px;
    }
</style>