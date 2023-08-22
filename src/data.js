import { VENUES } from "./venue.js";
const { AC101, AC102, AC103, AC104, AC201, AC202, AC203, AC204, Cognizant } =
  VENUES.AcademicComplex.buildings;
const { BSME1, BSME2, BSME3, HeatTransferLab } =
  VENUES.MechanicalDepartment.buildings;


// DateFormat: MM-DD-YYYY
const EVENTS_DATA = [
  {
    name: "Code Junkie",
    description: "lorem epsum dollar sit amet",
    dates: {
      "round 1": "08-15-2023",
    },
    venues: {
      "round 1": [AC101, AC102, AC103, AC104, AC201, AC202],
    },
    timings: {
      "round 1": {
        hour_start: 12,
        hour_end: 1,
      },
    },
  },
  {
    name: "Retracer",
    description: "lorem epsum dollar sit amet",
    dates: {
      "round 1": "08-10-2023",
    },
    venues: {
      "round 1": [AC101, AC102, AC103, AC104, AC201, AC202],
    },
    timings: {
      "round 1": {
        hour_start: 14,
        hour_end: 15,
      },
    },
  },
  {
    name: "Googler",
    description: "lorem epsum dollar sit amet",
    dates: {
      "round 1": "08-12-2023",
      "round 2": "08-13-2023",
    },
    venues: {
      "round 1": Cognizant,
      "round 2": Cognizant,
    },
    timings: {
      "round 1": {
        hour_start: 13,
        hour_end: 15,
      },
      "round 2": {
        hour_start: 17,
        hour_end: 18,
      },
    },
  },
  {
    name: "Assemblix",
    description: "lorem epsum dollar sit amet",
    dates: {
      "round 1": "08-12-2023",
      "round 2": "08-13-2023",
      "round 3": "08-14-2023",
    },
    venues: {
      "round 1": [BSME1, BSME2, BSME3],
      "round 2": [BSME1, BSME2, BSME3],
      "round 3": [HeatTransferLab],
    },
    timings: {
      "round 1": {
        hour_start: 13,
        hour_end: 14,
      },
      "round 2": {
        hour_start: 16,
        hour_end: 17,
      },
      "round 3": {
        hour_start: 10,
        hour_end: 13,
      },
    },
  },
];
export { EVENTS_DATA };
