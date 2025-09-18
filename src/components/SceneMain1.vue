<script setup>
import { ref, onMounted, useTemplateRef, nextTick } from "vue";
import { metodyPomocnicze } from "../lib/metody-pomocnicze";
import { PawnMaps } from "../lib/pawn-maps";
import { Traps } from "../lib/traps";
import SceneQuizz1 from './SceneQuizz1.vue';
import SceneTrap from './SceneTrap.vue';


const emit = defineEmits([
    "koniec-etap1",
    "przegrana",
    "koniec-etap1-focus",
    "przegrana-focus",
    "odejmij-gwiazdke",
    "reset-gwiazdek"
]);

const props = defineProps({
    ifButtonOnFocusMain1: Boolean,
});

//referencje do el html używane do obsługi focusa
const button_rzut = useTemplateRef('rzut1')
const napisRuch = useTemplateRef('ruchGracza')
const kostkaOczka = useTemplateRef('oczkaKostka')

//obsługa focusa
const ifQuizzFocusOn = ref(false)
const ifTrapFocusOn = ref(false)
const ifRzucKostkaButtonOnFocus = ref(false)
const ifFocusEmitGlobal = ref(false)

onMounted(() => {
    if (props.ifButtonOnFocusMain1 === true) {
        button_rzut.value.focus()
    }

    emit('reset-gwiazdek')
})

//to chyba nie jest potrzebne ale jest w funckji
const postac1 = ref("postać")

//pozycja startowa gracza nr 1
const krok_gracz1_na_planszy = ref(0);

//roboczo do edycji pytań
//const krok_gracz1_na_planszy = ref(1);

//zdefinowanie pozycji (mapy wszystkich pozycji) gracza nr 1
const pozycje_pionka_gracza1 = new PawnMaps().pionek_gracza1;

//początkowa ilość "szans"
const ilosc_szans = ref(3);

//widoczność przycisku Rzuć kostką
const if_rzuc_kostka = ref(true)

//informacja o ruchu gracza
const if_ruch_gracza = ref(false)

//widoczność kostki 
const if_widok_kostki = ref(false);

//widoczność planszy pułapka
const if_widok_pulapki = ref(false)

//widoczność planszy quizz1
const if_widok_quizz1 = ref(false);
//roboczo do edycji pytań
//const if_widok_quizz1 = ref(true);

//wartości propsów planszy zasadzka
const titleTrap = ref("Zasadzka!")
const textTrap = ref("Cofasz się o 2 pola.")

//widoki szans na planszy

const if_szansa1 = ref(true)
const if_szansa2 = ref(true)
const if_szansa3 = ref(true)

//const obrazek_kostki = ref('../assets/kostka_1oczko.png')

let kolekcja_widoków_kostki = [
    false,
    false,
    false,
    false,
    false,
    false,
]

const isSet1 = ref(kolekcja_widoków_kostki[0])
const isSet2 = ref(kolekcja_widoków_kostki[1])
const isSet3 = ref(kolekcja_widoków_kostki[2])
const isSet4 = ref(kolekcja_widoków_kostki[3])
const isSet5 = ref(kolekcja_widoków_kostki[4])
const isSet6 = ref(kolekcja_widoków_kostki[5])


//pozycja pionka
const pionek_top = ref(205);
const pionek_left = ref(110);

//flaga true/false pokazująca czy gracz nr 1 nie przeszedł całej planszy, wartość falsce wskazuje zakończenie ruchu na planszy
let kontrolka_ruch_na_planszy = true;

// licznik ruchu na planszy - faktyczny ruch pionka
let ruch_lokalny = 0;

let x;

//instancja obieku odpowiadającego za pułapki
const trap = new Traps();

// nowa funkcjonalnosc ograniczająca ilośc wpadek - zmienne sterujace - trzeba dodać dodawanie wartosci-liczba wpadek-przy pułapce!!!!
const liczba_wyrzucona = ref(0)
const liczba_wpadek = ref(0)


const wyrzuconaWartoscKostki = ref("Kostka - liczba oczek: " + (x + 1));

