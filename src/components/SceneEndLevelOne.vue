<script setup>
import { onMounted, useTemplateRef } from 'vue';

const props = defineProps({
    ifButtonOnFocus: Boolean
});

const infoWin = useTemplateRef('info-win1')

onMounted(() => {
    // const elementToFocus = document.querySelector(".info-win1")
    // if (elementToFocus&&props.ifButtonOnFocus===true) {
    //     elementToFocus.focus();
    // }
    infoWin.value.focus()
})

defineEmits(['gram-dalej', 'gram-dalej-focus', 'koniec-gry', 'koniec-gry-focus']);

const fanfary = new Audio(new URL('../assets/fanfary.mp3', import.meta.url).href);
fanfary.play();
</script>

<template>
    <div class="plansza-win-level-one">
        <div class="info-win1" ref="info-win1" tabindex="0" aria-label="Brawo! Udało Ci się ukończyć Poziom 1, chcesz grać dalej?">
            <h1 class="naglowek">Brawo!</h1>
            <p class="napis">Udało Ci się ukończyć <b>Poziom 1,</b></p>
            <p class="napis-2">chcesz grać dalej?</p>
        </div>
        <button class="gram-jeszcze-1-level-one my-button anim1" @click="$emit('gram-dalej')"
            @keydown.enter="$emit('gram-dalej-focus')" role="button">Gram dalej</button>
        <button class="zakoncz-gre my-button anim1" @click="$emit('koniec-gry')"
            @keydown.enter="$emit('koniec-gry-focus')" role="button">Zakończ grę</button>
    </div>


</template>

<style scoped>
.plansza-win-level-one {
    background-image: url("../assets/plansza_wygrales_ukonczyles_poziom.png");
    background-size: 1568px 912px;
    height: 912px;
    width: 1568px;
    top: 100px;
    left: 120px;
    position: absolute;
    z-index: 2;
}

.info-win1 {
    position: absolute;
    height: 400px;
    width: 1200px;
    top: 100px;
    left: 185px
}

.info-win1:focus {
     outline: 5px solid #000000;
  outline-offset: 10px;
}

.naglowek {
    color: rgb(255, 255, 255);
    font-size: 100px;
    font-style: bold;
    font-weight: 600;
    font-family: "Proxima Nova", sans-serif;
    margin-top: 0px;
    top: 0px;
    left: 430px;
    height: 88px;
    width: 333px;
    position: absolute;
    z-index: 2;

}

.napis {
    color: rgb(255, 255, 255);
    font-size: 70px;
    font-style: bold;
    font-weight: 400;
    font-family: "Proxima Nova", sans-serif;
    white-space: nowrap;
    top: 80px;
    left: 120px;
    height: 88px;
    width: 333px;
    position: absolute;
    z-index: 2;
}

.napis-2 {
    color: rgb(255, 255, 255);
    font-size: 70px;
    font-style: bold;
    font-weight: 400;
    font-family: "Proxima Nova", sans-serif;
    white-space: nowrap;
    top: 180px;
    left: 330px;
    height: 88px;
    width: 333px;
    position: absolute;
    z-index: 2;
}

.gram-jeszcze-1-level-one {
    /* background-image: url("../assets/gram_dalej1.png"); */
    color: rgb(29, 56, 80);
    font-size: 80px;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    background-size: 583px 192px;
    background-position: -1px -1px;
    position: absolute;
    top: 650px;
    left: 165px;
    width: 583px;
    height: 120px;
    z-index: 3;
    border: 4px solid rgb(0, 0, 0);
    border-radius: 25px;
}

.gram-jeszcze-1-level-one:hover {
    cursor: pointer;
}

.gram-jeszcze-1-level-one:focus {
     outline: 5px solid #000000;
  outline-offset: 10px;
}

.zakoncz-gre {
    /* background-image: url("../assets/zakoncz_gre_button.png"); */
    color: rgb(29, 56, 80);
    font-size: 80px;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    background-size: 583px 192px;
    background-position: -1px -1px;
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