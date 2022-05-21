<template>
    <div>
        <header>
            <h1>
                Le/Tip
            </h1>
        </header>

        <main class="container-conteudo">
            <converter @dataResults="getResult"/>
            <result :result="result"/>
        </main>
    </div>
</template>

<script>
import Converter from '../components/Forms/Converter.vue';
import Result from '../components/Forms/Result.vue';

export default {
    name: "Home",
    components: {
        Converter,
        Result
    },
    data() {
        return {
            result: {}
        }
    },
    methods: {
        getResult(result) {
            this.result = result;
        }
    },
}
</script>

<style scoped>
    .container-conteudo {
        display: flex;
    }
</style>