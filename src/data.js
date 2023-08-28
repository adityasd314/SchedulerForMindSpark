import { VENUES } from "./venue.js";
// import { tagNames } from './event.js';
const tagNames = {
  new: "new",
  upcoming: "upcoming",
  ongoing: "ongoing",
  concluded: "concluded"
}
const { AC101, AC102, AC103, AC104, AC201, AC202, AC203, AC204, Cognizant } =
  VENUES.AcademicComplex.buildings;
const { BSME1, BSME2, BSME3, HeatTransferLab } =
  VENUES.MechanicalDepartment.buildings;

console.log(tagNames)
// DateFormat: MM-DD-YYYY
const EVENTS_DATA = [
];
const add = (name, dates, venues, timings, tags, link, desc = "lorem eopsum dollar sit amet") => {
  const r = {};
  r.name = name;
  r.description = desc;
  r.dates = Object.fromEntries(dates.map((x, i) => ["round " + (i + 1), x]));
  r.venues = Object.fromEntries(venues.map((x, i) => ["round " + (i + 1), x]));;
  r.timings = Object.fromEntries(timings.map((x, i) => ["round " + (i + 1), ({ hour_start: x[0], hour_end: x[1] })]));
  r.tags = tags;
  r.link = link;
  EVENTS_DATA.push(r);
};
add("Code Junkie", ["08-28-2023"], [[AC101, AC102, AC103, AC104, AC201, AC202]], [[12, 1]], [tagNames.upcoming, tagNames.new], "google.com");
add("Retracer", ["08-27-2023"], [[AC101, AC102, AC103, AC104, AC201, AC202]], [[14, 15]], [tagNames.concluded, tagNames.new], "gmail.com");
add("Googler", ["08-27-2023", "08-28-2023"], [[Cognizant], [Cognizant]], [[13, 15], [17, 18]], [tagNames.ongoing], "unsplash.com");
add("Assemblix", ["08-27-2023", "08-28-2023", "08-29-2023"], [[BSME1, BSME2, BSME3], [BSME1, BSME2, BSME3], [HeatTransferLab]], [[13, 14], [16, 17], [10, 1]], [tagNames.new], "monkeytype.com");
add("Flip It", ["08-27-2023", "08-28-2023"], [[Cognizant, VENUES.ENTC.buildings['FOSS LAB']], [Cognizant]], [[16, 17], [12, 14]], [tagNames.upcoming], "keybr.com");

add("Fandom", ["08-27-2023", "08-28-2023"], [[Cognizant, VENUES.Production.buildings['PROD. MI101']], [Cognizant, VENUES.Production.buildings['PROD. MI102']]], [[13, 18], [17, 18]], [tagNames.upcoming], "keybr.com");

add("Sherlocked", ["08-27-2023", "08-28-2023"], [[Cognizant, VENUES.Production.buildings['PROD. BASE 2']], [Cognizant, VENUES.Production.buildings['PROD. MI102']]], [[13, 19], [12, 13]], [tagNames.upcoming], "keybr.com");
add("Microapps", ["08-27-2023", "08-28-2023", "08-29-2023"], [
  [
    VENUES.Electrical.buildings['ELEC. 101'],
    VENUES.Electrical.buildings['ELEC. 102'],
    VENUES.Electrical.buildings['ELEC. 103']
  ], [
    VENUES.ENTC['buildings']['TEXUS LAB']
  ],
  [
    VENUES.ENTC['buildings']['TEXUS LAB']
  ]
], [[13, 14], [10, 11], [14, 15]], [tagNames.upcoming], "keybr.com");
add("Electrade", ["08-27-2023", "08-28-2023", "08-28-2023"], [
  [
    VENUES.Electrical.buildings['ELEC. 101'],
    VENUES.Electrical.buildings['ELEC. 102'],
    VENUES.Electrical.buildings['ELEC. 103']
  ], [
    VENUES.Electrical.buildings['ELEC. 101'],
    VENUES.Electrical.buildings['ELEC. 102'],
    VENUES.Electrical.buildings['ELEC. 103']
  ],
  [VENUES.Electrical.buildings['ELEC. ANALOG LAB']]
], [[14, 15], [10, 11], [16, 18]], [tagNames.upcoming], "keybr.com");

console.log('EVENTS_DATA :>> ', EVENTS_DATA);
export { EVENTS_DATA };
