<script setup>
import { ref,onMounted, useTemplateRef } from 'vue';

defineOptions({
    inheritAttrs: false
})

const props = defineProps({
 ifButtonOnFocusSceneWin: Boolean
});

const infoWin = useTemplateRef('info-win2')

defineEmits(['jeszcze-raz','jeszcze-raz-focus', 'koniec-gry', 'koniec-gry-focus']);

onMounted(() => {
    // const elementToFocus = document.querySelector(".info-win2")
    // if (elementToFocus&&props.ifButtonOnFocusSceneWin) {
    //     elementToFocus.focus();
    // }
    infoWin.value.focus()
})

const fanfary = new Audio(new URL('../assets/fanfary.mp3', import.meta.url).href);
fanfary.play();
</script>

<template>
    <div class="plansza-win">
         <div class="info-win2" ref="info-win2" tabindex="0" aria-label="Gratulacje! Udało ci się ukończyć grę.">
       <h1 class="naglowek">GRATULACJE!</h1>
       <h2 class="napis">Udało ci się ukończyć grę.</h2>
       </div>
    </div>
    <button class="gram-jeszcze-1 my-button anim1" @click="$emit('jeszcze-raz')" @keydown.enter="$emit('jeszcze-raz-focus')" role="img" alt="przycisk"
        aria-label="gram jeszcze raz">Zagraj jeszcze raz</button>
    <button class="zakoncz-gre my-button anim1" @click="$emit('koniec-gry')" @keydown.enter="$emit('koniec-gry-focus')" role="img" alt="przycisk"
        aria-label="zakończ grę">Zakończ grę</button>
</template>

<style scoped>
.plansza-win {
    background-image: url("../assets/plansza_wygrales_ukonczyles_poziom.png");
    background-size: 1568px 912px;
    height: 912px;
    width: 1568px;
    top: 100px;
    left: 120px;
    position: absolute;
    z-index: 2;
}

.info-win2{
   position: absolute;
    height: 400px;
    width: 1200px;
    top: 100px;
    left: 185px
}

.info-win2:focus{
    outline: 2px solid #ffffff;
}

.naglowek{
    color: rgb(255, 255, 255);
    font-size: 100px;
    font-style: bold;
    font-weight: 600;
    font-family: "Proxima Nova", sans-serif;
    margin-top: 60px;
    top: 0px;
    left: 280px;
    height: 88px;
    width: 333px;
    position: absolute;
    z-index: 2;
 
}

.napis{
    color: rgb(255, 255, 255);
    font-size: 70px;
    font-style: bold;
    font-weight: 400;
    font-family: "Proxima Nova", sans-serif;
    white-space: nowrap;
    top: 180px;
    left: 180px;
    height: 88px;
    width: 333px;
    position: absolute;
    z-index: 2;
}

.gram-jeszcze-1 {
    /* background-image: url("../assets/gram_dalej1.png"); */
    color: rgb(29, 56, 80);
    font-size: 60px;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    background-size: 583px 192px;
    background-position: -1px -1px;
    position: absolute;
    top: 750px;
    left: 255px;
    width: 583px;
    height: 120px;
    z-index: 3;
    border: 4px solid rgb(0, 0, 0);
    border-radius: 25px;
}

.gram-jeszcze-1:hover {
    cursor: pointer;
}

.gram-jeszcze-1:focus {
   outline: 5px solid #000000;
  outline-offset: 10px;
}

.zakoncz-gre {
 color: rgb(29, 56, 80);
    font-size: 60px;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    background-size: 583px 192px;
    background-position: -1px -1px;
    position: absolute;
    top: 750px;
    left: 960px;
    width: 583px;
    height: 120px;
    z-index: 3;
    border: 4px solid rgb(0, 0, 0);
    border-radius: 25px;
}

.zakoncz-gre:hover {
    cursor: pointer;
}

.zakoncz-gre:focus {
    outline: 5px solid #000000;
  outline-offset: 10px;
}

/* The animation code */
@keyframes example {

    /* from {background-color: red;}
  to {background-color: yellow;} */
    from {
        opacity: 0;
    }

    to {
        opacity: 100;
    }
}

/* The element to apply the animation to */
.anim1 {

    animation-name: example;
    animation-duration: 1s;
}
</style>
