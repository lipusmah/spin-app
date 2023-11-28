import { Feature } from "ol";
import  { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { writable, type Readable, type Writable, derived } from "svelte/store";

type SpinLocation = {
    barva: number,
    dogodekNaziv: string,
    ikona: number,
    intervencijskaVrstaNaziv: string,
    nastanekCas: string,
    obcinaNaziv: string,
    prijavaCas: string,
    wgsLat: number,
    wgsLon: number,
}

export const locations: Writable<SpinLocation[]> = writable([]);
export const locationFeatures: Readable<Feature<Point>[]> = derived([locations], (values) => {
    const locs = values[0];
    return locs.map(l => locationToFeature(l));
});

const locationToFeature = (loc: SpinLocation) => {
    const p = new Point(fromLonLat([loc.wgsLon, loc.wgsLat]));
    const f = new Feature(p);
    f.setProperties(loc);
    return f;
}

const url = "/javno/assets/data/lokacija.json";
const reloadInterval = 30_000;

const reloadData = async () => {
    const res = await fetch(url);
    const data: { value: SpinLocation[], statusCode: number } = await res.json();
    locations.set(data.value);
    return;
}

export const dataLoader = () => {
    reloadData().then(res => {
        setTimeout(() => {
            dataLoader();
        }, reloadInterval);
    }).catch(err => { console.log(err) });
}