async function kostka_click() {

    if_ruch_gracza.value = true
    await nextTick()
    // if(napisRuch.value){
    // napisRuch.value.focus()
    //}
    if_rzuc_kostka.value = false //  ukryj przycisk rzuć kostką




    //ruchGraczaNapis.then((res) => { res.focus() })

    //========================================================================================
    let i = 0; //  set your counter to 0
    //========================================================================================
    if_widok_kostki.value = true
    console.log("rzut")

    // nowa funkcjonalnosc ograniczająca ilośc wpadek  
    let wartoscWyrzuconaFirst = metodyPomocnicze.rzucaj()
    console.log("oczka: " + wartoscWyrzuconaFirst)
    await nextTick()
    kostkaOczka.value.focus()
    if (liczba_wpadek.value < 2) {
        console.log("ilość wpadek: " + liczba_wpadek.value)
        liczba_wyrzucona.value = wartoscWyrzuconaFirst
    }
    if (liczba_wpadek.value >= 2 && trap.czy_polapka(krok_gracz1_na_planszy.value + wartoscWyrzuconaFirst + 1) === true) {
        console.log("zmieniam")

        if (wartoscWyrzuconaFirst < 5) {
            liczba_wyrzucona.value = wartoscWyrzuconaFirst + 1
        } else {
            liczba_wyrzucona.value = wartoscWyrzuconaFirst - 1
        }
    } else {
        console.log("ilość wpadek powyżej: " + liczba_wpadek.value)
        liczba_wyrzucona.value = wartoscWyrzuconaFirst
    }
    //========================================koniec tej funcjonalnosci===============================================

    x = liczba_wyrzucona.value
    wyrzuconaWartoscKostki.value = "Kostka - liczba oczek: " + (x + 1);
    let wynik_rzutu = x
    console.log(x)
    for (let i = 0; i < 6; i++) {
        if (i === x) {
            kolekcja_widoków_kostki[i] = true
        }
        else {
            kolekcja_widoków_kostki[i] = false
        }


        isSet1.value = kolekcja_widoków_kostki[0]
        isSet2.value = kolekcja_widoków_kostki[1]
        isSet3.value = kolekcja_widoków_kostki[2]
        isSet4.value = kolekcja_widoków_kostki[3]
        isSet5.value = kolekcja_widoków_kostki[4]
        isSet6.value = kolekcja_widoków_kostki[5]


    }

    console.log(kolekcja_widoków_kostki)

    //!!============================ruch pionka loop =========================================
    const myLoopPionek = (arg_A, arg_B, arg_C) => {
        //  create a loop function
        setTimeout(function () {
            //  call a 1s setTimeout when the loop is called

            pionek_left.value = arg_B[arg_C.value + i][0]
            pionek_top.value = arg_B[arg_C.value + i][1]

            //robocze ustawienie pozycji pionka na planszy dla celów ustwień bibliotek
            // pionek_left.value = arg_B[1][0]
            // pionek_top.value = arg_B[1][1]


            //console.log(arg_B)
            console.log(arg_C.value)
            console.log(arg_B[arg_C.value + i])



            //arg_A.setPosition(arg_B[arg_C + i][0], arg_B[arg_C + i][1]);

            if (ruch_lokalny >= 15) {
                console.log("Zwycięstwo!");
                kontrolka_ruch_na_planszy = false;
                console.log("wygrałeś!!!");
                wywolanie_sceny_koncowej();
            }


            ruch_lokalny++;

            i++; //  increment the counter

            // if (i <= wynik_rzutu && ruch_lokalny <= 15) {
            if (i <= wynik_rzutu && ruch_lokalny <= 15) {
                myLoopPionek(arg_A, arg_B, arg_C); //  ..  again which will trigger another                         
            } else {
                dodanie_krokow();
                pulapka_czy_quizz();
                //if_ruch_gracza.value=false;
            }


            //  ..  setTimeout()

        }, 1000);
    };


    function dodanie_krokow() {
        krok_gracz1_na_planszy.value =
            krok_gracz1_na_planszy.value + wynik_rzutu + 1;
    }


    if (kontrolka_ruch_na_planszy === true) {
        //  start the loop
        myLoopPionek(
            postac1,
            pozycje_pionka_gracza1,
            krok_gracz1_na_planszy,

        )

        console.log("krok na planszy: " + krok_gracz1_na_planszy.value);
    }



    const pulapka_czy_quizz = () => {
        console.log("sprawdzam czy pułapka albo quizz");
        console.log(i)
        console.log("wynik rzutu: " + wynik_rzutu);
        console.log("kontrolka ruch na planszy: " + kontrolka_ruch_na_planszy);
        //if (i === (wynik_rzutu+1) && kontrolka_ruch_na_planszy === true) {
        if (kontrolka_ruch_na_planszy === true) {
            console.log("pulapka albo quizz!!!");
            console.log("krok gracza na planszy: " + krok_gracz1_na_planszy.value);
            // sprawdzenie czy gracz wpadł w pułapkę
            console.log(trap.czy_polapka(krok_gracz1_na_planszy.value));
            //  tu w momencie kiedy gracz zanjdzie się na polu pułapka będzie go cofało a jak nie to odpala quizz
            if (trap.czy_polapka(krok_gracz1_na_planszy.value) === true) {
                console.log("wpadka");
                //dodaje wpadki do licznika wpadek
                liczba_wpadek.value = liczba_wpadek.value + 1
                //  pokazuje planszę pułapki
                setTimeout(async () => {
                    if_widok_pulapki.value = true;
                    await nextTick()
                    titleTrap.value = metodyPomocnicze.pokazTekstPulapki(krok_gracz1_na_planszy.value)[0]
                    textTrap.value = metodyPomocnicze.pokazTekstPulapki(krok_gracz1_na_planszy.value)[1]
                    const sound_cofasz = new Audio(new URL('../assets/zla_odp.mp3', import.meta.url).href);
                    sound_cofasz.play();
                }, 1000)

            } else {
                console.log("quiz");
                setTimeout(() => {
                    if_widok_quizz1.value = true
                }, 1000)
            }
        }
    };

    const wywolanie_sceny_koncowej = () => {
        console.log("wywołanie planszy wyboru etapu nr 2");
        if (ifFocusEmitGlobal.value === false) {
            emit('koniec-etap1')
        }

        if (ifFocusEmitGlobal.value === true) {
            emit('koniec-etap1-focus')
        }

    };


}

