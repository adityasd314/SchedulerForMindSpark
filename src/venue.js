class Venue {
    static campuses = {
        north: "North",
        south: "South",
        open: "Open Spaces",
        audi: "MAIN AUDI/MINI Audi/Worksop"
    }
    constructor(name, campus, buildings) {
        this.name = name
        this.campus = campus || Venue.VENUES[name] && Venue.VENUES[name].campus || null;
        this.buildings = buildings

    }

}
class Building {
    constructor(name, venue, location = "") {
        this.name = name
        this.location = location
        this.venue = venue
    }

}
const buildings = (p, ...x) => Object.fromEntries(x.map((y) => [y, new Building(y[0], p)]))
const Auditoriam = ["Auditoriam", Venue.campuses.south]
const AcademicComplex = ["Academic Complex", Venue.campuses.north,
    buildings("Academic Complex", ["Auditoriam"], ["AC101"], ["AC102"], ["AC103"], ["AC104"],
        ["AC201"], ["AC202"], ["AC203"], ["AC204"], ["MiniAuditoriam"], ["Cognizant"]
    )
];

const MechanicalDepartment = ["Mechanical Department", Venue.campuses.north,
    buildings("Mechanical Department",
        ["BSME1"], ["BSME2"], ["BSME3"], ["HeatTransferLab"], ["FUSION LAB MECH"]

    )];
const ENTC = ["ENTC department", Venue.campuses.north,
    buildings(
        "ENTC department", ["FOSS LAB"], ["ENTC 1"], ["TEXUS LAB"]

    )];
const BHAU = ["BHAU", Venue.campuses.north,
    buildings(
        "BHAU", ["KIRLOSKAR AUDI"], ["BHAU CR 1"], ["BHAU CR 2"]

    )];
const Instrumentation = ["Instrumentation Department", Venue.campuses.north,
    buildings(
        "Instrumentation Department", ["Instrumentation"]
    )];
const Production = ["Production Department", Venue.campuses.south,
    buildings("Production Department",
        ["SEMINAR HALL II"], ["SEMINAR HALL I"], ["PROD. MI101"], ["PROD. MI102"], ["PROD. BASE 1"], ["PROD. BASE 2"]

    )];
const Electrical = ["Electrical Department", Venue.campuses.south,
    buildings("Electrical Department",
        ["ELEC. 101"], ["ELEC. 102"], ["ELEC. 103"], ["ELE. 104"], ["ELEC. ANALOG LAB"]

    )];
const CivilPlanning = ["Civil and planning Department", Venue.campuses.south,
    buildings("Civil and planning Department",
        ["CIVIL 7"], ["CIVIL 8"], ["APP MECH LAB"], ["FY PLANNING CLASSROOM"]

    )];
const Metallurgy = ["Metallurgy Department", Venue.campuses.south,
    buildings("Metallurgy Department",
        ["META CR 1"], ["META CR 17"], ["METALLOGRAPHY LAB"]

    )];

const CollegeGround = ["College Ground", Venue.campuses.open,
];
const MainParking = ["MainParking", Venue.campuses.open,
];
const OutsideAudi = ["OutsideAudi", Venue.campuses.open,
];
const OutsidePlacementCell = ["OutsidePlacementCell", Venue.campuses.open,
];
const AccountSection = ["Account Section", Venue.campuses.open,
];
const HostelMess = ["HostelMess", Venue.campuses.open,
];
const FrontENTC = ["FrontENTC", Venue.campuses.open,
];
const OutsideSeminarHall = ["OutsideSeminarHall", Venue.campuses.open,
];
const VENUES = {
    "AcademicComplex": new Venue(...AcademicComplex)
    , "MechanicalDepartment": new Venue(...MechanicalDepartment)
    , "ENTC": new Venue(...ENTC)
    , "BHAU": new Venue(...BHAU)
    , "Instrumentation": new Venue(...Instrumentation)
    , "Production": new Venue(...Production)
    , "Electrical": new Venue(...Electrical)
    , "CivilPlanning": new Venue(...CivilPlanning)
    , "Metallurgy": new Venue(...Metallurgy)
    , "CollegeGround": new Venue(...CollegeGround)
    , "MainParking": new Venue(...MainParking)
    , "OutsideAudi": new Venue(...OutsideAudi)
    , "OutsidePlacementCell": new Venue(...OutsidePlacementCell)
    , "AccountSection": new Venue(...AccountSection)
    , "HostelMess": new Venue(...HostelMess)
    , "FrontENTC": new Venue(...FrontENTC)
    , "OutsideSeminarHall": new Venue(...OutsideSeminarHall),
    "Auditoriam": new Venue(...Auditoriam)
}
debugger
export { VENUES };