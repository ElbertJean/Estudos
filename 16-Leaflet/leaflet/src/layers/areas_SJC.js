import { GeoJSON, LayersControl, LayerGroup } from "react-leaflet";

export const AreasSJCLayer = ({ data, setGeoFilter, getGeoFilter }) => {
    
    const geoFilter = getGeoFilter();
    console.log(data)

    const layer = (
        <>
            <GeoJSON 
                key='geo-json-areas-SJC'
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
        <LayersControl.Overlay name="Areas-SJC">
            <LayerGroup>{layer}</LayerGroup>
        </LayersControl.Overlay>
    )
}

