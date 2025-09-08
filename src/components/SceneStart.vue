<script setup>
import { ref } from 'vue'

const emit = defineEmits(['koniec-planszy', 'instrukcja-focus']) //dodanie emitera eventu z klawiatury

const props = defineProps({
  ifButtonOnFocus: Boolean
})
const stageParent = ref(null)


</script>

<template>
  <div ref="stageParent" class="tlo" role="img" alt="plansza startu gry" aria-label="Polska w świecie">
    <div class="container-title">
      <h1 class="title">
        <span>Polska</span>
        <span class="block">w świecie</span>
      </h1>
    </div>
  </div>
  <button class="start my-button" @click="$emit('koniec-planszy')" @keydown.enter="$emit('instrukcja-focus')"
    role="button">Start</button>
</template>

<style scoped>
.tytul {
  color: greenyellow;
}

.tlo {
  background-image: url("../assets/Plansza_glowna.png");
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

.container-title {
  position: absolute;
  top:140px;
  left:1220px;
}

.title {
  font-size: 4.3em;
  font-style: bold;
  font-weight: 700;
  font-family: "Proxima Nova", sans-serif;
  text-align: center;

}

.block {
  display: block;
}

.start {
  color: rgb(0, 0, 0);
  font-size: 100px;
  font-style: bold;
  font-weight: 700;
  font-family: "Proxima Nova", sans-serif;
  background-size: 432px 168px;
  background-position: -2px -3px;
  background-repeat: no-repeat;
  position: absolute;
  top: 750px;
  left: 720px;
  width: 432px;
  height: 168px;
  border: 4px solid rgb(0, 0, 0);
  border-radius: 50px;
  overflow: visible;
}

.start:focus {
  outline: 5px solid #e90808;
}
</style>