import React, {FunctionComponent} from 'react';
import Map, {GeolocateControl, NavigationControl, ScaleControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {RobotMapMarker} from "./RobotMapMarker";
import './RobotMap.css';

type MapProps = {
    coords: { lat: number, lon: number },
    robots: {name: string, lat: number, lon: number, id: number}[]
}

export const RobotMap: FunctionComponent<MapProps> = ({ coords, robots }: MapProps) => (
    <div className={"map-wrapper"}>
        <Map
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
                latitude: coords.lat,
                longitude: coords.lon,
                zoom: 15,
            }}
            mapStyle="mapbox://styles/loewj/ckrp1qs6lbyg917mocfc54qza">
            {robots.map((r: any, i) =>
                <RobotMapMarker key={r.name} lat={r.lat} lon={r.lon}/>
            )}
            <GeolocateControl position="top-right" />
            <NavigationControl position="top-right" />
            <ScaleControl />
        </Map>
    </div>
)