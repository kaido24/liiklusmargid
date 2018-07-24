// Teemärgistused
export class RoadMarkingsService {
  getSigns() {
    return [
      {
        id: "911",
        name: "Ühekordne pidevjoon",
        description: "1) eraldab suunavööndeid kaherajalise tee ohtlikel lõikudel (joonis 1). Märgist ületada ei tohi; 2) eraldab sõiduradasid pärisuunavööndis (joonised 7, 8 ja 11). Märgist ületada ei tohi; 3) piirab sõiduteel alasid, millest üle sõita ei tohi, näiteks eraldussaared (joonised 9 ja 12); 4) tähistab parkimiskohti (joonis 12). Märgist tohib ületada manööverdamisel. Parkimiskoha otsas olevat märgist tohib ületada ka parkimiskohale sõites ja sealt ära sõites; 5) tähistab sõidutee äärt (joonised 2 ja 3). Märgist tohib ületada mõlemalt poolt; 6) eraldab jalgratta- ja jalgteel jalgrataste liikluse jalakäijate liiklusest. Märgist ületada ei tohi (joonis 6).",
      },
      {
        id: "911a",
        name: "Kammjoon",
        description: "Tähistab sõidutee äärt (joonis 4). Märgist tohib ületada mõlemalt poolt.",
      },
      {
        id: "912",
        name: "Lai pidevjoon",
        description: "1) tähistab sõidutee äärt (joonis 10). Märgist tohib ületada mõlemalt poolt; 2) eraldab sõidutee põhiradadest aeglustus- ja kiirendusraja lõikusid (joonised 7, 8, 9 ja 10). Märgist ületada ei tohi; 3) eraldab eri raja (jalgrattarada, ühissõidukirada, ühissõiduki- ja jalgrattarada) sõidutee muudest radadest (joonis 7). Märgist ületada ei tohi.",
      },
      {
        id: "913",
        name: "Kahekordne pidevjoon",
        description: "1) eraldab suunavööndeid kolme ja enama sõidurajaga teel (joonised 3, 7, 8 ja 9). Märgist ületada ei tohi; 2) tähistab äärmise parkimiskoha välisäärt (joonis 12). Märgist tohib ületada ainult manööverdamisel.",
      },
      {
        id: "914",
        name: "Pidev- ja katkendjoone ühend",
        description: "1) eraldab suunavööndeid kaherajalisel teel (joonised 1, 2, 5 ja 9); 2) eraldab sõiduradasid pärisuunavööndis (joonis 3); 3) tähistab sõidutee suunavööndeid eraldava pidevjoone katkestust kohas, kus seda joont tohib ületada ainult ühelt poolt, ning ühesuunalist sisse- ja väljasõidukohta (joonis 12); Märgist tohib ületada katkendjoone poolt. Pidevjoone poolt tohib seda teha ainult möödasõitu või ümberpõiget lõpetades.",
      },
      {
        id: "915",
        name: "Eraldussaar",
        description: "Tähistab sõitmiseks keelatud alasid ja osutab oma kaldjoontega sõidusuundadele järgmiselt: märgis 915 eraldab suunavööndeid (joonis 9). Märgist 915 piirab märgis 911 „Ühekordne pidevjoon“, märgis 911a „Kammjoon“ või märgis 912 „Lai pidevjoon“. Märgisest 915 üle sõita ei tohi.",
      },
      {
        id: "916",
        name: "Eraldussaar",
        description: "Tähistab sõitmiseks keelatud alasid ja osutab oma kaldjoontega sõidusuundadele järgmiselt: märgis 916 lahutab pärisuunavööndi sõiduradasid (joonised 8, 9 ja 10). Märgist 916 piirab märgis 911 „Ühekordne pidevjoon“, märgis 911a „Kammjoon“ või märgis 912 „Lai pidevjoon“. Märgisest 916 üle sõita ei tohi.",
      },
      {
        id: "917",
        name: "Eraldussaar",
        description: "Tähistab sõitmiseks keelatud alasid ja osutab oma kaldjoontega sõidusuundadele järgmiselt: märgis 917 liidab pärisuunalisi sõiduradasid (joonised 8, 9 ja 10). Märgist 917 piirab märgis 911 „Ühekordne pidevjoon“, märgis 911a „Kammjoon“ või märgis 912 „Lai pidevjoon“. Märgisest 917 üle sõita ei tohi.",
      },
      {
        id: "921",
        name: "Lühikeste kriipsudega katkendjoon",
        description: "Kriipsu pikkus on kolm korda väiksem kui kriipsudevahe: 1) eraldab suunavööndeid kaherajalisel teel (joonis 5), jalgrattateel (joonis 7) ning jalgratta- ja jalgteel; 2) eraldab sõiduradasid pärisuunavööndis (joonised 3, 4, 7, 8, 10 ja 11). Märgist 921 tohib ületada mõlemalt poolt.",
      },
      {
        id: "921a",
        name: "Lühikeste kriipsudega katkendjoon",
        description: "Kriipsu pikkusega 1 m ja kriipsude vahega 2 m, tähistab sõidutee äärt (joonised 9 ja 11). Märgist tohib ületada mõlemalt poolt.",
      },
      {
        id: "922",
        name: "Pikkade kriipsudega katkendjoon",
        description: "Kriipsu pikkus on kolm korda suurem kui kriipsudevahe: 1) teatab suunavööndeid või pärisuunavööndis sõiduradasid eraldava märgise 911 „Ühekordne pidevjoon“ (joonised 7, 8, 11 ja 12), märgise 913 „Kahekordne pidevjoon“ (joonis 9) või märgise 914 „Pidev- ja katkendjoone ühend“ (joonised 1 ja 5) lähedusest (peatsest saabumisest); 2) eraldab suunavööndeid kaherajalise tee ohtlikul kohal ja enne seda. Märgist 922 tohib ületada mõlemalt poolt.",
      },
      {
        id: "923a",
        name: "Võrdsete kriipsude ja vahedega katkendjoon",
        description: "Kriipsu pikkusega ja kriipsudevahega 0,5 m, tähistab sõiduradasid ristmikul või teega külgneva ala juurdesõidutee teega lõikumise kohal, kus on vaja rõhutada liikumissuunda (joonised 7 ja 8). Märgisega võib olla tähistatud ülekäigukoht. Märgist tohib ületada mõlemalt poolt.",
      },
      {
        id: "923b",
        name: "Võrdsete kriipsude ja vahedega katkendjoon",
        description: "Kriipsu pikkusega ja kriipsudevahega 1 m ning kriipsu laiusega 10 cm: 1) tähistab sõidutee äärt tähistava märgise 911 „Ühekordne pidevjoon“ katkestust ristmikul või mahasõidukohas (joonis 2); 2) tähistab sõidutee äärt teel, kus suurim lubatud sõidukiirus on 50 km/h või alla selle (joonis 5). Märgist 923b tohib ületada mõlemalt poolt.",
      },
      {
        id: "923c",
        name: "Võrdsete kriipsude ja vahedega katkendjoon",
        description: "Kriipsu pikkusega ja kriipsude vahega 1 m ning kriipsu laiusega 20 cm: 1) tähistab sõidutee äärt tähistava märgise 912 „Lai pidevjoon“ katkestust ristmikul või mahasõidukohas; 2) tähistab ühissõidukiraja ning ühissõiduki- ja jalgrattaraja algust ja lõppu (joonis 7). Märgist 923c tohib ületada mõlemalt poolt.",
      },
      {
        id: "923d",
        name: "Võrdsete kriipsude ja vahedega katkendjoon",
        description: "Kriipsu pikkusega ja kriipsude vahega 3 m, eraldab eri raja (jalgrattarada, ühissõidukirada, ühissõiduki- ja jalgrattarada) sõidutee põhiradadest (joonised 7 ja 8). Märgist tohib ületada mõlemalt poolt.",
      },
      {
        id: "924",
        name: "Lai katkendjoon",
        description: "Kriipsu pikkusega 1 m ja kriipsude vahega 3 m, eraldab aeglustus- ja kiirendusrada sõidutee põhiradadest (joonised 7, 8, 9 ja 10). Märgist tohib ületada mõlemalt poolt.",
      },
      {
        id: "925",
        name: "Kahekordne katkendjoon",
        description: "Eraldab muutsuunaliiklusega sõidurada naabersõidurajast (joonis 4). Kui niisuguse raja kohal: 1) suunamuutefooris põleb roheline nool, tohib märgist, mis eraldab pärisuunalist sõidurada, ületada mõlemalt poolt; 2) suunamuutefoori vahesektsioonis on süttinud kollane nool, peab märgise kohe ületama noole suunas; 3) suunamuutefoor lülitatakse välja või seda foori ei ole, tohib ületada ainult märgist, mis asub juhist paremal.",
      },
      {
        id: "931",
        name: "Peatumiskeelu joon",
        description: "Tähistab kohta, kus sõidukite peatamine ja parkimine on keelatud. Märgis on kollane ja see on kantud sõidutee äärele (joonis 11) või äärekivile.",
      },
      {
        id: "932",
        name: "Parkimiskeelu joon",
        description: "Kriipsu pikkusega ja kriipsude vahega 1 m, tähistab kohta, kus sõidukite parkimine on keelatud. Märgis on kollane ja see on kantud sõidutee äärele (joonis 11) või äärekivile.",
      },
      {
        id: "933",
        name: "Ühissõidukipeatus",
        description: "Tähistab ühistransporditeenust osutavate busside, trollide või taksode peatuskohta (joonis 11). Märgis on kollane. Märgisel ei tohi sõidukit peatada, kui see takistab D-kategooria ühissõidukite või taksode liiklust.",
      },
      {
        id: "934",
        name: "Parkimiskeelu ala",
        description: "Tähistab alasid, kus on vaja täiendavalt tuua esile parkimiseks keelatud piirkonnad, näiteks kohad, kus seisev sõiduk teeb võimatuks teiste sõidukite liikumise või takistab jalakäijaid (hooviväravate esised teelõigud parkimiskohtade vahel, kaubalaadimise kohad ja muud sellised). Märgis on kollane. Märgisel on sõidukite parkimine keelatud.",
      },
      {
        id: "941",
        name: "Stoppjoon",
        description: "Osutab sõiduki peatamise kohale foori keelava tule (joonis 8), reguleerija keelava märguande või raudteeülesõidukoha suletud tõkkepuu korral või märgi 222 „Peatu ja anna teed“ juures (joonis 2).",
      },
      {
        id: "942",
        name: "Stoppjoone eeltähis",
        description: "Hoiatab lähenemisest märgisele 941 „Stoppjoon“, mida kasutatakse koos märgiga 222 „Peatu ja anna teed“ (joonis 2).",
      },
      {
        id: "943",
        name: "Teeandekoht",
        description: "Osutab sõiduki peatamise kohale, kui peatumine on vajalik tee andmiseks sõidueesõigusega teel või peateel sõitvale juhile (joonised 2, 7 ja 9). Kasutatakse koos märgiga 221 „Anna teed“.",
      },
      {
        id: "943a",
        name: "Teeandekoht",
        description: "Osutab sõiduki peatamise kohale, kui peatumine on vajalik tee andmiseks aeglustusrajal (joonis 9), samaliigiliste teede ristmikul, märkide 231 „Vastassuuna eesõigus“ ja 555 „Ootekoht“ korral, reguleerimata ülekäiguraja ees (joonis 11) või tõkkepuuta raudteeülesõidukoha ees.",
      },
      {
        id: "944",
        name: "Teeandekoha eeltähis",
        description: "Hoiatab lähenemisest märgisele 943 „Teeandekoht“, mida kasutatakse koos märgiga 221 „Anna teed“ (joonis 2).",
      },
      {
        id: "945a",
        name: "Ülekäigurada",
        description: "Tähistab reguleerimata ülekäigurada või niisugust reguleeritavat ülekäigurada, kus foori ei kasutata ööpäev läbi (joonis 8). ",
      },
      {
        id: "945b",
        name: "Ülekäigurada",
        description: "Tähistab reguleerimata ülekäigurada või niisugust reguleeritavat ülekäigurada, kus foori ei kasutata ööpäev läbi (joonis 8). Märgise 945b nooled näitavad jalakäija liikumise suunda (joonis 11). ",
      },
      {
        id: "946a",
        name: "Lõikumine jalgratta- ja jalgteega",
        description: "Tähistab märgiga 435 „Jalgratta- ja jalgtee“ tähistatud jalgratta- ja jalgtee lõikumiskohta.",
      },
      {
        id: "946b",
        name: "Lõikumine jalgratta- ja jalgteega",
        description: "Tähistab märgiga 435 „Jalgratta- ja jalgtee“ tähistatud jalgratta- ja jalgtee lõikumiskohta.",
      },
      {
        id: "946c",
        name: "Lõikumine jalgratta- ja jalgteega",
        description: "Tähistab märgiga 435 „Jalgratta- ja jalgtee“ tähistatud jalgratta- ja jalgtee lõikumiskohta.",
      },
      {
        id: "946d",
        name: "Lõikumine jalgratta- ja jalgteega",
        description: "Tähistab märgiga 433 või 434 „Jalgratta- ja jalgtee” tähistatud jalgratta- ja jalgtee lõikumiskohta.",
      },
      {
        id: "947",
        name: "Fooriga ülekäigurada",
        description: "Tähistab reguleeritavat ülekäigurada või reguleeritavat jalgratta- ja jalgteega lõikumise kohta (joonis 8). Märgis võib tähistada ka sellist reguleeritavat ülekäigurada või reguleeritavat jalgratta- ja jalgteega lõikumise kohta, kus foori ei kasutata ööpäev läbi.",
      },
      {
        id: "948",
        name: "Lõikumine jalgrattateega",
        description: "Tähistab jalgrattatee või jalgrattaraja sõiduteega lõikumise kohta (joonis 7).",
      },
      {
        id: "949a",
        name: "Parkimisala",
        description: "Tähistab märgiga 387 „Parkimisala“ tähistatud parkimisala piiri (joonis 9). Märgis on sinine.",
      },
      {
        id: "949b",
        name: "Kiiruspiirangu ala",
        description: "Tähistab märgiga 382 „Kiiruspiirangu ala“ tähistatud kiiruspiirangu ala piiri (joonis 9). Märgis on punane.",
      },
      {
        id: "949c",
        name: "Õueala",
        description: "Tähistab märgiga 573 „Õueala“ tähistatud õueala piiri. Märgis on punane.",
      },
      {
        id: "949d",
        name: "Sõiduteede lõikumisala",
        description: "Tähistab sõiduteede lõikumisala või sõiduteede lõikumisalal teatud sõiduradade lõikumisalasid.",
      },
      {
        id: "951-959",
        name: "Suunanool",
        description: "Märgised 95 näitavad sõidusuunda (-suundi) sõidurajalt (joonised 7, 8 ja 9). Äärmiselt vasakpoolselt rajalt vasakpööret osutav nool lubab ka tagasi pöörata. Ristkülikuga nooled 957 kantakse teekattele enne lõikumist teega, mille lähimale sõiduteele ei tohi pöörata (joonis 7). Kõrvalepööret osutavad kahe noolega märgised 958 viitavad kahele järjestikulisele pöördekohale.",
      },
      {
        id: "961-962",
        name: "Kaarnool",
        description: "Märgised 96 osutavad lõppevale sõidurajale või lõppevale kiirendusrajale (joonised 9 ja 10) või möödasõiduvõimalusega teelõigu lõppemisele (joonis 5) ja näitavad ümberreastumise või pärisuunavööndisse naasmise suunda. Märgis 961a või 962a võib olla lõppeva sõiduraja või lõppeva kiirendusraja lõpunool vastavalt märgise 961 või 962 asemel (joonis 10).",
      },
      {
        id: "971a",
        name: "Samaliigiliste teede ristmik",
        description: "Tähistab samaliigiliste teede ristmikku.",
      },
      {
        id: "971b",
        name: "Teeületuskoha eeltähis",
        description: "Teatab märgiste 945 „Ülekäigurada“, märgiste 946 „Lõikumine jalgratta- ja jalgteega“ või märgise 948 „Lõikumine jalgrattateega“ või ülekäigukoha lähedusest (peatsest saabumisest) (joonis 11).",
      },
      {
        id: "972",
        name: "Tee number",
        description: "Osutab tee numbrile. Täht E osutab Euroopa teedevõrgu teele (joonis 10).",
      },
      {
        id: "973",
        name: "Ühissõidukirada",
        description: "Tähistab märgiga 525a „Ühissõidukirada“ osutatud ühissõidukirada (joonis 7), märgiga 525b „Ühissõiduki- ja jalgrattarada“ osutatud ühissõiduki- ja jalgrattarada või ühissõiduki peatuskoha teelaiendit.",
      },
      {
        id: "974",
        name: "Jalgtee",
        description: "Tähistab märgiga 432 „Jalgtee“ osutatud jalgteed ning märgiga 433, 434 või 435 „Jalgratta- ja jalgtee“ osutatud jalgratta- ja jalgteed või selle osa (joonis 6).",
      },
      {
        id: "975",
        name: "Jalgrattatee",
        description: "1) tähistab märgiga 431 „Jalgrattatee“ osutatud jalgrattateed (joonis 7) ning märgiga 433, 434 või 435 „Jalgratta- ja jalgtee“ osutatud jalgratta- ja jalgteed või selle osa (joonis 6); 2) tähistab sõiduteel jalgrattarada (joonis 8).",
      },
      {
        id: "976",
        name: "Puudega inimese sõiduki parkimiskoht",
        description: "Tähistab parkimiskohta, mida tohib kasutada ainult sõidukiga, millel on liikumispuudega või pimedat inimest teenindava sõiduki parkimiskaart (joonis 12). Märgis võib olla kantud siniseks värvitud taustale.",
      },
      {
        id: "977",
        name: "Künnise kaldpind",
        description: "Tähistab vähendatud kiiruse hoidmiseks rajatud künnise, tõstetud ristmiku või tõstetud teega külgneva ala juurdesõidutee teega lõikumise koha kaldpinda sõiduteel.",
      },
      {
        id: "978",
        name: "Suurim kiirus",
        description: "Osutab teelõigul kehtestatud suurimale lubatud sõidukiirusele (km/h) (joonis 11).",
      },
      {
        id: "979a",
        name: "Täristi",
        description: "Tähistab teelõiku, kus tuleb olla eriti tähelepanelik (sealjuures sõidukiiruse valikul) (joonis 11).",
      },
      {
        id: "979b",
        name: "Täristi",
        description: "Tähistab teetööde lõigu algust. Märgis 979b on kollane.",
      },
      {
        id: "981a",
        name: "Kattehelkur",
        description: "On ette nähtud suunavööndeid ja pärisuunavööndis sõiduradasid eraldavate teekattemärgiste esiletoomiseks pimeda ajal ja halva nähtavuse korral. Märgisel 981a on kaks valget helkurit.",
      },
      {
        id: "981b",
        name: "Kattehelkur",
        description: "On ette nähtud suunavööndeid ja pärisuunavööndis sõiduradasid eraldavate teekattemärgiste esiletoomiseks pimeda ajal ja halva nähtavuse korral. Märgisel 981b on üks valge helkur.",
      },
      {
        id: "991k",
        name: "Tähispost",
        description: "Tähistab tee või eraldusriba äärt tähistavaid tähisposte. Märgise kaldvööt langeb sõidutee poole. Märgise juures kasutatakse valgeid ja ohtlikus kohas (näiteks järsul langul, tee kitsenemisel, väikese raadiusega plaanikõverikul, järsakul, põrkepiirde ja ühissõiduki peatuskoha teelaiendi ulatuses, enne ja pärast raudteeülesõidukohta) kollaseid helkureid: sõidusuunast paremal ristkülikukujulist, vasakul – kahte ringikujulist. Talutee või teega külgneva ala tee tähispostide helkurid on sinised ja ristkülikukujulised.",
      },
      {
        id: "991v",
        name: "Tähispost",
        description: "Tähistab tee või eraldusriba äärt tähistavaid tähisposte. Märgise kaldvööt langeb sõidutee poole. Märgise juures kasutatakse valgeid ja ohtlikus kohas (näiteks järsul langul, tee kitsenemisel, väikese raadiusega plaanikõverikul, järsakul, põrkepiirde ja ühissõiduki peatuskoha teelaiendi ulatuses, enne ja pärast raudteeülesõidukohta) kollaseid helkureid: sõidusuunast paremal ristkülikukujulist, vasakul – kahte ringikujulist. Talutee või teega külgneva ala tee tähispostide helkurid on sinised ja ristkülikukujulised.",
      },
      {
        id: "992k",
        name: "Tähispost",
        description: "Tähistab tee või eraldusriba äärt tähistavaid tähisposte. Märgise kaldvööt langeb sõidutee poole. Märgise juures kasutatakse valgeid ja ohtlikus kohas (näiteks järsul langul, tee kitsenemisel, väikese raadiusega plaanikõverikul, järsakul, põrkepiirde ja ühissõiduki peatuskoha teelaiendi ulatuses, enne ja pärast raudteeülesõidukohta) kollaseid helkureid: sõidusuunast paremal ristkülikukujulist, vasakul – kahte ringikujulist. Talutee või teega külgneva ala tee tähispostide helkurid on sinised ja ristkülikukujulised.",
      },
      {
        id: "992s",
        name: "Tähispost",
        description: "Tähistab tee või eraldusriba äärt tähistavaid tähisposte. Märgise kaldvööt langeb sõidutee poole. Märgise juures kasutatakse valgeid ja ohtlikus kohas (näiteks järsul langul, tee kitsenemisel, väikese raadiusega plaanikõverikul, järsakul, põrkepiirde ja ühissõiduki peatuskoha teelaiendi ulatuses, enne ja pärast raudteeülesõidukohta) kollaseid helkureid: sõidusuunast paremal ristkülikukujulist, vasakul – kahte ringikujulist. Talutee või teega külgneva ala tee tähispostide helkurid on sinised ja ristkülikukujulised.",
      },
      {
        id: "992v",
        name: "Tähispost",
        description: "Tähistab tee või eraldusriba äärt tähistavaid tähisposte. Märgise kaldvööt langeb sõidutee poole. Märgise juures kasutatakse valgeid ja ohtlikus kohas (näiteks järsul langul, tee kitsenemisel, väikese raadiusega plaanikõverikul, järsakul, põrkepiirde ja ühissõiduki peatuskoha teelaiendi ulatuses, enne ja pärast raudteeülesõidukohta) kollaseid helkureid: sõidusuunast paremal ristkülikukujulist, vasakul – kahte ringikujulist. Talutee või teega külgneva ala tee tähispostide helkurid on sinised ja ristkülikukujulised.",
      },
      {
        id: "993",
        name: "Äärekivi",
        description: "Tähistab äärekive teepinnast kõrgema ohutussaare ja ooteplatvormi juures ning teekitsendil või väikese raadiusega plaanikõverikul.",
      },
    ];
  }
}