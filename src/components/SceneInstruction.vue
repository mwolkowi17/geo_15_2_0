<script setup>
import { onMounted, useTemplateRef } from 'vue'


const props = defineProps({
  ifButtonOnFocus: Boolean
});

defineEmits(['koniec-instrukcja', 'koniec-instrukcja-focus'])

const infoToFocuse = useTemplateRef('info-instrukcja')
onMounted(() => {

  //dodanie warunku propsu
  if (props.ifButtonOnFocus === true) {
    infoToFocuse.value.focus();
  }
})

const textToDisplay = "Gra składa się z dwóch poziomów – łatwego i trudnego." +
  " Rzucasz kostką i posuwasz się do przodu o tyle pól, ile oczek wyrzuciła kostka." +
  " Na początku gry otrzymujesz trzy szanse."

const textToDisplay2 = "– na polach oznaczonych znakiem zapytania czeka Cię pytanie."

const textToDisplay3 = "– na polach oznaczonych znakiem wykrzyknika  czekają Cię zasadzki."


const textToDisplay4 = "Każda błędna odpowiedź – to strata 1 szansy." +
  " Utrata wszystkich szans oznacza zakończenie gry. Dobra odpowiedź – to kolejny rzut kostką."

const textToDisplay5 = "Powodzenia!"

const textToDisplayCzytnik = "Gra składa się z dwóch poziomów – łatwego i trudnego." +
  " Rzucasz kostką i posuwasz się do przodu o tyle pól, ile oczek wyrzuciła kostka." +
  " Na początku gry otrzymujesz trzy szanse." +
  "– na polach oznaczonych znakiem zapytania czeka Cię pytanie." +
  "– na polach oznaczonych znakiem wykrzyknika  czekają Cię zasadzki." +
  "Każda błędna odpowiedź – to strata 1 szansy." +
  " Utrata wszystkich szans oznacza zakończenie gry. Dobra odpowiedź – to kolejny rzut kostką." +
  "Powodzenia!"

</script>
<template>
  <div class="tlo1" aria-label="Zasady gry">
    <div class="container">
      <div class="info-instrukcja" ref="info-instrukcja" tabindex="0" role="region" aria-live="polite"
        :aria-label="textToDisplayCzytnik">
        <h1 class="instrukcja-title">Zasady gry</h1>
        <div class="container-instrukcja">
          <span class="instrukcja" v-html="textToDisplay"></span>
          <div class="icon-text">
            <img class="pytajnik" alt="" src="../assets/znak_zapytania_do_instrukcji.png" />
            <span class="instrukcja" v-html="textToDisplay2"></span>
          </div>
          <img class="wykrzyknik" alt="" src="../assets/wykrzyknik_do_instrukcji.png" />
          <span class="instrukcja" v-html="textToDisplay3"></span>
          <p class="instrukcja instrukcja-par1" v-html="textToDisplay4"></p>
          <p class="instrukcja instrukcja-par2" v-html="textToDisplay5"></p>
        </div>
      </div>

    </div>
    <button class="dalej my-button anim1" @click="$emit('koniec-instrukcja')"
      @keydown.enter="$emit('koniec-instrukcja-focus')" role="button">Dalej</button>
  </div>


</template>

<style scoped>
.tlo1 {
  background-image: url("../assets/Plansza_pod_instruckje_i_wybor_poziomow.png");
  background-size: 1920px 1080px;
  height: 1080px;
  width: 1920px;
  top: 0px;
  left: 0px;
  position: absolute;
}

.container {
  position: absolute;
  height: 900px;
  width: 1000px;
  background-color: white;
  top: 85px;
  left: 840px;
  border: 4px solid black;
  border-radius: 25px;
}

.info-instrukcja {
  height: 760px;
  width: 910px;
  top: 40px;
  left: 40px;
  position: absolute;
  overflow: visible;
  border: 2px solid transparent;
}

.info-instrukcja:focus {
  border: 2px solid black;
}

.container-instrukcja {
  display: inline-block;
  padding: .5rem 1rem;
  /* width: 1300px; */
  /* height: 565px;
  width: 1400px; */
  overflow: auto;
}

.instrukcja-title {
  /* position: absolute; */
  color: rgb(0, 0, 0);
  font-size: 5em;
  font-style: normal;
  font-weight: 400;
  font-family: "Proxima Nova", sans-serif;
  margin: 0px;
  text-align: center;
  /* line-height: 1.5; */
  /* top: 5px;
  left: 705px; */
}

.icon-text {
  display: block
}

.instrukcja {
  color: rgb(0, 0, 0);
  /* font-size: 41px; */
  font-size: 2em;
  font-style: normal;
  font-weight: 300;
  font-family: "Proxima Nova", sans-serif;
  line-height: 1.7;
  position: relative;
  /* display: block; */
}

.pytajnik {
  position: relative;
  /* top: 283px;
  left: 355px; */
  margin-top: .8em;
  margin-bottom: -1.2em;
  margin-right: 1em;
  /* left: -90px;
  top: 35px */
}

.wykrzyknik {
  position: relative;
  /* top: 475px;
  left: 715px; */
  margin-top: .8em;
  margin-bottom: -1.2em;
  margin-right: 1em;

}

.instrukcja-par1 {
  margin-top: .6em;
  margin-bottom: 0em;
}

.instrukcja-par2 {
  margin-top: 0em;
  margin-bottom: 0em;
}

.dalej {
  font-size: 4.3em;
  font-style: bold;
  font-weight: 700;
  font-family: "Proxima Nova", sans-serif;
  border-radius: 50px;
  width: 4em;
  height: 1.5em;
  border: 4px solid rgb(0, 0, 0);
  background-color: rgb(225, 178, 0);
  overflow: visible;
  position: absolute;
  top: 940px;
  left: 1200px;
  z-index: 2;
}

.dalej:focus {
  /* border: 4px solid #08e926; */
  /* outline: thick double #08e926; */
  outline: 5px solid #e90808;
}


/* The animation code */
@keyframes example {

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