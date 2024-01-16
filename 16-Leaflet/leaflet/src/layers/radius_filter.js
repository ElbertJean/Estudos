import { Circle, LayerGroup, LayersControl } from 'react-leaflet';

export const RadiusFilter = ({ radiusFilter, setRadiusFilter }) => {
    
    if (radiusFilter) {
        const { coordinates } = radiusFilter.feature.geometry;
        const layer = 
            <>
                <Circle 
                    center={[coordinates[1], coordinates[0]]}
                    color={"gray"}
                    weight={1}
                    fillOpacity={0.4}
                    radius={radiusFilter.radius * 1000}
                    eventHandlers={{
                        dblclick: (e) => {
                            e.originalEvent.view.L.DomEvent.stopPropagation(e);   // Cancela o evento de clique duplo
                            setRadiusFilter (null);
                        }
                    }}
                />
            </>
        return (
            <LayersControl.Overlay checked name="Radius">
                <LayerGroup>{layer}</LayerGroup>
            </LayersControl.Overlay>
        )
    } else {
        return null;
    }
}