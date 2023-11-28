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


export function getStyle(f: FeatureLike) {
    const props = f.getProperties();
    console.log()
}

export const styleRules = [
    {
        filter: ['==', ['get', 'ikona'], 1],
        style: [
            {
                "circle-radius": 12.5,
                "circle-fill-color": "rgba(255, 255, 255, 0.5)",
                "circle-stroke-width": 2,
                "circle-stroke-color": "rgba(169, 169, 169, 0.5)"
            }, {
                'icon-src': naravneNesreceIcon,
                'icon-anchor': [0.5, 0.5],
                "icon-color": "#63580f",
            }]
    },
    {
        filter: ['==', ['get', 'ikona'], 2],
        style: [
            {
                "circle-radius": 12.5,
                "circle-fill-color": "rgba(255, 255, 255, 0.5)",
                "circle-stroke-width": 2,
                "circle-stroke-color": "rgba(169, 169, 169, 0.5)"
            }, {
                'icon-src': drugeIcon,
                'icon-anchor': [0.5, 0.5],
                "icon-color": "#292929",
            }]
    },
    {
        filter: ['==', ['get', 'ikona'], 3],
        style: [
            {
                "circle-radius": 12.5,
                "circle-fill-color": "rgba(255, 255, 255, 0.5)",
                "circle-stroke-width": 2,
                "circle-stroke-color": "rgba(169, 169, 169, 0.5)"
            }, {
                'icon-src': onesnazenjeIcon,
                'icon-anchor': [0.5, 0.5],
                "icon-color": "#fb00ff",
            }
        ]
    },
    {
        filter: ['==', ['get', 'ikona'], 4],
        style: [{
            "circle-radius": 12.5,
            "circle-fill-color": "rgba(255, 255, 255, 0.5)",
            "circle-stroke-width": 2,
            "circle-stroke-color": "rgba(169, 169, 169, 0.5)"
        }, {

            'icon-src': pozarIcon,
            'icon-anchor': [0.5, 0.5],
            "icon-color": "#f72d16"
        }]
    },
    {
        filter: ['==', ['get', 'ikona'], 5],
        style: [
            {
                "circle-radius": 12.5,
                "circle-fill-color": "rgba(255, 255, 255, 0.5)",
                "circle-stroke-width": 2,
                "circle-stroke-color": "rgba(169, 169, 169, 0.5)"
            }, {
                'icon-src': avtoIcon,
                'icon-anchor': [0.5, 0.5],
                "icon-color": "#ff9100"
            }]
    },
    {
        filter: ['==', ['get', 'ikona'], 6],
        style: {
            'icon-src': energentiIcon,
            'icon-anchor': [0.5, 0.5],
            "icon-color": "#f72d16"
        }
    },
    {
        filter: ['==', ['get', 'ikona'], 7],
        style: [
            {
                "circle-radius": 12.5,
                "circle-fill-color": "rgba(255, 255, 255, 0.5)",
                "circle-stroke-width": 2,
                "circle-stroke-color": "rgba(169, 169, 169, 0.5)"
            }, {
                'icon-src': bombIcon,
                'icon-anchor': [0.5, 0.5],
                "icon-color": "black"
            }]
    },
    {
        filter: ['==', ['get', 'ikona'], 8],
        style: [
            {
                "circle-radius": 12.5,
                "circle-fill-color": "rgba(255, 255, 255, 0.5)",
                "circle-stroke-width": 2,
                "circle-stroke-color": "rgba(169, 169, 169, 0.5)"
            },{
            'icon-src': tehnicnaIcon,
            'icon-anchor': [0.5, 0.5],
            "icon-color": "#805b25"
        }]
    },
    {
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
        filter: ['==', ['get', 'ikona'], 0],
        style: [
            {
                "circle-radius": 12.5,
                "circle-fill-color": "rgba(255, 255, 255, 0.5)",
                "circle-stroke-width": 2,
                "circle-stroke-color": "rgba(169, 169, 169, 0.5)"
            }, {
                'icon-src': telefonIcon,
                'icon-anchor': [0.5, 0.5],
                "icon-color": "blue"
            }]
    },
    {
        else: true,
        style: {
            'circle-radius': 6,
            'circle-fill-color': 'black',
        },
    },
];