const koniecQuizu = () => {
    if (krok_gracz1_na_planszy.value < 15) {
        if_rzuc_kostka.value = true
        if_ruch_gracza.value = false
        const buttonRzutVis = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(document.querySelector(".rzut1"))
            }, 300);
        })
    }

    if (krok_gracz1_na_planszy.value === 15) {
        if_rzuc_kostka.value = false
        //if_ruch_gracza.value = false
        console.log("plansza win level!")
        emit('koniec-etap1')

    }
}

const koniecQuizuFocusOn = async () => {
    if (krok_gracz1_na_planszy.value < 15) {
        //
        //if_rzuc_kostka.value = true

        napisRuch.value.focus()

        if_ruch_gracza.value = false
        napisRuch.value.focus()
        setTimeout(() => {

            if_rzuc_kostka.value = true

        }, 1000)

        setTimeout(() => {
            //const button_rzut2=useTemplateRef('rzut1')
            if_ruch_gracza.value = false
            button_rzut.value.focus()
        }, 1200)

        // setTimeout(() => {
        //     if_ruch_gracza.value = false
        // }, 2300) //było 2500 i było ok

        // const buttonRzutVis = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(document.querySelector(".rzut1"))
        //     }, 300);
        // })

        // buttonRzutVis.then((res) => {
        //     res.focus()
        // })
    }

    if (krok_gracz1_na_planszy.value === 15) {
        if_rzuc_kostka.value = false
        //if_ruch_gracza.value = false
        console.log("plansza win level focus!")
        ifFocusEmitGlobal.value = true
        emit('koniec-etap1-focus')

    }

}

