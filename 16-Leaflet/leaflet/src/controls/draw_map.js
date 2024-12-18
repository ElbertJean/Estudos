import { useState } from "react";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

export const DrawMap = () => {
 
    const [polygon, setPolygon] = useState([]);

    polygon.map((e) => (
        console.log('Polygon:' , e)
    ));

    const _onCreated = (e) => {
        console.log(e);

        const { layerType, layer } = e;
        if (layerType === 'polygon') {
            setPolygon((layers) => [
                ...layers, { id: layer._leaflet_id, latlngs: layer.getLatLngs()[0] }
            ]);
        }
    }

    const _onEdited = (e) => {
        console.log(e);
        const {layers: {_layers}, } = e;

        Object.values(_layers).map(({ _leaflet_id, editing }) => setPolygon((layers) => 
        layers.map( l => l.id === _leaflet_id ? 
            { ...l, latlngs: 
                {...editing.latlngs[0]} 
            }
            : l
        )));
    };

    const _onDeleted = (e) => {
        console.log(e);
        const {layers: {_layers}, } = e;

        Object.values(_layers).map(({ _leaflet_id }) => setPolygon((layers) => layers.filter((l) => l.id !== _leaflet_id)));
    };

    return(
        <>
            <FeatureGroup>
                <EditControl 
                    position='topright'
                    onCreated={_onCreated}
                    onEdited={_onEdited}
                    onDeleted={_onDeleted}
                    draw={{
                        rectangle: false,
                        polyline: false,
                        circle: false,
                        circlemarker: false,
                        marker: false,
                    }}
                />
            </FeatureGroup>
        </>
    )
}