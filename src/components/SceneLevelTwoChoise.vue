<script setup>
import { ref, onMounted, useTemplateRef } from 'vue';
defineEmits(['wybor-levelu1', 'wybor-levelu1-focus', 'wybor-levelu2', 'wybor-levelu2-focus']);

const props = defineProps({
    ifButtonOnFocusLevelTwo: Boolean
});

const buttonFocus = useTemplateRef('button-focus')

onMounted(() => {
    //const elementToFocus = document.querySelector(".level-one-button")
    if (props.ifButtonOnFocusLevelTwo === true) {
       buttonFocus.value.focus()
    }

})
</script>

<template>
    <div class="tlo-level2" alt="tło" aria-label="plansza wyboru poziomu">
        <h1 class="sr-only">Wybór poziomu</h1>
        <h2 class="title">Poziom trudności</h2>
        <button class="level-button latwy my-button" ref="button-focus" @click="$emit('wybor-levelu1')"
            @keydown.enter="$emit('wybor-levelu1-focus')" role="button" aria-label="wybierz poziom jeden">Poziom
            1</button>
        <button class="level-button trudny my-button" @click="$emit('wybor-levelu2')"
            @keydown.enter="$emit('wybor-levelu2-focus')" role="button" aria-label="wybierz poziom dwa">Poziom
            2</button>
    </div>

</template>

<style scoped>
.tlo-level2 {
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
  /* border: 4px solid #08e926; */
  /* outline: thick double #08e926; */
  outline: 5px solid #e90808;
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