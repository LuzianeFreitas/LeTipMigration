<template>
    <div class="container-home">
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

<style>
    .container-home {
        height: calc(100vh - 30px);
    }

    .container-home > header {
        padding: 15px;
        text-align: center;
        margin: 30px 0px 30px 0px;
    }

    .container-home > .container-conteudo {
        width: 100vw;
        display: flex;
        justify-content: space-between;
    }
</style>