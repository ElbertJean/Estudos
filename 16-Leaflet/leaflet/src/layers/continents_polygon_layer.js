import { GeoJSON, LayersControl, LayerGroup } from "react-leaflet";    // Poderia utilizar Polygon, porém teria que configurar todo long/lat do GeoJSON

export const ContinentsPolygonLayer = ({ data, setGeoFilter, getGeoFilter }) => {
    
    const geoFilter = getGeoFilter();

    const layer = (
        <>
            <GeoJSON 
                key='geo-json-layer'
                data={data} // a partir desse Data, tenho acesso a featuresCollection que contém os GeoJSON
                eventHandlers={{
                    click: (e) => {
                        setGeoFilter((prevState) => {
                            const same = prevState === e.propagatedFrom.feature //propagatedFrom é utilizado para extrair alguma informação da feature (um GeoJSON)
                            return same ? null : e.propagatedFrom.feature;
                        })
                    }
                }}
                style={(feature) => {
                    return {
                        color: geoFilter === feature ? 'red' : 'blue',
                        weight: 0.5,
                        fillOpacity: geoFilter === feature? 0.4 : 0.25
                    }
                }}
            ></GeoJSON>
        </>
    );
    return (
        <LayersControl.Overlay name="Continents">
            <LayerGroup>{layer}</LayerGroup>
        </LayersControl.Overlay>
    )
}

