<script setup>
import { onMounted, useTemplateRef } from 'vue';
defineEmits(['wybor-levelu1', 'wybor-levelu1-focus']);

const props = defineProps({
    ifButtonOnFocusLevelOne: Boolean
});

const buttonFocus = useTemplateRef('button-focus')

onMounted(() => {
    if (props.ifButtonOnFocusLevelOne === true) {
        buttonFocus.value.focus()
    }
})
</script>

<template>
    <div class="tlo-level1" role="img" aria-label="Wybór poziomu">
        <h1 class="sr-only">Wybór poziomu</h1>
        <h2 class="title">Poziom trudności</h2>
    </div>
    <button class="level-button latwy my-button" ref="button-focus" @click="$emit('wybor-levelu1')"
        @keydown.enter="$emit('wybor-levelu1-focus')" role="button">Poziom 1</button>
    <button class="level-button trudny" role="button" aria-disabled="true" disabled>Poziom 2</button>
</template>

<style scoped>
.tlo-level1 {
    background-image: url("../assets/Plansza_pod_instruckje_i_wybor_poziomow.png");
    background-size: 1920px 1080px;
    height: 1080px;
    width: 1920px;
    top: 0px;
    left: 0px;
    position: absolute;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

.title {
    font-size: 5.3em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    position: absolute;
    top: 100px;
    left: 1050px
}

.level-button {
    font-size: 4.3em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    border-radius: 50px;
    width: 6em;
    height: 2em;
    border: 4px solid rgb(0, 0, 0);
    overflow: visible;
    position: absolute;
    left: 1180px;
}

.level-button:focus {
    outline: 5px solid #000000;
    outline-offset: 10px;
}

.latwy {

    background-color: rgb(255, 178, 0);
    top: 400px
}

.trudny {

    background-color: rgb(238, 114, 62);
    top: 650px
}
</style>