const koniecPulapki = () => {
    console.log("emmiter - krok do tyłu");
    console.log(krok_gracz1_na_planszy.value);

    if (krok_gracz1_na_planszy.value === 3) {
        krok_gracz1_na_planszy.value = krok_gracz1_na_planszy.value + 1;
        ruch_lokalny = ruch_lokalny + 1;
        console.log(krok_gracz1_na_planszy.value);
        pionek_left.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][0]
        pionek_top.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][1]
    }
    if (krok_gracz1_na_planszy.value === 6) {
        krok_gracz1_na_planszy.value = krok_gracz1_na_planszy.value - 2;
        ruch_lokalny = ruch_lokalny - 2;
        console.log(krok_gracz1_na_planszy.value);
        pionek_left.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][0]
        pionek_top.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][1]
    }
    if (krok_gracz1_na_planszy.value === 8) {
        krok_gracz1_na_planszy.value = krok_gracz1_na_planszy.value + 2;
        ruch_lokalny = ruch_lokalny + 2;
        console.log(krok_gracz1_na_planszy.value);
        pionek_left.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][0]
        pionek_top.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][1]
    }
    if (krok_gracz1_na_planszy.value === 11) {
        krok_gracz1_na_planszy.value = 0;
        ruch_lokalny = 0;
        console.log(krok_gracz1_na_planszy.value);
        pionek_left.value = 110
        pionek_top.value = 205
    }
    if (krok_gracz1_na_planszy.value === 14) {
        krok_gracz1_na_planszy.value = krok_gracz1_na_planszy.value - 1;
        ruch_lokalny = ruch_lokalny - 1;
        console.log(krok_gracz1_na_planszy.value);
        pionek_left.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][0]
        pionek_top.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][1]
    }

    // koniec tego rozwiązania

    if_ruch_gracza.value = false
    if_rzuc_kostka.value = true;

}

const koniecPulapkiFocusOn = async () => {
    console.log("emmiter - krok do tyłu");
    console.log(krok_gracz1_na_planszy.value);
    if (krok_gracz1_na_planszy.value === 3) {
        krok_gracz1_na_planszy.value = krok_gracz1_na_planszy.value + 1;
        ruch_lokalny = ruch_lokalny + 1;
        console.log(krok_gracz1_na_planszy.value);
        pionek_left.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][0]
        pionek_top.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][1]
    }
    if (krok_gracz1_na_planszy.value === 6) {
        krok_gracz1_na_planszy.value = krok_gracz1_na_planszy.value - 2;
        ruch_lokalny = ruch_lokalny - 2;
        console.log(krok_gracz1_na_planszy.value);
        pionek_left.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][0]
        pionek_top.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][1]
    }
    if (krok_gracz1_na_planszy.value === 8) {
        krok_gracz1_na_planszy.value = krok_gracz1_na_planszy.value + 2;
        ruch_lokalny = ruch_lokalny + 2;
        console.log(krok_gracz1_na_planszy.value);
        pionek_left.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][0]
        pionek_top.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][1]
    }
    if (krok_gracz1_na_planszy.value === 11) {
        krok_gracz1_na_planszy.value = 0;
        ruch_lokalny = 0;
        console.log(krok_gracz1_na_planszy.value);
        pionek_left.value = 30
        pionek_top.value = 330
    }
    if (krok_gracz1_na_planszy.value === 14) {
        krok_gracz1_na_planszy.value = krok_gracz1_na_planszy.value - 1;
        ruch_lokalny = ruch_lokalny - 1;
        console.log(krok_gracz1_na_planszy.value);
        pionek_left.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][0]
        pionek_top.value = pozycje_pionka_gracza1[krok_gracz1_na_planszy.value - 1][1]
    }

    // koniec tego rozwiązania

    // buttonRzutVis.then((res) => { res.focus() })
    napisRuch.value.focus()


    setTimeout(() => {

        if_rzuc_kostka.value = true

    }, 1000)

    setTimeout(() => {
        //const button_rzut2=useTemplateRef('rzut1')
        if_ruch_gracza.value = false
        button_rzut.value.focus()


    }, 2000)

    // setTimeout(() => {
    //     if_ruch_gracza.value = false
    // }, 2500)


}

