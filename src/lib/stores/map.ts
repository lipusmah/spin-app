import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM";

import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { styleRules } from "../utils/styles";
import TileWMS from "ol/source/TileWMS";
import { locationFeatures } from "./data";

const baselayer = new TileLayer({
    source: new OSM({}),
});
const source = new VectorSource();
const locationsLayer = new VectorLayer({
    source: source,
    style: styleRules,
});
const orto = new TileLayer({
    source: new TileWMS({
        url: "https://storitve.eprostor.gov.si/ows-ins-wms/oi/ows/ows",
        params: { LAYERS: "OI.OrthoimageCoverage", SRS: "EPSG:3857", TILED: true },
        transition: 0,
    }),
});

export const map = new Map({
    view: new View({
        center: fromLonLat([14, 45]),
        zoom: 8,
    }),
    controls: [],
    layers: [baselayer, orto, locationsLayer],
});

locationFeatures.subscribe((feats) => {
    console.log(feats);
    source.clear();
    source.addFeatures(feats);
});