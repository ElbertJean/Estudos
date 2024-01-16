import ReactDOM, { unmountComponentAtNode } from 'react-dom';   //unmountComponentAtNode remove o component do DOM
import { Button } from 'antd';

import { BorderOuterOutlined, BorderInnerOutlined } from '@ant-design/icons';

import { createControlComponent } from '@react-leaflet/core'
import { Control, DomUtil } from 'leaflet'

const node = DomUtil.create('div');


Control.FitBoundToDataControl = Control.extend({
    options: {
        position: 'topleft',
    },
    onAdd: function (map) {
        const doFitDataToBounds = () => {
            const latLngs = [];
            map.eachLayer((layer) => {
                const latLng = layer.options.doFitToBounds && layer.getLatLng();
                if (latLng) {
                    latLngs.push(latLng)
                }
            })
            if (latLngs.length > 0) {
                map.fitBounds(latLngs);
            }
        }
        ReactDOM.render(
            <>
                <div style={{ display: 'flex' , flexDirection: 'column'}}>
                    <Button
                        className='leaflet-control-layers'
                        style={{ width: '33px', height: '33px' }}
                        title='Fit bounds to data' 
                        icon={<BorderInnerOutlined />}
                        onClick={() => doFitDataToBounds()}
                    >
                    </Button>
                    <Button
                        className='leaflet-control-layers'
                        style={{ width: '33px', height: '33px' }}
                        title='Fit bounds to world' 
                        icon={<BorderOuterOutlined />} 
                        onClick={() => map.fitWorld()}
                    >
                    </Button>
                </div>
            </>,
            node
        )
        return node;
    },
    onRemove: function () {
        unmountComponentAtNode(node)
    }
})

export const FitBoundToDataControl = createControlComponent(
  (props) => new Control.FitBoundToDataControl(props),
)