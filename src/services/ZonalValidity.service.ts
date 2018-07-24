// Mõjualamärgid
export class ZonalValiditySignService {
  getSigns() {
    return [
      {
        id: "381",
        name: "Samaliigiliste teedega ristmike ala",
        description: "Näitab mõjuala, kus kõik lõikuvad teed on samaliigilised. Märk panduna ala tähistamiseks, kus on kattega teede, kruusateede ja pinnasteede omavahelisi lõikumisi, muudab need samaliigilisteks.",
      },
      {
        id: "382",
        name: "Kiiruspiirangu ala",
        description: "Näitab mõjuala, kus ei tohi sõita suurema sõidukiirusega (km/h), kui märgil näidatud. Märk, mis piirab sõidukiiruse 30 km/h või alla selle, osutab ohtlikule alale, millel hoiatusmärgid või teemärgised võivad puududa.",
      },
      {
        id: "383",
        name: "Peatumiskeelu ala",
        description: "Näitab mõjuala, kus ei tohi peatuda ja parkida. Märk ei kehti ühissõiduki kohta.",
      },
      {
        id: "384",
        name: "Parkimiskeelu ala",
        description: "Näitab mõjuala, kus ei tohi parkida. Märk ei kehti tööülesandeid täitva punase risti embleemiga sõiduauto kohta. Märgi mõjupiirkonnas võib töötava taksomeetriga takso parkida kuni 15 minutit.",
      },
      {
        id: "385",
        name: "Jalgrattasõidu ala",
        description: "Näitab mõjuala, kus tohib liikuda jalgratta, tasakaaluliikuri, mopeedi või pisimopeediga. Kui liiklussagedus võimaldab, tohib liikuda ka jalakäija, takistamata jalgratta-, tasakaaluliikuri-, mopeedi- ja pisimopeediliiklust.",
      },
      {
        id: "386",
        name: "Jalakäigu ala",
        description: "Näitab mõjuala, kus tohib liikuda jalgsi ja tasakaaluliikuriga. Tasakaaluliikuri juht ei tohi ohustada ega takistada jalakäijat.",
      },
      {
        id: "387",
        name: "Parkimisala",
        description: "Näitab parkimiseks määratud mõjuala.",
      },
      {
        id: "388",
        name: "Kaks mõjuala",
        description: "Näitab kahe erineva märgiga kehtestatud mõjuala.",
      },
      {
        id: "389",
        name: "Mõjuala ja mõjuala lõpp",
        description: "Näitab ühe mõjuala algust ja teise mõjuala lõppu.",
      },
      {
        id: "391",
        name: "Samaliigiliste teedega ristmike ala lõpp",
        description: "",
      },
      {
        id: "392",
        name: "Kiiruspiirangu ala lõpp",
        description: "",
      },
      {
        id: "393",
        name: "Peatumiskeelu ala lõpp",
        description: "",
      },
      {
        id: "394",
        name: "Parkimiskeelu ala lõpp",
        description: "",
      },
      {
        id: "395",
        name: "Jalgrattasõidu ala lõpp",
        description: "",
      },
      {
        id: "396",
        name: "Jalakäigu ala lõpp",
        description: "",
      },
      {
        id: "397",
        name: "Parkimisala lõpp",
        description: "",
      },
      {
        id: "398",
        name: "Kahe mõjuala lõpp",
        description: "",
      }
    ];
  }
}