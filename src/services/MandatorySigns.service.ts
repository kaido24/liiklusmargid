// Kohustusmärgid
export class MandatorySignsService {
  getSigns() {
    return [
      {
        id: "411",
        name: "Kohustuslik sõidusuund otse",
        description: "Kohustab sõitma vaid noolega osutatud suunas. Vahetult ristmiku taha või ristmikevahelisele teele pandud märk 411 kehtib lähima ristmikuni. Märk 411 ei keela oma mõjupiirkonnas parempööret parklasse, puhkekohta ega teega külgnevale alale. Vasakule või tagasi pöörata tohib vaid kohas, kus on vastav märk 53 „Sõidurajad ja -suunad”, ja tagasi pöörata vaid kohas, kus on märk 551 „Tagasipöörde koht”. Märk kehtib ainult sellel sõiduteede lõikumisalal, mille ette see on pandud, kusjuures sirge noolega märk on vahetult vastava lõikumisala ees.",
      },
      {
        id: "412",
        name: "Kohustuslik sõidusuund paremale",
        description: "Kohustab sõitma vaid noolega osutatud suunas. Märk kehtib ainult sellel sõiduteede lõikumisalal, mille ette see on pandud, kusjuures kõrvalepöördeks kohustav kõvera noolega märk on paigaldatud pöördekohast eespool.",
      },
      {
        id: "413",
        name: "Kohustuslik sõidusuund paremale",
        description: "Kohustab sõitma vaid noolega osutatud suunas. Märk kehtib ainult sellel sõiduteede lõikumisalal, mille ette see on pandud, kusjuures sirge noolega märk on vahetult vastava lõikumisala ees.",
      },
      {
        id: "414",
        name: "Kohustuslik sõidusuund vasakule",
        description: "Kohustab sõitma vaid noolega osutatud suunas. Vasakpöördeks kohustav nool lubab ka tagasi pöörata. Märk kehtib ainult sellel sõiduteede lõikumisalal, mille ette see on pandud, kusjuures kõrvalepöördeks kohustav kõvera noolega märk on paigaldatud pöördekohast eespool.",
      },
      {
        id: "415",
        name: "Kohustuslik sõidusuund vasakule",
        description: "Kohustab sõitma vaid noolega osutatud suunas. Vasakpöördeks kohustav nool lubab ka tagasi pöörata. Märk kehtib ainult sellel sõiduteede lõikumisalal, mille ette see on pandud, kusjuures sirge noolega märk on vahetult vastava lõikumisala ees.",
      },
      {
        id: "416",
        name: "Kohustuslik sõidusuund otse või paremale",
        description: "Kohustab sõitma vaid nooltega osutatud suundades. Märk kehtib ainult sellel sõiduteede lõikumisalal, mille ette need on pandud, kusjuures sirge noolega märk on vahetult vastava lõikumisala ees, ainult kõrvalepöördeks kohustav kõvera noolega märk aga on pöördekohast eespool.",
      },
      {
        id: "417",
        name: "Kohustuslik sõidusuund otse või vasakule",
        description: "Kohustab sõitma vaid nooltega osutatud suundades. Vasakpöördeks kohustav nool lubab ka tagasi pöörata. Märk kehtib ainult sellel sõiduteede lõikumisalal, mille ette need on pandud, kusjuures sirge noolega märk on vahetult vastava lõikumisala ees, ainult kõrvalepöördeks kohustav kõvera noolega märk aga on pöördekohast eespool..",
      },
      {
        id: "418",
        name: "Kohustuslik sõidusuund paremale või vasakule",
        description: "Kohustab sõitma vaid nooltega osutatud suundades. Vasakpöördeks kohustav nool lubab ka tagasi pöörata. Märk kehtib ainult sellel sõiduteede lõikumisalal, mille ette need on pandud, kusjuures sirge noolega märk on vahetult vastava lõikumisala ees, ainult kõrvalepöördeks kohustav kõvera noolega märk aga on pöördekohast eespool..",
      },
      {
        id: "421",
        name: "Ümberpõike suund",
        description: "Kohustab ohutussaarest või muust takistusest ümber põikama märgil osutatud suunas.",
      },
      {
        id: "422",
        name: "Ümberpõike suund",
        description: "Kohustab ohutussaarest või muust takistusest ümber põikama märgil osutatud suunas.",
      },
      {
        id: "423",
        name: "Ümberpõike suund",
        description: "Kohustab ohutussaarest või muust takistusest ümber põikama märgil osutatud suunas.",
      },
      {
        id: "424",
        name: "Ringliiklus",
        description: "Kohustab sõitma vaid nooltega osutatud suunas ja kehtib ainult märgile järgneval ringristmikul. Kui märk 424 on pandud koos märgiga 221 „Anna teed“, on juht kohustatud andma teed ringristmikul sõitvale juhile.",
      },
      {
        id: "431",
        name: "Jalgrattatee",
        description: "Näitab, et tohivad liikuda jalgrattur, tasakaaluliikuri juht, mopeedi- ja pisimopeedijuht. Kui liiklussagedus võimaldab, tohib liikuda ka jalakäija, takistamata jalgratta-, tasakaaluliikuri-, mopeedi- ja pisimopeediliiklust.",
      },
      {
        id: "432",
        name: "Jalgtee",
        description: "Näitab, et tohib liikuda jalakäija. Võib liikuda ka tasakaaluliikuri juht, kuid ta ei tohi ohustada ega takistada jalakäijat.",
      },
      {
        id: "433",
        name: "Jalgratta- ja jalgtee",
        description: "Näitab, et tohivad liikuda jalakäija, jalgrattur ja tasakaaluliikuri juht. Jalgrattur liigub sellel teel või teeosal vastavalt märgil näidatule ühel, jalakäija teisel pool ja tasakaaluliikuri juht aga mõlemal pool. Kui liiklustihedus võimaldab, tohib jalakäija liikuda jalgratturile ettenähtud osal, takistamata seal jalgrattaliiklust. Jalgrattur ja tasakaaluliikuri juht ei tohi ohustada jalakäijat. Märgi kohustuse lõpetab märk 443 „Jalgratta- ja jalgtee lõpp“.",
      },
      {
        id: "434",
        name: "Jalgratta- ja jalgtee",
        description: "Näitab, et tohivad liikuda jalakäija, jalgrattur ja tasakaaluliikuri juht. Jalgrattur liigub sellel teel või teeosal vastavalt märgil näidatule ühel, jalakäija teisel pool ja tasakaaluliikuri juht aga mõlemal pool. Kui liiklustihedus võimaldab, tohib jalakäija liikuda jalgratturile ettenähtud osal, takistamata seal jalgrattaliiklust. Jalgrattur ja tasakaaluliikuri juht ei tohi ohustada jalakäijat. Märgi kohustuse lõpetab märk 444 „Jalgratta- ja jalgtee lõpp“.",
      },
      {
        id: "435",
        name: "Jalgratta- ja jalgtee",
        description: "Näitab, et tohivad liikuda jalakäija, jalgrattur ja tasakaaluliikuri juht. Jalakäija, jalgrattur jatasakaaluliikuri juht teed või teeosa ühiselt. Jalgrattur ja tasakaaluliikuri juht ei tohi ohustada jalakäijat. Märgi kohustuse lõpetab märk 445 „Jalgratta- ja jalgtee lõpp“.",
      },
      {
        id: "436",
        name: "Ratsatee",
        description: "Näitab, et tohib ainult ratsutada..",
      },
      {
        id: "437",
        name: "Mootorsaanitee",
        description: "Näitab, et tohib sõita ainult mootorsaaniga.",
      },
      {
        id: "438",
        name: "Lumeketid",
        description: "Kohustab mootorsõidukitel vähemalt kahel vedaval rattal kasutama sõidul lumekette. Märk 438 kehtib lähima ristmikuni, ristmiku puudumisel kuni märgini 448 „Lumekettide kohustuse lõpp” või tahvliga 821 „Mõjupiirkond” teatatud kauguseni.",
      },
      {
        id: "441",
        name: "Jalgrattatee lõpp",
        description: "",
      },
      {
        id: "442",
        name: "Jalgtee lõpp",
        description: "",
      },
      {
        id: "443",
        name: "Jalgratta- ja jalgtee lõpp",
        description: "",
      },
      {
        id: "444",
        name: "Jalgratta- ja jalgtee lõpp",
        description: "",
      },
      {
        id: "445",
        name: "Jalgratta- ja jalgtee lõpp",
        description: "",
      },
      {
        id: "446",
        name: "Ratsatee lõpp",
        description: "",
      },
      {
        id: "447",
        name: "Mootorsaanitee lõpp",
        description: "",
      },
      {
        id: "448",
        name: "Lumekettide kohustuse lõpp",
        description: "",
      },
      {
        id: "451",
        name: "Vähim kiirus",
        description: "Kohustab sõitma ainult märgil näidatud või sellest suurema sõidukiirusega (km/h).",
      },
      {
        id: "452",
        name: "Vähima kiiruse lõpp",
        description: "Tähistab märgi 451 „Vähim kiirus“ mõjupiirkonna lõppu, taastades eelnenud kiirusrežiimi.",
      },
      {
        id: "461a",
        name: "Ohtliku veosega sõidu suund",
        description: "Kohustab ohtlikku veost vedavat sõidukit, autorongi ja masinrongi sõitma märgil osutatud suunas. Märgi kõrvalepööret osutav sirge nool näitab suunda vahetult pöördekoha ette pandud märgil.",
      },
      {
        id: "461b",
        name: "Ohtliku veosega sõidu suund",
        description: "Kohustab ohtlikku veost vedavat sõidukit, autorongi ja masinrongi sõitma märgil osutatud suunas. Märgi kõrvalepööret osutav kõver nool näitab suunda pöördekohast eespool oleval märgil.",
      },
      {
        id: "461c",
        name: "Ohtliku veosega sõidu suund",
        description: "Kohustab ohtlikku veost vedavat sõidukit, autorongi ja masinrongi sõitma märgil osutatud suunas. Märgi kõrvalepööret osutav sirge nool näitab suunda vahetult pöördekoha ette pandud märgil.",
      },
      {
        id: "461d",
        name: "Ohtliku veosega sõidu suund",
        description: "Kohustab ohtlikku veost vedavat sõidukit, autorongi ja masinrongi sõitma märgil osutatud suunas. Märgi kõrvalepööret osutav kõver nool näitab suunda pöördekohast eespool oleval märgil.",
      },
      {
        id: "461e",
        name: "Ohtliku veosega sõidu suund",
        description: "Kohustab ohtlikku veost vedavat sõidukit, autorongi ja masinrongi sõitma märgil osutatud suunas. Märgi kõrvalepööret osutav sirge nool näitab suunda vahetult pöördekoha ette pandud märgil.",
      },
    ];
  }
}