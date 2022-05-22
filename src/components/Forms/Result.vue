<template>
    <div class="container-result">
        <div class="field-result">
            Conta
            <strong>
                {{formatCoin(result.totalSpend,this.result.coinSelect)}}
            </strong>
        </div>
        <div class="field-result">
            Gorjeta
            <strong>
                {{formatCoin(result.tip,this.result.coinSelect)}}
            </strong>
        </div>
        <div class="field-result">
            Total
            <strong>
                {{formatCoin(result.total,this.result.coinSelect)}}
            </strong>
        </div>
        <div class="field-result">
            Por Pessoa 
            <strong>
                {{formatCoin(result.totalPerson,this.result.coinSelect)}}
            </strong>     
        </div>
        <div class="field-result">
            Por Pessoa em R$
            <strong>
                {{formatCoin(result.totalPersonConvert, 'BRL')}}
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
        formatCoin(coin,typeCoin) {
            if(coin != undefined) {
                return new Intl.NumberFormat('de-DE', { style: 'currency', currency: typeCoin }).format(coin);
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