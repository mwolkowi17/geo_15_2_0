export class Quests2 {
  kolekcja_assetów;
  numery_pol_quizz;
  tab_quizz;

  constructor() {
    this.kolekcja_assetów = [
      ["pytanie1_2", 1],
      ["pytanie2_2", 1],
      ["pytanie3_2", 1],
      ["pytanie4_2", 1],
      ["pytanie5_2", 1],
      ["pytanie6_2", 1],
      ["pytanie7_2", 1],
      ["pytanie8_2", 1],
      ["pytanie9_2", 1],
      ["pytanie10_2", 1],
    ];

    // propozycjia obiektowa rozwiązania kolekcji pytań do quizzów
    this.tab_quizz = [
      {
        id: 1,
        pytanie: 0,
        odpowiedz_text: [
          ["w 1996 roku", "w 2004 roku", "w 1945 roku", 1],
          ["w 2004 roku", "w 1996 roku", "w 1945 roku", 2],
          ["w 1945 roku", "w 2004 roku", "w 1996 roku", 3],
        ],
        odpowiedz: 1,
        tresc: "W którym roku przyjęto Polskę do OECD?",
      },
      {
        id: 2,
        pytanie: 1,
        odpowiedz_text: [
          ["UNICEF", "UNESCO", "OECD", 1],
          ["UNESCO", "UNICEF", "OECD", 2],
          ["OECD", "UNESCO", "UNICEF", 3],
        ],
        odpowiedz: 1,
        tresc: "Jak nazywa się organizacja, która walczy o prawa dzieci?",
      },
      {
        id: 4,
        pytanie: 2,
        odpowiedz_text: [
          ["OECD", "ONZ", "NATO", 1],
          ["ONZ", "OECD", "NATO", 2],
          ["NATO", "ONZ", "OECD", 3],
        ],
        odpowiedz: 1,
        tresc:
          "Jak nazywa się organizacja, która zrzesza największe gospodarki świata?",
      },
      {
        id: 5,
        pytanie: 3,
        odpowiedz_text: [
          ["OECD", "ONZ", "UE", 1],
          ["ONZ", "OECD", "UE", 2],
          ["UE", "ONZ", "OECD", 3],
        ],
        odpowiedz: 1,
        tresc:
          "Jak nazywa się organizacja, która liczy trzydzieści osiem państw członkowskich?",
      },
      {
        id: 7,
        pytanie: 4,
        odpowiedz_text: [
          ["ONZ", "UE", "NATO", 1],
          ["UE", "ONZ", "NATO", 2],
          ["NATO", "UE", "ONZ", 3],
        ],
        odpowiedz: 1,
        tresc:
          "Jak nazywa się największa organizacja międzynarodowa, która zrzesza ponad sto dziewięćdziesiąt państw?",
      },
      {
        id: 9,
        pytanie: 5,
        odpowiedz_text: [
          ["NATO", "ONZ", "UE", 1],
          ["UE", "NATO", "ONZ", 2],
          ["ONZ", "UE", "NATO", 3],
        ],
        odpowiedz: 1,
        tresc:
          "Jak nazywa się organizacja, której symbolem jest róża kompasowa na błękitnej fladze?",
      },
      {
        id: 10,
        pytanie: 6,
        odpowiedz_text: [
          ["jedność", "bezpieczeństwo", "ognisty krąg", 1],
          ["ognisty krąg", "jedność", "bezpieczeństwo", 2],
          ["bezpieczeństwo", "ognisty krąg", "jedność", 3],
        ],
        odpowiedz: 1,
        tresc: "Co symbolizuje pierścień na fladze NATO?",
      },
      {
        id: 12,
        pytanie: 7,
        odpowiedz_text: [
          ["gałązki oliwne", "gwiazdy", "róża kompasowa", 1],
          ["gwiazdy", "gałązki oliwne", "róża kompasowa", 2],
          ["róża kompasowa", "gwiazdy", "gałązki oliwne", 3],
        ],
        odpowiedz: 1,
        tresc: "Co znajduje się na fladze ONZ?",
      },
      {
        id: 13,
        pytanie: 8,
        odpowiedz_text: [
          ["UE", "ONZ", "OECD", 1],
          ["ONZ", "UE", "OECD", 2],
          ["ONZ", "OECD", "UE", 3],
        ],
        odpowiedz: 1,
        tresc:
          "Jak nazywa się organizacja, która daje Polakom największe prawa do międzynarodowego rynku pracy, zagranicznej edukacji oraz możliwość swobodnego podróżowania poza granice Polski?",
      },
      {
        id: 15,
        pytanie: 9,
        odpowiedz_text: [
          ["12", "15 ", "10", 1],
          ["15", "12", "10", 2],
          ["10", "15", "12", 3],
        ],
        odpowiedz: 1,
        tresc: "Ile gwiazd jest na fladze Unii Europejskiej (UE)?",
      },
    ];
  }

  //funkcja która zwróci komplet astetów i parametrów rozwiązań do zadania
  pokaz_zadanie(krok_na_planszy) {
    if (krok_na_planszy === 1) {
      return this.kolekcja_assetów[0];
    }
    if (krok_na_planszy === 2) {
      return this.kolekcja_assetów[1];
    }
    if (krok_na_planszy === 4) {
      return this.kolekcja_assetów[2];
    }
    if (krok_na_planszy === 5) {
      return this.kolekcja_assetów[3];
    }
    if (krok_na_planszy === 7) {
      return this.kolekcja_assetów[4];
    }
    if (krok_na_planszy === 9) {
      return this.kolekcja_assetów[5];
    }
    if (krok_na_planszy === 10) {
      return this.kolekcja_assetów[6];
    }
    if (krok_na_planszy === 12) {
      return this.kolekcja_assetów[7];
    }
    if (krok_na_planszy === 13) {
      return this.kolekcja_assetów[8];
    }
    if (krok_na_planszy === 15) {
      return this.kolekcja_assetów[9];
    }
  }

  pokaz_zadanie_2(krok_na_planszy) {
    for (let n = 0; n <= this.tab_quizz.length; n++) {
      if (this.tab_quizz[n].id === krok_na_planszy) {
        return this.tab_quizz[n];
      }
    }
  }
}
