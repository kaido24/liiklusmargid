// Reguleerija märguanded
export class RegulatorAlertsService {
  getSigns() {
    return [
      {
        id: 'a',
        name: "Liikuda ei tohi",
        description: "",
      }, {
        id: 'b',
        name: "Liikuda ei tohi suunas, mis on väljasirutatud käega (kätega) risti",
        description: "",
      }, {
        id: 'c',
        name: "Liikuda tohib viibatud suunas",
        description: "",
      }, {
        id: 'd',
        name: "Sõita aeglasemalt",
        description: "",
      }, {
        id: 'e',
        name: "Sõiduk peatada osutatud kohas",
        description: "",
      }, {
        id: 'f',
        name: "Autost antav peatamismärguanne",
        description: "",
      }, {
        id: 'g',
        name: "Ees sõitev juht peab peatuma",
        description: "",
      }
    ];
  }
}