const odejmijSzanse = () => {
    console.log("odejmij szanse");
    ilosc_szans.value = ilosc_szans.value - 1;

    console.log("ilosc_szans:" + ilosc_szans.value);

    emit('odejmij-gwiazdke')

    if (ilosc_szans.value === 2) {
        if_szansa3.value = false;
    }
    if (ilosc_szans.value === 1) {
        if_szansa2.value = false;
    }
    if (ilosc_szans.value === 0) {
        if_szansa1.value = false;
        console.log("przegrałeś!!!");
        if_widok_quizz1.value = false;
        if (ifFocusEmitGlobal.value === false) {
            console.log('przegrana z myszki')
            emit('przegrana');
        }
        if (ifFocusEmitGlobal.value === true) {
            console.log("przegrana z focusa")
            emit('przegrana-focus');
        }

    }
}

function clickWithMouse() {
    ifFocusEmitGlobal.value = false
    kostka_click()
}

function clickWithFocus() {
    ifQuizzFocusOn.value = true
    ifTrapFocusOn.value = true
    ifFocusEmitGlobal.value = true
    kostka_click()
}

</script>

<template>
    <div class="tlo2" role="img" aria-label="gra planszowa - poziom1">
        <h1 class="sr-only">Gra planszowa - poziom 1</h1>
        <div class="ikona-start" role="img" alt="">
            <h2 class="start">Start</h2>
        </div>
        <div class="trasa" role="img" alt="grafika" aria-label="trasa gry zawierająca 16 pól"></div>
        <div class="ikona-meta" role="img" alt="">
            <h2 class="meta">Meta</h2>
        </div>
        <div class="pionek1" :style="{ left: pionek_left + 'px', top: pionek_top + 'px' }" role="img" alt="ikona"
            aria-label="Pionek"></div>
        <h2 class="title">Poziom 1</h2>
        <h2 class="szanse-napis">szanse</h2>
        <div class="szanse-container">
            <img class="szansa" v-if="if_szansa1" src="../assets/szansa.png">
            <img class="szansa" v-if="if_szansa2" src="../assets/szansa.png">
            <img class="szansa" v-if="if_szansa3" src="../assets/szansa.png">
        </div>

        <div class="kostka" ref="oczkaKostka" tabindex="0" :class="{
            'kostka1image1': isSet1,
            'kostka1image2': isSet2,
            'kostka1image3': isSet3,
            'kostka1image4': isSet4,
            'kostka1image5': isSet5,
            'kostka1image6': isSet6
        }" v-if="if_widok_kostki" role="img" alt="ikona widoku kostki" :aria-label=wyrzuconaWartoscKostki></div>

    </div>
    <div class="ruch1" ref="ruchGracza" v-if="if_ruch_gracza" tabindex="0">
        <p class="ruch-text">Ruch gracza</p>
    </div>
    <button class="rzut1 my-button anim1" ref="rzut1" v-if="if_rzuc_kostka" @click="clickWithMouse"
        @keydown.enter="clickWithFocus" role="button">Rzuć kostką</button>
    <SceneTrap v-if="if_widok_pulapki" @koniec-pulapka="if_widok_pulapki = false, koniecPulapki()"
        @koniec-pulapka-focus="if_widok_pulapki = false, koniecPulapkiFocusOn()" :ifButtonOnFocusTrap="ifTrapFocusOn"
        :titleOfTrap="titleTrap" :textOfTrap="textTrap" />
    <SceneQuizz1 v-if="if_widok_quizz1" @koniec-quizz="if_widok_quizz1 = false, koniecQuizu()"
        @koniec-quizz-focus="if_widok_quizz1 = false, ifRzucKostkaButtonOnFocus = true, koniecQuizuFocusOn()"
        @odejmij-szanse="odejmijSzanse" msg="Hej" :miejsceNaPlanszy="krok_gracz1_na_planszy"
        :ifButtonOnFocusQuizz1="ifQuizzFocusOn" />


