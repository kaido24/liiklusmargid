// Osutusmärgid
export class PointingSignsService {
  getSigns() {
    return [
      {
        id: "511",
        name: "Kiirtee",
        description: "Tähistab kohta, kus hakkab kehtima kiirteele kindlaksmääratud liikluskord.",
      },
      {
        id: "512",
        name: "Kiirtee lõpp",
        description: "Näitab märgiga 511 tähistatud tee lõppu.",
      },
      {
        id: "521",
        name: "Ühesuunaline tee",
        description: "Tähistab teed või sõiduteed, mille kogu laiuses sõidavad sõidukid ainult ühes suunas.",
      },
      {
        id: "522",
        name: "Ühesuunalise tee lõpp",
        description: "Näitab märgiga 521 või märkidega 523 ja 524 tähistatud tee või sõidutee lõppu.",
      },
      {
        id: "523",
        name: "Sõit ühesuunalisele teele",
        description: "Näitab ühesuunalisele teele või ühesuunalisele sõiduteele sõitmise kohta ja suunda.",
      },
      {
        id: "524",
        name: "Sõit ühesuunalisele teele",
        description: "Näitab ühesuunalisele teele või ühesuunalisele sõiduteele sõitmise kohta ja suunda.",
      },
      {
        id: "525a",
        name: "Ühissõidukirada",
        description: "Tähistab rada, mis on ette nähtud muude sõidukitega pärisuunas sõitvatele rööbasteta ühissõidukitele. Märk kehtib raja kohta, mille kohale see on pandud. Sõiduteest paremal olev märk kehtib parempoolse raja kohta. 525a kehtib kuni märgi taga oleva lähima ristmikuni või eriradade lõppu näitava vastava märgini 526a „Ühissõidukiraja lõpp“. Märk 526a näitab märgiga 525a tähistatud ühissõidukiraja lõppu.",
      },
      {
        id: "525b",
        name: "Ühissõiduki- ja jalgrattarada",
        description: "Tähistab rada, mis on ette nähtud muude sõidukitega pärisuunas sõitvatele rööbasteta ühissõidukitele, jalgratastele, mopeedidele ja pisimopeedidele. Märk kehtib raja kohta, mille kohale see on pandud. Sõiduteest paremal olev märk kehtib parempoolse raja kohta. Märk 525b kehtib kuni märgi taga oleva lähima ristmikuni või eriradade lõppu näitava vastava märgini 526b „Ühissõiduki- ja jalgrattaraja lõpp“.",
      },
      {
        id: "526a",
        name: "Ühissõidukiraja lõpp",
        description: "Näitab märgiga 525a tähistatud ühissõidukiraja lõppu.",
      },
      {
        id: "526b",
        name: "Ühissõiduki- ja jalgrattaraja lõpp",
        description: "Näitab märgiga 525b tähistatud ühissõiduki- ja jalgrattaraja lõppu.",
      },
      {
        id: "527a",
        name: "Ühissõidukirajaga tee",
        description: "Tähistab teed, millel ühissõidukid sõidavad neile eraldatud rajal vastu üldist liiklusvoolu.",
      },
      {
        id: "527b",
        name: "Ühissõiduki- ja jalgrattarajaga tee",
        description: "Tähistab teed, millel ühissõidukid, jalgrattad, mopeedid ja pisimopeedid sõidavad neile eraldatud rajal vastu üldist liiklusvoolu.",
      },
      {
        id: "528a",
        name: "Ühissõidukirajaga tee lõpp",
        description: "Näitab märgiga 527a tähistatud ühissõidukirajaga tee lõppu.",
      },
      {
        id: "528b",
        name: "Ühissõiduki- ja jalgrattarajaga tee lõpp",
        description: "Näitab märgiga 527b tähistatud ühissõiduki- ja jalgrattarajaga tee lõppu.",
      },
      {
        id: "529a",
        name: "Sõit ühissõidukirajaga teele",
        description: "Näitab märgiga 527a „Ühissõidukirajaga tee“ tähistatud ühissõidukirajaga teele sõitmise kohta ja suunda.",
      },
      {
        id: "529b",
        name: "Sõit ühissõiduki- ja jalgrattarajaga teele",
        description: "Näitab märgiga 527b „Ühissõiduki- ja jalgrattarajaga tee“ tähistatud ühissõidukirajaga teele sõitmise kohta ja suunda.",
      },
      {
        id: "529c",
        name: "Sõit ühissõidukirajaga teele",
        description: "Näitab märgiga 527a „Ühissõidukirajaga tee“ tähistatud ühissõidukirajaga teele sõitmise kohta ja suunda.",
      },
      {
        id: "529d",
        name: "Sõit ühissõiduki- ja jalgrattarajaga teele",
        description: "Näitab märgiga 527b „Ühissõiduki- ja jalgrattarajaga tee“ tähistatud ühissõidukirajaga teele sõitmise kohta ja suunda.",
      },
      {
        id: "531s",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõidusuundadele sõiduradadelt pärisuunas kahe ja kolme sõiduraja korral.",
      },
      {
        id: "531v",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõidusuundadele sõiduradadelt pärisuunas kahe ja kolme sõiduraja korral.",
      },
      {
        id: "532as",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõidusuundadele pärisuuna sõiduradadel, kui kõrvalt suubuvale liiklusvoolule on olemas eraldi sõidurada.",
      },
      {
        id: "532av",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõidusuundadele pärisuuna sõiduradadel, kui kõrvalt suubuvale liiklusvoolule on olemas eraldi sõidurada.",
      },
      {
        id: "532bs",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõidusuundadele pärisuuna sõiduradadel, kui kõrvalt suubuvale liiklusvoolule on olemas eraldi sõidurada.",
      },
      {
        id: "532bv",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõidusuundadele pärisuuna sõiduradadel, kui kõrvalt suubuvale liiklusvoolule on olemas eraldi sõidurada.",
      },
      {
        id: "533as",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõidusuundadele pärisuuna sõiduradadel, kui kõrvalt suubuva liiklusvoolu jaoks puudub eraldi sõidurada (olenemata kiirendusraja olemasolust).",
      },
      {
        id: "533av",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõidusuundadele pärisuuna sõiduradadel, kui kõrvalt suubuva liiklusvoolu jaoks puudub eraldi sõidurada (olenemata kiirendusraja olemasolust).",
      },
      {
        id: "533bs",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõidusuundadele pärisuuna sõiduradadel, kui kõrvalt suubuva liiklusvoolu jaoks puudub eraldi sõidurada (olenemata kiirendusraja olemasolust).",
      },
      {
        id: "533bv",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõidusuundadele pärisuuna sõiduradadel, kui kõrvalt suubuva liiklusvoolu jaoks puudub eraldi sõidurada (olenemata kiirendusraja olemasolust).",
      },
      {
        id: "534s",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõidusuundadele sellelt sõidurajalt, mille kohale see on pandud.",
      },
      {
        id: "534v",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõidusuundadele sellelt sõidurajalt, mille kohale see on pandud.",
      },
      {
        id: "535s",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõidusuundadele sõiduradadel kolme ja enama sõidurajaga teel, kui suunavööndites on erinev arv sõiduradasid.",
      },
      {
        id: "535v",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõidusuundadele sõiduradadel kolme ja enama sõidurajaga teel, kui suunavööndites on erinev arv sõiduradasid.",
      },
      {
        id: "536as",
        name: "Sõidurajad ja -suunad",
        description: "Osutab lisaraja või aeglustusraja algusele.",
      },
      {
        id: "536av",
        name: "Sõidurajad ja -suunad",
        description: "Osutab lisaraja või aeglustusraja algusele.",
      },
      {
        id: "536bs",
        name: "Sõidurajad ja -suunad",
        description: "Osutab lisaraja või aeglustusraja algusele.",
      },
      {
        id: "536bv",
        name: "Sõidurajad ja -suunad",
        description: "Osutab lisaraja või aeglustusraja algusele.",
      },
      {
        id: "536cs",
        name: "Sõidurajad ja -suunad",
        description: "Osutab ühest ja samast kohast kahe lisaraja või kahe aeglustusraja algusele.",
      },
      {
        id: "536cv",
        name: "Sõidurajad ja -suunad",
        description: "Osutab ühest ja samast kohast kahe lisaraja või kahe aeglustusraja algusele.",
      },
      {
        id: "537as",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõiduraja või kiirendusraja lõpule. Märk on 50 m kaugusel enne sõiduraja või kiirendusraja täislaiuse lõppu.",
      },
      {
        id: "537av",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõiduraja või kiirendusraja lõpule. Märk on 50 m kaugusel enne sõiduraja või kiirendusraja täislaiuse lõppu.",
      },
      {
        id: "537ak",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõiduraja või kiirendusraja lõpule. Märk on 50 m kaugusel enne sõiduraja või kiirendusraja täislaiuse lõppu.",
      },
      {
        id: "537bs",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõiduraja või kiirendusraja lõpule. Märk on 50 m kaugusel enne sõiduraja või kiirendusraja täislaiuse lõppu.",
      },
      {
        id: "537bv",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõiduraja või kiirendusraja lõpule. Märk on 50 m kaugusel enne sõiduraja või kiirendusraja täislaiuse lõppu.",
      },
      {
        id: "537bk",
        name: "Sõidurajad ja -suunad",
        description: "Osutab sõiduraja või kiirendusraja lõpule. Märk on 50 m kaugusel enne sõiduraja või kiirendusraja täislaiuse lõppu.",
      },
      {
        id: "541a",
        name: "Bussi- või trollipeatus",
        description: "Osutab sõiduplaani kohaselt sõitjaid vedavate busside või trollide peatuskohale.",
      },
      {
        id: "541b",
        name: "Trammipeatus",
        description: "Osutab trammide peatuskohale.",
      },
      {
        id: "542",
        name: "Taksopeatus",
        description: "Osutab taksode peatuskohale.",
      },
      {
        id: "543",
        name: "Ülekäigurada",
        description: "Osutab jalakäijate reguleerimata ülekäigurajale.",
      },
      {
        id: "544",
        name: "Ülekäigurada",
        description: "Osutab jalakäijate reguleerimata ülekäigurajale.",
      },
      {
        id: "545a",
        name: "Käigutunnel",
        description: "Osutab sõiduteest eri tasandil olevale käiguteele.",
      },
      {
        id: "545b",
        name: "Käigutunnel",
        description: "Osutab sõiduteest eri tasandil olevale käiguteele.",
      },
      {
        id: "546a",
        name: "Käigutunnel",
        description: "Osutab sõiduteest eri tasandil olevale käiguteele.",
      },
      {
        id: "546b",
        name: "Käigutunnel",
        description: "Osutab sõiduteest eri tasandil olevale käiguteele.",
      },
      {
        id: "547a",
        name: "Käigusild",
        description: "Osutab sõiduteest eri tasandil olevale käiguteele.",
      },
      {
        id: "547b",
        name: "Käigusild",
        description: "Osutab sõiduteest eri tasandil olevale käiguteele.",
      },
      {
        id: "548a",
        name: "Käigusild",
        description: "Osutab sõiduteest eri tasandil olevale käiguteele.",
      },
      {
        id: "548b",
        name: "Käigusild",
        description: "Osutab sõiduteest eri tasandil olevale käiguteele.",
      },
      {
        id: "551",
        name: "Tagasipöörde koht",
        description: "Osutab kohale, mis on ette nähtud tagasipöördeks, kusjuures vasakpööre selles kohas on keelatud.",
      },
      {
        id: "552a",
        name: "Umbtee",
        description: "Märgil osutatud suunas on läbisõiduvõimaluseta tee.",
      },
      {
        id: "552b",
        name: "Umbtee ja jalgrattatee",
        description: "Osutatud suunas on sõidukitele, välja arvatud jalgratastele, tasakaaluliikuritele, mopeedidele ja pisimopeedidele, läbisõiduvõimaluseta tee. Jalgrataste, tasakaaluliikurite, mopeedide ja pisimopeedide liiklemiseks jätkub jalgrattatee või läbisõiduvõimalusega tee.",
      },
      {
        id: "553a",
        name: "Umbtee",
        description: "Märgil osutatud suunas on läbisõiduvõimaluseta tee.",
      },
      {
        id: "553b",
        name: "Umbtee",
        description: "Märgil osutatud suunas on läbisõiduvõimaluseta tee.",
      },
      {
        id: "554a",
        name: "Umbtee",
        description: "Märgil osutatud suunas on läbisõiduvõimaluseta tee.",
      },
      {
        id: "554b",
        name: "Umbtee",
        description: "Märgil osutatud suunas on läbisõiduvõimaluseta tee.",
      },
      {
        id: "555",
        name: "Ootekoht",
        description: "Osutab kohale, kus kitsal teel tuleb vastusõitja läbi lasta.",
      },
      {
        id: "556",
        name: "Sobiv kiirus",
        description: "Näitab teelõigule soovitatavat suurimsõidukiirust (km/h) heades ilmastiku- ja teeoludes. Soovitus ulatub lähima ristmikuni, ristmiku puudumisel tahvliga 821 „Mõjupiirkond” teatatud kauguseni. Kui aga märki 556 kasutatakse koos hoiatusmärgiga, ulatub soovitus ohtliku teelõigu lõpuni.",
      },
      {
        id: "557",
        name: "Lõikuv jalgrattatee",
        description: "Osutab lõikuvale jalgrattateele või lõikuvale jalgratta- ja jalgteele või lõikuvale jalgrattarajale.",
      },
      {
        id: "558",
        name: "Hädapeatuskoht tunnelis",
        description: "Osutab hädapeatuskohale tunnelis.",
      },
      {
        id: "559a",
        name: "Automaatkontroll",
        description: "Osutab automaatsele liiklusjärelevalve teostamisele.",
      },
      {
        id: "559b",
        name: "Automaatkontroll",
        description: "Osutab automaatsele liiklusjärelevalve teostamisele.",
      },
      {
        id: "561",
        name: "Muutsuunaliiklus",
        description: "Osutab teelõigu algusele, mille ühel või mitmel rajal võib liiklus muutuda vastassuunaliseks suunamuutefooride või märkide 535 „Sõidurajad ja -suunad” abil.",
      },
      {
        id: "562",
        name: "Muutsuunaliikluse lõpp",
        description: "Osutab märgiga 561 tähistatud teelõigu lõpule.",
      },
      {
        id: "563",
        name: "Sõit muutsuunaliiklusega teele",
        description: "Osutab muutsuunaliiklusega teele sõitmise kohale.",
      },
      {
        id: "571",
        name: "Asula",
        description: "Osutab kohale, kus hakkab kehtima asulale kindlaksmääratud liikluskord.",
      },
      {
        id: "572",
        name: "Asula lõpp",
        description: "Osutab kohale, millest alates kaotab kehtivuse asulale kindlaksmääratud liikluskord.",
      },
      {
        id: "573",
        name: "Õueala",
        description: "Osutab kohale, kus hakkab kehtima õuealale kindlaksmääratud liikluskord.",
      },
      {
        id: "574",
        name: "Õueala lõpp",
        description: "Osutab kohale, millest alates kaotab kehtivuse õuealale kindlaksmääratud liikluskord.",
      },
      {
        id: "575a",
        name: "Parkla",
        description: "Osutab sõidukitele ettenähtud parkimispiirkonnale.",
      },
      {
        id: "575b",
        name: "Parkla",
        description: "Osutab „Pargi ja reisi“ parklale, mis on sobiv märgil kujutatud või nimetatud ühissõidukile minevate inimeste sõidukitele.",
      },
      {
        id: "575c",
        name: "Teeninduskoha parkla",
        description: "Osutab sõidukitele ettenähtud parkimispiirkonnale teeninduskoha juures.",
      },
      {
        id: "575d",
        name: "Puudega inimese sõiduki parkimiskoht",
        description: "Osutab parkimiskohale, mida tohib kasutada ainult sõidukiga, millel on liikumispuudega või pimedat inimest teenindava sõiduki parkimiskaart.",
      },
      {
        id: "576a",
        name: "Parkimiskord",
        description: "Osutab märgiga 387 „Parkimisala” tähistatud alal ja märgiga 575a või 575b „Parkla“ või märgiga 575c „Teeninduskoha parkla“ tähistatud parklas mingi piirkonna parkimise korraldusele.",
      },
      {
        id: "576b",
        name: "Parkimiskord",
        description: "Osutab märgiga 387 „Parkimisala” tähistatud alal ja märgiga 575a või 575b „Parkla“ või märgiga 575c „Teeninduskoha parkla“ tähistatud parklas mingi piirkonna parkimise korraldusele.",
      },
      {
        id: "576c",
        name: "Parkimiskord",
        description: "Osutab märgiga 387 „Parkimisala” tähistatud alal ja märgiga 575a või 575b „Parkla“ või märgiga 575c „Teeninduskoha parkla“ tähistatud parklas mingi piirkonna parkimise korraldusele.",
      },
      {
        id: "576d",
        name: "Parkimiskord",
        description: "Osutab märgiga 387 „Parkimisala” tähistatud alal ja märgiga 575a või 575b „Parkla“ või märgiga 575c „Teeninduskoha parkla“ tähistatud parklas mingi piirkonna parkimise korraldusele.",
      },
      {
        id: "576e",
        name: "Parkimiskord",
        description: "Osutab märgiga 387 „Parkimisala” tähistatud alal ja märgiga 575a või 575b „Parkla“ või märgiga 575c „Teeninduskoha parkla“ tähistatud parklas mingi piirkonna parkimise korraldusele.",
      },
      {
        id: "576f",
        name: "Parkimiskord",
        description: "Osutab märgiga 387 „Parkimisala” tähistatud alal ja märgiga 575a või 575b „Parkla“ või märgiga 575c „Teeninduskoha parkla“ tähistatud parklas mingi piirkonna parkimise korraldusele.",
      },
      {
        id: "577a",
        name: "Parkimiskestus",
        description: "Osutab märgiga 387 „Parkimisala” tähistatud alal ja märgiga 575a või 575b „Parkla“ või märgiga 575c „Teeninduskoha parkla“ tähistatud parklas mingi piirkonna piiratud parkimise kestusele ööpäevaringselt. Märkide 577a korral on parkimiskella kasutamine kohustuslik.",
      },
      {
        id: "577b",
        name: "Parkimiskestus",
        description: "Osutavad märgiga 387 „Parkimisala” tähistatud alal ja märgiga 575a või 575b „Parkla“ või märgiga 575c „Teeninduskoha parkla“ tähistatud parklas mingi piirkonna piiratud parkimise kestusele teatud ajavahemikul. Märkide 577 korral on parkimiskella kasutamine kohustuslik.",
      },
      {
        id: "578a",
        name: "Tasuline parkimine",
        description: "Osutab, et märgiga 387 „Parkimisala” tähistatud alal ja märgiga 575a või 575b „Parkla“ või märgiga 575c „Teeninduskoha parkla“ tähistatud parklas on mingispiirkonnas tasuline parkimine vastavalt kas ööpäevaringselt või teatud ajavahemikul. Märgi 578a kasutamisel täiendava teabena märgiga 387 „Parkimisala” tähistatud tasulisel parkimisalal osutab tasulise parkimise piirkonna lõpulemärk 397 „Parkimisala lõpp”.",
      },
      {
        id: "578b",
        name: "Tasulise parkimise lõpp",
        description: "Osutab märgiga 578a tähistatud tasulise parkimisega piirkonna lõpule.",
      },
      {
        id: "579",
        name: "Sõiduki sundteisaldus",
        description: "Osutab, et rakendatakse tõkestusvahendina sõiduki teisaldamist.",
      },
      {
        id: "581",
        name: "Tunnel",
        description: "Osutab kohale, kus hakkab kehtima tunnelile kindlaksmääratud liikluskord.",
      },
      {
        id: "582",
        name: "Tunneli lõpp",
        description: "Osutab kohale, millest alates kaotab kehtivuse tunnelile kindlaksmääratud liikluskord.",
      },
      {
        id: "583",
        name: "Tööstuspiirkond",
        description: "Osutab tööstuspiirkonnale või tehnopargi asukohale.",
      },
      {
        id: "584a",
        name: "Prügimägi",
        description: "Osutab prügi mahapaneku kohale. Märgi allosale kantud kirje täpsustab prügi mahapanekukoha iseärasusi (sorteerimisjaam, jäätmejaam).",
      },
      {
        id: "584b",
        name: "Ohtlike ainete hoidla",
        description: "Osutab ohtlike ainete ja ohtlike jäätmete kogumiskohale.",
      },
      {
        id: "585a",
        name: "Parvlaevasadam",
        description: "Osutab parvlaevasadama asukohale.",
      },
      {
        id: "585b",
        name: "Kaubasadam",
        description: "Osutab kaubasadama asukohale.",
      },
      {
        id: "585c",
        name: "Jahisadam",
        description: "Osutab jahtidele ja väikelaevadele ettenähtud sadama asukohale.",
      },
      {
        id: "586a",
        name: "Lennujaam",
        description: "Osutab lennujaama asukohale.",
      },
      {
        id: "586b",
        name: "Bussijaam",
        description: "Osutab bussijaama asukohale.",
      },
      {
        id: "586c",
        name: "Raudteejaam",
        description: "Osutab raudteejaama asukohale.",
      },
      {
        id: "591",
        name: "Stoppjoonemärk",
        description: "Osutab sõiduki peatamise kohale foori keelava tule või reguleerija keelava märguande korral.",
      },
    ];
  }
}