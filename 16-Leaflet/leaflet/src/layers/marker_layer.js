import L from 'leaflet';
import React, { useState } from 'react';
import { LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet';
import { defaultIcon } from '../icons/defaultIcon';
import { Card, Space, InputNumber, Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';

const DEFAULT_RADIUS = 3000;

const PopupStatistics = ({ feature, setRadiusFilter }) => {

    const [radius, setRadius] = useState(DEFAULT_RADIUS);
    const { name, adm0name, pop_max } = feature.properties;

    return (
        <>
            <Card type="inner" title="Name" style={{ marginTop: 16 }}>
                <b>{`${name}, ${adm0name}`}</b>
            </Card>
            <Card type="inner" title="Population" style={{ marginTop: 16 }}>
                <b>{`${pop_max}`}</b>
            </Card>
            <Card type="inner" title="Radius Filter" style={{ marginTop: 16 }}>
                <Space>
                    <InputNumber 
                        defaultValue={DEFAULT_RADIUS} 
                        min={0}
                        max={3000}
                        onChange={(e) => setRadius(e)}
                    >
                    </InputNumber>
                    <Button 
                        type='primary' 
                        shape='round' 
                        icon={<FilterOutlined />}
                        onClick={() => setRadiusFilter((prevState) => {         //Pega o valor do radiusFilter e armazena o valor anterior no parâmetro.
                            let newFilter;
                            if(prevState) {
                                if(radius === 0) {
                                    newFilter = prevState   //  Mantem o valor anterior do radiusFilter
                                } else {     
                                    const sameFeature = prevState.feature === feature;      //Se for mesma feature  -  Retorna true ou false
                                    const sameRadius = prevState.radius === radius;         //Se for mesmo raio     -  Retorna true ou false
                                    if(!sameFeature || !sameRadius) {
                                        newFilter = { feature, radius }      //Seta o objeto para o radiusFilter
                                    }
                                }
                            } else if (radius !== 0) {
                                newFilter = { feature, radius}
                            }
                                return newFilter;       //Seta o valor no radiusFilter
                        })}
                    >
                        Filtro por Km
                    </Button>
                </Space>
            </Card>
        </>
    )
}

export const MarkerLayer = ({ data, setRadiusFilter, getRadiusFilter, getGeoFilter }) => {

    const geoFilter = getGeoFilter();          // Pega o valor que está no GeoFilter, no caso o objeto feature do Continent
    const radiusFilter = getRadiusFilter();    // Pega o valor que está no filtro, no caso o objeto {feature, radius}

    let centerPoint;
    if (radiusFilter) {
        const { coordinates } = radiusFilter.feature.geometry;      // recebe o objeto da verificação do setRadiusFilter
        centerPoint = L.latLng(coordinates[1], coordinates[0]);     // Criar um ponto para o raio
    }

    const layer = data.features.filter((currentFeature) => {           // Filtra as features para o .map utilizar
        let filterByRadius;
        let filterByGeo;
        if(centerPoint){
            const { coordinates } = currentFeature.geometry;
            const currentPoint = L.latLng(coordinates[1], coordinates[0]);
            filterByRadius = centerPoint.distanceTo(currentPoint) / 1000 < radiusFilter.radius;       // Calculo do raio   - Retorna true ou false
        }

        if (geoFilter) {
            filterByGeo = booleanPointInPolygon(currentFeature, geoFilter)
        }

        let doFilter = true;
        if(geoFilter && radiusFilter) {
            doFilter = filterByGeo && filterByRadius
        } else if (geoFilter && !radiusFilter) {
            doFilter = filterByGeo;
        } else if (radiusFilter && !geoFilter) {
            doFilter = filterByRadius;
        }
        return doFilter;

    })
    .map((feature) => {

        const { coordinates } = feature.geometry;

        return(
            <Marker 
                key={String(coordinates)} 
                position={[coordinates[1], coordinates[0]]} 
                icon={defaultIcon}
                doFitToBounds={true}
            >
                <Popup>
                    <PopupStatistics feature={feature} setRadiusFilter={setRadiusFilter}/>
                </Popup>
            </Marker>
        )
    })
    return (
        <LayersControl.Overlay name="World Cities"> {/*  Cria o layer de cada coordenada/ponto   */}
            <LayerGroup>{layer}</LayerGroup>    {/*  Cria um grupo/agrupa de todas as coordenadas/pontos   */}
        </LayersControl.Overlay>
    )
}