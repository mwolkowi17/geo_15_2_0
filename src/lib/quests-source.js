// interface quizz_pojedyncz {
//   id: number;
//   pytanie: string;
//   odpowiedz: number;
//   odpowiedz_text: any[][];
//   tresc: string;
// }

export class Quests {
  kolekcja_assetów;
  numery_pol_quizz;
  tab_quizz;

  constructor() {
    // propozycjia obiektowa rozwiązania kolekcji pytań do quizzów
    this.tab_quizz = [
      {
        id: 1,
        pytanie: 0,
        odpowiedz_text: [
          [
            "Unia Europejska (UE)",
            "Organizacja Narodów Zjednoczonych (ONZ)",
            1,
          ],
          [
            "Organizacja Narodów Zjednoczonych (ONZ)",
            "Unia Europejska (UE)",
            2,
          ],
        ],
        odpowiedz: 1,
        tresc:
          "Widzisz flagę organizacji, która rozwija ideę wspólnej Europy. Nazwa tej organizacji to:",
        trescAria:
          "Widzisz flagę organizacji, która rozwija ideę wspólnej Europy. Nazwa tej organizacji to:",
      },
      {
        id: 2,
        pytanie: 1,
        odpowiedz_text: [
          [
            "Organizacja Narodów Zjednoczonych (ONZ)",
            "Organizacja Współpracy Gospodarczej i Rozwoju (OECD)",
            1,
          ],
          [
            "Organizacja Współpracy Gospodarczej i Rozwoju (OECD)",
            "Organizacja Narodów Zjednoczonych (ONZ)",
            2,
          ],
        ],
        odpowiedz: 1,
        tresc:
          "Widzisz flagę organizacji, która walczy o pokój i prawa ludzi. Nazwa tej organizacji to:",
        trescAria:
          "Widzisz flagę organizacji, która walczy o pokój i prawa ludzi. Nazwa tej organizacji to:",
      },
      {
        id: 4,
        pytanie: 2,
        odpowiedz_text: [
          [
            "Organizacja Traktatu Północnoatlantyckiego (NATO)",
            "Unia Europejska (UE)",
            1,
          ],
          [
            "Unia Europejska (UE)",
            "Organizacja Traktatu Północnoatlantyckiego (NATO)",
            2,
          ],
        ],
        odpowiedz: 1,
        tresc:
          "Widzisz flagę organizacji, która ma charakter militarny. Nazwa tej organizacji to:",
        trescAria:
          "Widzisz flagę organizacji, która ma charakter militarny. Nazwa tej organizacji to:",
      },
      {
        id: 5,
        pytanie: 3,
        odpowiedz_text: [
          ["UNICEF", " WHO", 1],
          [" WHO", "UNICEF", 2],
        ],
        odpowiedz: 1,
        tresc:
          "Widzisz flagę organizacji, która pomaga dzieciom na świecie. Nazwa tej organizacji to:",
        trescAria:
          "Widzisz flagę organizacji, która pomaga dzieciom na świecie. Nazwa tej organizacji to:",
      },
      {
        id: 7,
        pytanie: 4,
        odpowiedz_text: [
          ["od 2004 roku", "od 1999 roku", 1],
          ["od 1999 roku", "od 2004 roku", 2],
        ],
        odpowiedz: 1,
        tresc: "Od którego roku Polska jest członkiem Unii Europejskiej?",
        trescAria: "Od którego roku Polska jest członkiem Unii Europejskiej?",
      },
      {
        id: 9,
        pytanie: 5,
        odpowiedz_text: [
          ["od 1945 roku", "od 2000 roku", 1],
          ["od 2000 roku", "od 1945 roku", 2],
        ],
        odpowiedz: 1,
        tresc:
          "Od którego roku Polska należy do Organizacji Narodów Zjednoczonych (ONZ)?",
        trescAria:
          "Od którego roku Polska należy do Organizacji Narodów Zjednoczonych (ONZ)?",
      },
      {
        id: 10,
        pytanie: 6,
        odpowiedz_text: [
          [
            "Organizacja Współpracy Gospodarczej i Rozwoju (OECD)",
            "Organizacja Traktatu Północnoatlantyckiego (NATO)",
            1,
          ],
          [
            "Organizacja Traktatu Północnoatlantyckiego (NATO)",
            "Organizacja Współpracy Gospodarczej i Rozwoju (OECD)",
            2,
          ],
        ],
        odpowiedz: 1,
        tresc:
          "Jak nazywa się organizacja, która wspiera innowacje technologiczne?",
        trescAria:
          "Jak nazywa się organizacja, która wspiera innowacje technologiczne?",
      },
      {
        id: 12,
        pytanie: 7,
        odpowiedz_text: [
          ["tak", "nie", 1],
          ["nie", "tak", 2],
        ],
        odpowiedz: 1,
        tresc: "Czy Polska należy do wielu organizacji międzynarodowych?",
        trescAria: "Czy Polska należy do wielu organizacji międzynarodowych?",
      },
      {
        id: 13,
        pytanie: 8,
        odpowiedz_text: [
          ["tak", "nie", 1],
          ["nie", "tak", 2],
        ],
        odpowiedz: 1,
        tresc: "Czy Polska aktywnie działa na rzecz pokoju w Europie?",
        trescAria: "Czy Polska aktywnie działa na rzecz pokoju w Europie?",
      },
      {
        id: 15,
        pytanie: 9,
        odpowiedz_text: [
          [
            "jedności i solidarności między krajami członkowskimi",
            "liczby krajów członkowskich",
            1,
          ],
          [
            "liczby krajów członkowskich",
            "jedności i solidarności między krajami członkowskimi",
            2,
          ],
        ],
        odpowiedz: 2,
        tresc:
          "Czego symbolem są gwiazdy, które znajdują się na fladze Unii Europejskiej (UE)?",
        trescAria:
          "Czego symbolem są gwiazdy, które znajdują się na fladze Unii Europejskiej (UE)?",
      },
    ];
  }

  pokaz_zadanie_2(krok_na_planszy) {
    for (let n = 0; n <= this.tab_quizz.length; n++) {
      if (this.tab_quizz[n].id === krok_na_planszy) {
        return this.tab_quizz[n];
      }
    }
  }
}
