import type { FeatureLike } from "ol/Feature";
import naravneNesreceIcon from "../../assets/spin-icons/bxs-meteor.svg";
import drugeIcon from "../../assets/spin-icons/bxs-x-circle.svg";
import avtoIcon from "../../assets/spin-icons/bxs-car-crash.svg";
import pozarIcon from "../../assets/spin-icons/bxs-hot.svg";
import onesnazenjeIcon from "../../assets/spin-icons/bxs-virus.svg";
import energentiIcon from "../../assets/spin-icons/bxs-battery-charging.svg";
import bombIcon from "../../assets/spin-icons/bxs-bomb.svg";
import tehnicnaIcon from "../../assets/spin-icons/bxs-cog.svg";
import jedrskaIcon from "../../assets/spin-icons/bxs-radiation.svg";
import telefonIcon from "../../assets/spin-icons/bxs-phone-incoming.svg";

const cache = {};


export const styleRules = [
    {
        title: "Naravne nesreče",
        icon: naravneNesreceIcon,
        color: "#63580f"
    },
    {
        title: "Druge nesreče",
        icon: drugeIcon,
        color: "#292929"
    },
    {
        title: "Onesnaženje",
        icon: onesnazenjeIcon,
        color: "#fb00ff",
    },
    {
        title: "Požar",
        icon: pozarIcon,
        color: "#f72d16",
    },
    {
        title: "Avtomobilska nesreča",
        icon: avtoIcon,
        color: "#ff9100",
    },
    {
        title: "Avtomobilska nesreča",
        icon: avtoIcon,
        color: "#f72d16",
    },
    {
        title: "Eksplozivna sredstva",
        icon: bombIcon,
        color: "black",
    },
    {
        title: "Tehnična pomoč",
        icon: tehnicnaIcon,
        color: "#805b25",
    },
    {
        title: "Jedrsko sevanje",
        icon: jedrskaIcon,
        color: "#c71ab3",
        filter: ['==', ['get', 'ikona'], 9],
        style: [
            {
                "circle-radius": 12.5,
                "circle-fill-color": "rgba(255, 255, 255, 0.5)",
                "circle-stroke-width": 2,
                "circle-stroke-color": "rgba(169, 169, 169, 0.5)"
            }, {
                'icon-src': jedrskaIcon,
                'icon-anchor': [0.5, 0.5],
                "icon-color": "#c71ab3"
            }]
    },
    {
        title: "Ne preverjeno",
        icon: telefonIcon,
        color: "blue",
    },
];