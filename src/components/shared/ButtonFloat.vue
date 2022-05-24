<template>
    <button type="text" class="button-float" @click="sendEvent" :disabled="disabledButton" title="Preencha o formulário antes de ver o resultado!">
        <img :src="require('@/assets/'+icon)">
    </button>
</template>

<script>
export default {
    name: 'ButtonFloat',
    props: {
        icon: String,
        disabledButton: {type: Boolean, default: false}
    },
    methods: {
        sendEvent() {
            this.$emit('change');
        }
    },
}
</script>

<style>
    .button-float {
        position: fixed;
        bottom:20px;
        right:10px;

        border: 0;
        width: 44px;
        height: 44px;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        transition: hover .2s;
    }

    .button-float:hover {
        box-shadow: 0 0 1em rgb(205, 205, 205);
    }

    .button-float > img {
        width: 24px;
        height: 24px;
    }
</style>
