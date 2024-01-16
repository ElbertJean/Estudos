import React, { useState } from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';


import { MarkerLayer } from '../layers/marker_layer';
import { MarkerLayerWithTooltip } from "../layers/marker_layer_with_tooltip";
// import { MarkerLayerWithTooltipCluster } from '../layers/marker_layer_with_tooltip_cluster';
import { RadiusFilter } from '../layers/radius_filter';
import { ContinentsPolygonLayer } from '../layers/continents_polygon_layer';
import { AreasSJCLayer } from '../layers/areas_SJC';

import { cities } from "../data/cities";
import { mountains } from "../data/highest_points";
import { continents } from '../data/continents';
import { areasSJC } from '../data/areasSJC';

import { FitBoundToDataControl } from '../controls/fit_data_to_bounds';
import { ShowActiveFiltersControl } from '../controls/show_active_filters'; 
import { DrawMap } from '../controls/draw_map';

import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
const Map = () => {

    const [geoFilter, setGeoFilter] = useState(null);   // Será utilizado para pegar o estado do GeoFilter
    const getGeoFilter = () => geoFilter                // Será utilizado para trabalhar com o valor repassado do GeoFilter

    const [radiusFilter, setRadiusFilter] = useState(null); //Utilizado para armazenar o valor do filtro de raio
    const getRadiusFilter = () => radiusFilter

    return(
        <MapContainer center={[0, 0]} zoom={1} scrollWheelZoom={true}>
            <LayersControl position='topright'>
                <LayersControl.BaseLayer checked name="OSM Streets">
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Map Cartoon">
                    <TileLayer
                    attribution= 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
                    url ='https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Dark">
                    <TileLayer
                    url= 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}'
                    attribution= '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    ext="png"
                    />
                </LayersControl.BaseLayer>
                <MarkerLayer 
                    data={cities} 
                    setRadiusFilter={setRadiusFilter} 
                    getRadiusFilter={getRadiusFilter} 
                    getGeoFilter={getGeoFilter}
                />
                <MarkerLayerWithTooltip data={mountains} />
                {/* <MarkerLayerWithTooltipCluster data={cities}/> */}
                <RadiusFilter radiusFilter={radiusFilter} setRadiusFilter={setRadiusFilter}/>
                <ContinentsPolygonLayer data={continents} setGeoFilter={setGeoFilter} getGeoFilter={getGeoFilter}/>
                <AreasSJCLayer data={areasSJC} getGeoFilter={getGeoFilter} setGeoFilter={setGeoFilter}/>
            </LayersControl>
            <DrawMap />
            <FitBoundToDataControl />
            <ShowActiveFiltersControl getFilters={() => ({geoFilter, radiusFilter})} />
        </MapContainer>
    )
}

export default Map