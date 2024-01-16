import React from 'react';
import { Marker, Tooltip, useMap, LayersControl, LayerGroup } from 'react-leaflet';
import { mountainIcon } from '../icons/mountainIcon';

export const MarkerLayerWithTooltip = ({ data }) => {

    const leafletMap = useMap();

    const layer = data.features.map(feature => {

        const { coordinates } = feature.geometry;  //Destructuring
        const { name, elevation, continent } = feature.properties;        //Destructuring

        return(
            <>
                <Marker 
                    key={[coordinates[1] + 10]}
                    position={[coordinates[1], coordinates[0]]}
                    icon={mountainIcon}
                    eventHandlers={{
                        click: (e) => {
                            leafletMap.panTo(e.latlng)  // utilizado para pegar as coordenadas do ponto e centralizar o mapa na tela
                        }
                    }}
                >
                    <Tooltip>
                        <h3>Mt. {name}</h3>
                        <p>Continent: <b>{continent}</b></p>
                        <p>Elevation: <b>{elevation}</b></p>
                    </Tooltip>
                </Marker>
            </>
        )
    })
    return (
        <LayersControl.Overlay name="Highest Points">
            <LayerGroup>{layer}</LayerGroup>
        </LayersControl.Overlay>
    )
}