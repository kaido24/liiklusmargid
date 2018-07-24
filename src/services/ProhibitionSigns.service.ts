// Keelumärgid
export class ProhibitionSignService {
  getSigns() {
    return [
      {
        id: "311a",
        name: "Sõidukeeld",
        description: "Keelab kõigi sõidukite liikluse.",
      },
      {
        id: "311b",
        name: "Erateel sõidu keeld",
        description: "Korral tohib sõidukiga sõita ainult eratee omaniku loal.",
      },
      {
        id: "311c",
        name: "Erateel sõidu keeld",
        description: "Korral tohib sõidukiga sõita eratee omaniku loal või märgil nimetatud isik.",
      },
      {
        id: "311d",
        name: "Erateel sõidu keeld",
        description: "Korral tohib sõidukiga sõita eratee omaniku loata omal vastutusel, kuna erateel ei ole loodud tingimusi ohutuks liiklemiseks.",
      },
      {
        id: "312",
        name: "Mootorsõiduki sõidu keeld",
        description: "Keelab kõigi mootorsõidukite liikluse.",
      },
      {
        id: "313a",
        name: "Veoauto sõidu keeld",
        description: "Keelab C-kategooria sõiduki, traktori ja liikurmasina liikluse. Märgile kantud tonnide arvu korral ei tohi sõita ühegi nimetatud sõiduki, autorongi ega masinrongiga, mille veduk on üks neist, kui registrimass ületab selle arvu.",
      },
      {
        id: "313b",
        name: "Bussi sõidu keeld",
        description: "Keelab D-kategooria sõiduki, nii haagisega kui ka ilma, liikluse.",
      },
      {
        id: "314a",
        name: "Mootorratta sõidu keeld",
        description: "Keelab A-kategooria sõiduki liikluse.",
      },
      {
        id: "314b",
        name: "Mootorsaani sõidu keeld",
        description: "Keelab mootorsaani liikluse.",
      },
      {
        id: "315",
        name: "Kaks keeldu",
        description: "Kehtestab korraga kaks keeldu. Märgil võib olla kahe erineva keelumärgi 312 kuni 314b, 316 kuni 319 ja 321 kuni 324 sümbolid.",
      },
      {
        id: "316",
        name: "Traktori sõidu keeld",
        description: "Keelab traktori ja liikurmasina liikluse..",
      },
      {
        id: "317",
        name: "Autorongi ja masinrongi sõidu keeld",
        description: "Keelab autorongi ja masinrongi liikluse. Kui märgile on kantud tonnide arv, ei tohi sõita autorongi ega masinrongiga, mille registrimass on sellest suurem. Märk ei kehti kerghaagisega autorongi ja kerghaagisega masinrongi kohta.",
      },
      {
        id: "318",
        name: "Loomveoki sõidu keeld",
        description: "Keelab loomveoki liikluse ja kariloomade ajamise.",
      },
      {
        id: "319",
        name: "Ohtliku veosega sõidu keeld",
        description: "Keelab ohtlikku veost vedava sõiduki, autorongi ja masinrongi liikluse.",
      },
      {
        id: "321",
        name: "Jalgratta sõidu keeld",
        description: "Keelab jalgratta, mopeedi ja pisimopeedi liikluse.",
      },
      {
        id: "322",
        name: "Mopeedi sõidu keeld",
        description: "Keelab mopeedi ja pisimopeedi liikluse.",
      },
      {
        id: "323",
        name: "Ratsutamiskeeld",
        description: "Keelab ratsutamise.",
      },
      {
        id: "324",
        name: "Käigukeeld",
        description: "Keelab jalakäijate liikluse. Märk kehtib ainult sellel teepoolel, kuhu see on pandud.",
      },
      {
        id: "331",
        name: "Sissesõidu keeld",
        description: "Keelab kõigi sõidukite edasisõidu.",
      },
      {
        id: "332",
        name: "Parempöörde keeld",
        description: "Keelab parempöörde ainult sellel sõiduteede lõikumisalal, mille ette see on pandud.",
      },
      {
        id: "333",
        name: "Vasakpöörde keeld",
        description: "Keelab vasakpöörde ainult sellel sõiduteede lõikumisalal, mille ette see on pandud. Märk ei keela tagasipööret.",
      },
      {
        id: "334",
        name: "Tagasipöörde keeld",
        description: "Keelab tagasipöörde. Märk ei keela vasakpööret.",
      },
      {
        id: "335",
        name: "Tollikontroll",
        description: "Keelab peatuseta ja tolliametniku loata edasisõidu.",
      },
      {
        id: "336a",
        name: "Politseikontroll",
        description: "Keelab peatuseta ja politseiametniku loata edasisõidu.",
      },
      {
        id: "336b",
        name: "Kontroll",
        description: "Keelab peatuseta ja kontrollija loata edasisõidu.",
      },
      {
        id: "341",
        name: "Massipiirang",
        description: "Keelab sõiduki, autorongi ja masinrongi, mille tegelik mass on suurem, kui märk näitab, liikluse.",
      },
      {
        id: "342a",
        name: "Teljekoormuse piirang",
        description: "Keelab sõiduki, autorongi ja masinrongi, mille mis tahes telje tegelik koormus on suurem, kui märk näitab, liikluse.",
      },
      {
        id: "342b",
        name: "Telikukoormuse piirang",
        description: "Keelab sõiduki, autorongi ja masinrongi, mille mis tahes teliku tegelik koormus on suurem, kui märk näitab, liikluse.",
      },
      {
        id: "343",
        name: "Kõrguspiirang",
        description: "Keelab sõiduki, autorongi ja masinrongi, mille tegelik kõrgus teepinnast koormaga või ilma on suurem, kui märk näitab, edasisõidu.",
      },
      {
        id: "344",
        name: "Laiuspiirang",
        description: "Keelab sõiduki, autorongi ja masinrongi, mille tegelik laius koormaga või ilma on suurem, kui märk näitab, edasisõidu.",
      },
      {
        id: "345",
        name: "Pikkuspiirang",
        description: "Keelab sõiduki, autorongi ja masinrongi, mille tegelik pikkus koormaga või ilma on suurem, kui märk näitab, edasisõidu.",
      },
      {
        id: "351",
        name: "Suurim kiirus",
        description: "Keelab sõita suurema sõidukiirusega (km/h), kui märgil näidatud. Märk, mis piirab sõidukiiruse 30 km/h või alla selle, osutab ohtlikule teelõigule, millel hoiatusmärgid või teemärgised võivad puududa.",
      },
      {
        id: "352",
        name: "Möödasõidu keeld",
        description: "Keelab mööda sõita, välja arvatud möödasõit üksikust sõidukist, mille sõidukiirus ei ületa 30 km/h.",
      },
      {
        id: "353",
        name: "Veoauto möödasõidu keeld",
        description: "Keelab mööda sõita C-kategooria sõiduki, traktori ja liikurmasinaga, välja arvatud möödasõit üksikust sõidukist, mille sõidukiirus ei ületa 30 km/h.",
      },
      {
        id: "354",
        name: "Vähim pikivahe",
        description: "Keelab sõita väiksema pikivahega, kui märgil näidatud.",
      },
      {
        id: "355",
        name: "Helisignaali keeld",
        description: "Keelab helisignaali andmise. Erandina tohib helisignaali anda ohu vältimiseks.",
      },
      {
        id: "361",
        name: "Peatumiskeeld",
        description: "Keelab peatumise ja parkimise. Märk ei kehti ühissõiduki kohta. Märk kehtib ainult sellel teepoolel, kuhu see on pandud.",
      },
      {
        id: "362",
        name: "Parkimiskeeld",
        description: "Keelab parkimise. Märk kehtib ainult sellel teepoolel, kuhu see on pandud. Märk ei kehti tööülesandeid täitva punase risti embleemiga sõiduauto kohta. Märgi mõjupiirkonnas võib töötava taksomeetriga takso parkida kuni 15 minutit.",
      },
      {
        id: "363",
        name: "Parkimiskeeld paaritul kuupäeval",
        description: "Keelab parkimise paaritul kuupäeval. Märk kehtib ainult sellel teepoolel, kuhu see on pandud. Märk ei kehti tööülesandeid täitva punase risti embleemiga sõiduauto kohta. Märgi mõjupiirkonnas võib töötava taksomeetriga takso parkida kuni 15 minutit. Kui teelõigul on ühele poole pandud märk 363 ja teisele poole märk 364, tuleb sõiduk ühelt teepoolelt teisele ümber paigutada ajavahemikul kell 19 kuni 21.",
      },
      {
        id: "364",
        name: "Parkimiskeeld paariskuupäeval",
        description: "Keelab parkimise paariskuupäeval. Märk kehtib ainult sellel teepoolel, kuhu see on pandud. Märk ei kehti tööülesandeid täitva punase risti embleemiga sõiduauto kohta. Märgi mõjupiirkonnas võib töötava taksomeetriga takso parkida kuni 15 minutit. Kui teelõigul on ühele poole pandud märk 363 ja teisele poole märk 364, tuleb sõiduk ühelt teepoolelt teisele ümber paigutada ajavahemikul kell 19 kuni 21.",
      },
      {
        id: "371",
        name: "Suurima kiiruse piirangu lõpp",
        description: "Lõpetab märgi 351 „Suurim kiirus” mõjupiirkonna.",
      },
      {
        id: "372",
        name: "Möödasõidu keelu lõpp",
        description: "Lõpetab märgi 352 „Möödasõidu keeld” mõjupiirkonna.",
      },
      {
        id: "373",
        name: "Veoauto möödasõidu keelu lõpp",
        description: "Lõpetab märgi 353 „Veoauto möödasõidu keeld” mõjupiirkonna.",
      },
      {
        id: "376",
        name: "Piirangute lõpp",
        description: "Lõpetab korraga mitme märgi 35 ja 36 mõjupiirkonna.",
      }
    ];
  }
}