</template>

<style scoped>
.tlo2 {
    background-image: url("../assets/Plansza_poziom1.png");
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

.pionek1 {
    background-image: url("../assets/pionek.png");
    background-size: 116px 116px;
    background-repeat: no-repeat;
    height: 116px;
    width: 116px;
    position: absolute;
}

.ikona-start {
    background-image: url("../assets/strzalka_START.png");
    background-size: 240px 104px;
    background-repeat: no-repeat;
    position: absolute;
    height: 104px;
    width: 240px;
    top: 40px;
    left: 45px;
    z-index: 0;
}

.start {
    position: relative;
    font-size: 2.2em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    text-align: center;
}

.meta {
    position: relative;
    font-size: 2.2em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    text-align: center;
}

.trasa {
    background-image: url("../assets/PLANSZA.png");
    background-size: 1215px 760px;
    background-repeat: no-repeat;
    position: absolute;
    height: 799px;
    width: 1280px;
    top: 185px;
    left: 90px;
    z-index: 0;
}

.ikona-meta {
    background-image: url("../assets/flaga_META.png");
    background-size: 162px 188px;
    background-repeat: no-repeat;
    position: absolute;
    height: 188px;
    width: 162px;
    top: 602px;
    left: 1210px;
    z-index: 0;
}

.title {
    font-size: 4.3em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    margin-top: 40px;
    margin-bottom: 20px;
    color: rgb(29, 56, 80);
    position: absolute;
    top: 15px;
    left: 1530px
}

.ruch1 {
    color: rgb(29, 56, 80);
    font-size: 40px;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    /*background-image: url("../assets/rzut_przycisk.png");*/
    background-size: 333px 86px;
    background-repeat: no-repeat;
    top: 560px;
    left: 1502px;
    height: 86px;
    width: 333px;
    position: absolute;
    z-index: 2;
    text-align: center;
}

.ruch1:focus {
    outline: 5px solid black;
    outline-offset: 10px;
    /* border-radius: 30px; */
}

.ruch-text {
    position: absolute;
    margin-top: .5em;
    margin-left: 1.35em;
}

.szanse-napis {
    font-size: 3.3em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    color: rgb(29, 56, 80);
    position: absolute;
    top: 160px;
    left: 1460px;
}

.szanse-container {
    margin-bottom: 0em;
    position: absolute;
    left: 1487px;
    top: 300px;
}

.szansa {
    margin-left: 1em;
    margin-right: 1em;
}

.rzut1 {
    font-size: 3.3em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    color: white;
    margin-top: 50px;
    width: 7em;
    height: 2em;
    border: 4px solid rgb(0, 0, 0);
    overflow: visible;
    background-color: rgb(29, 56, 80);
    border-radius: 30px;
    margin-bottom: 0.3em;
    position: absolute;
    top: 500px;
    left: 1487px;
    z-index: 2;
}

.rzut1:focus {
    outline: 5px solid #000000;
    outline-offset: 10px;
}

.kostka {
    position: absolute;
    top: 710px;
    left: 1576px;
    background-size: 200px 200px;
    background-repeat: no-repeat;
    height: 200px;
    width: 200px;
    z-index: 2;

}

.kostka:focus {
    outline: 5px solid #000000;
    outline-offset: 35px;
}


.kostka1image1 {
    background-image: url("../assets/kostka_1oczko.png");

}

.kostka1image2 {
    background-image: url("../assets/kostka_2oczka.png");

}

.kostka1image3 {
    background-image: url("../assets/kostka_3oczka.png");
}

.kostka1image4 {
    background-image: url("../assets/kostka_4oczka.png");
}

.kostka1image5 {
    background-image: url("../assets/kostka_5oczek.png");
}

.kostka1image6 {
    background-image: url("../assets/kostka_6oczek.png");
}
</style>
