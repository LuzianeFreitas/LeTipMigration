<template>
    <div class="container-result">
        <div>
            Conta
            <span>
                {{formatCoin(result.totalSpend)}}
            </span>
        </div>
        <div>
            Gorjeta
            <span>
                {{formatCoin(result.tip)}}
            </span>
        </div>
        <div>
            Total
            <span>
                {{formatCoin(result.total)}}
            </span>
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
    .container-result {
        width: 100%;
    }
</style>