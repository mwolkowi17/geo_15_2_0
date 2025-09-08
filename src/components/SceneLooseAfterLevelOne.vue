<script setup>
import { onMounted, useTemplateRef } from 'vue';
defineEmits(['jeszcze-raz', 'jeszcze-raz-focus', 'koniec-gry']);

const props = defineProps({
    ifButtonOnFocus: Boolean
});

const infoEnd = useTemplateRef('info-end1')

onMounted(() => {
    // const elementToFocus = document.querySelector(".info-end1")
    // if (elementToFocus&&props.ifButtonOnFocus===true) {
    //     elementToFocus.focus();
    // }
    infoEnd.value.focus()
})

const przegrana_sound = new Audio(new URL('../assets/przegrana_gra.mp3', import.meta.url).href);
przegrana_sound.play();
</script>

<template>
    <div class="plansza-lose">
        <div class="info-end1" ref="info-end1" tabindex="0" aria-label="Niestety przegrałeś. Chcesz spróbować jeszcze raz?">
            <h2 class="naglowek">Niestety przegrałeś.</h2>
            <h2 class="napis">Chcesz spróbować jeszcze raz?</h2>
        </div>
        <button class="gram-jeszcze-1 my-button anim1" @click="$emit('jeszcze-raz')"
            @keydown.enter="$emit('jeszcze-raz-focus')" role="button">Zagraj jeszcze raz</button>
        <button class="zakoncz-gre my-button anim1" @click="$emit('koniec-gry')" role="button">Zakończ grę</button>
    </div>

</template>

<style scoped>
.plansza-lose {
    background-image: url("../assets/plansza_przegrales.png");
    background-size: 1568px 912px;
    height: 912px;
    width: 1568px;
    top: 100px;
    left: 120px;
    position: absolute;
    z-index: 2;
}

.info-end1 {
    position: absolute;
    height: 400px;
    width: 1200px;
    top: 100px;
    left: 185px
}

.info-end1:focus {
    outline: 2px solid #ffffff;
}


.naglowek {
    color: rgb(255, 255, 255);
    font-size: 100px;
    font-style: bold;
    font-weight: 600;
    font-family: "Proxima Nova", sans-serif;
    top: 0px;
    left: 160px;
    height: 88px;
    width: 333px;
    position: absolute;
    z-index: 2;
    white-space: nowrap;
}

.napis {
    color: rgb(255, 255, 255);
    font-size: 70px;
    font-style: bold;
    font-weight: 400;
    font-family: "Proxima Nova", sans-serif;
    white-space: nowrap;
    top: 200px;
    left: 120px;
    height: 88px;
    width: 333px;
    position: absolute;
    z-index: 2;
}


.gram-jeszcze-1 {
    /* background-image: url("../assets/gram_jeszcze_raz_button.png"); */
    color: rgb(29, 56, 80);
    font-size: 60px;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    background-size: 583px 192px;
    background-position: -1px -2px;
    position: absolute;
    top: 650px;
    left: 165px;
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
    /* outline: thick double #08e926; */
    outline: 5px solid #08e926;
}

.zakoncz-gre {
    /* background-image: url("../assets/zakoncz_gre_button.png"); */
    color: rgb(29, 56, 80);
    font-size: 60px;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    background-size: 583px 192px;
    background-position: -1px -2px;
    position: absolute;
    top: 650px;
    left: 820px;
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
    /* outline: thick double #08e926; */
    outline: 5px solid #08e926;
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