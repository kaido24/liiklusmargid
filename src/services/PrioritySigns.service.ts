// Eesõigusmärgid
export class PrioritySignService {
  getSigns() {
    return [
      {
        id: '211',
        name: "Peatee",
        description: "Tähistab teed, millel sõitval juhil on reguleerimata ristmikul eesõigus kõrvalteel sõitva juhi suhtes.",
      },
      {
        id: '212',
        name: "Peatee lõpp",
        description: "Näitab märgiga 211 tähistatud tee lõppu.",
      },
      {
        id: '221',
        name: "Anna teed",
        description: "Kohustab juhti andma teed lõikuval teel, tahvli 834 „Sõidueesõigusega liiklemise või peatee suund” olemasolul aga peateel või sõidueesõigusega teel sõitvale juhile. Peateele pandud märk tähistab ühtlasi peatee lõppu.",
      },
      {
        id: '222',
        name: "Peatu ja anna teed",
        description: "kohustab juhti peatuma stoppjoone ees, selle puudumisel ristmiku juures lõikuva sõidutee ääre ees, muudes kohtades märgi ees. Juht peab andma teed lõikuval teel, tahvli 834 „Sõidueesõigusega liiklemise või peatee suund” olemasolul aga peateel või sõidueesõigusega teel sõitvale juhile. Ristmikul, kus kõigi harude ette on pandud märk 222, peab juht andma teed paremalt lähenevale või paremal asuvale juhile. Sel juhul on juht hoiatatud märgiga 132 „Samaliigiliste teede ristmik.",
      },
      {
        id: '231',
        name: "Vastassuuna eesõigus",
        description: "Kohustab juhti andma teed vastassuunas sõitvale juhile, kes on jõudnud teekitsendile või selle juurd",
      },
      {
        id: '232',
        name: "Pärisuuna eesõigus",
        description: "Annab juhile sõidueesõiguse teekitsendi läbimiseks.",
      }
    ];
  }
}