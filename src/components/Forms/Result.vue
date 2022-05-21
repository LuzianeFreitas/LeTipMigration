<template>
    <div>
        <div>
            Conta
            {{formatCoin(result.totalSpend)}}
        </div>
        <div>
            Gorjeta
            {{formatCoin(result.tip)}}
        </div>
        <div>
            Total
            {{formatCoin(result.total)}}
        </div>
        <div>
            Por Pessoa
            {{formatCoin(result.totalPerson)}}
        </div>
        <div>
            Por Pessoa em R$
            {{result.totalPersonConvert}}
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
    
</style>