import thermalBreakProfileImage from '../assets/thermalhd.JPG';
import thermalBreakAluminiumProfileImage from '../assets/thermal break aluminium profile/thermal-break-aluminium-profile.jpg';
import aluminiumExtrusionImage from '../assets/aluminium extrusion/AE.jpg';
import hvacImage from '../assets/hvac solutions/hvac.jpg';
import powderCoatingImage from '../assets/powder coating/powdercoating.jpg';
import woodenCoatingImage from '../assets/woodencoating.png';

export const Productlist =[
    {
        id:1,
        head: " Thermal Break Profiles",
        //para: "High-quality standard solutions always available for fast delivery of any length and required quantity.",
        para: "A thermal break profile (also called thermal barrier strip, polyamide strip, PA66) is an insertion of an insulating...",
        image: thermalBreakProfileImage,
        url: '/thermalbreakprofile' ,
    },
    {
        id:2,
        head: " Thermal Break Aluminium Profile",
        para: "A thermal break aluminum profile is a type of window or door frame that includes a non-conductive material...",
        image: thermalBreakAluminiumProfileImage,
        url: '/thermalbreakaluminiumprofile',
    },
    {
        id:3,
        head: "HVAC Solutions ",
        para: "HVAC solutions refer to systems and services for heating, ventilation, and air conditioning in buildings...",
        image: hvacImage,
        url: '/hvacsolution',
    },
    {
        id:4,
        head: " Aluminium Extrusion ",
        para: "Aluminum extrusion is a process where aluminum is forced through a die to create specific cross-sectional...",
        image: aluminiumExtrusionImage,
        url: '/aluminiumextrusion',
    },
    {
        id:5,
        head: " Powder Coating ",
        para: "Powder coating is a process where dry powder is applied electrostatically to a surface, then cured under heat...",
        image: powderCoatingImage,
        url: '/powdercoating',
    },
    {
        id:6,
        head: " Wooden Coating ",
        para: "Wood coating enhances durability, appearance, and resistance to moisture, UV radiation, and environmental factors...",
        image: woodenCoatingImage,
        url: '/woodencoating',
    }
];
export default Productlist;