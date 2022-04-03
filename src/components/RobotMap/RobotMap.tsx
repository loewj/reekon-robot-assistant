import React, {FunctionComponent, useState} from 'react';
import Map, { Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {RobotMapMarker} from "./RobotMapMarker";
import './RobotMap.css';
import mapboxgl from "mapbox-gl";
import {RobotStatus} from "../../App";

// eslint-disable-next-line import/no-webpack-loader-syntax
(mapboxgl as any).workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

interface Robot {name: string, lat: number, lon: number, status: RobotStatus}

type MapProps = {
    coords: { lat: number, lon: number },
    robots: Robot[]
}

export const RobotMap: FunctionComponent<MapProps> = ({ coords, robots }: MapProps) => {

    const [popupInfo, setPopupInfo] = useState<null|Robot>(null);

    return (
        <div className={"map-wrapper"}>
            <Map
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                initialViewState={{
                    latitude: coords.lat,
                    longitude: coords.lon,
                    zoom: 18,
                }}
                mapStyle="mapbox://styles/loewj/ckrp1qs6lbyg917mocfc54qza">
                {robots.map((r: any) =>
                    <div key={r.name} onClick={() => setPopupInfo(r)}>
                        <RobotMapMarker lat={r.lat} lon={r.lon}/>
                    </div>
                )}
                {popupInfo && (
                    <Popup
                        anchor="bottom"
                        longitude={popupInfo.lon}
                        latitude={popupInfo.lat}
                        closeOnClick={false}
                        onClose={() => setPopupInfo(null)}
                    >
                        <div>
                            <span><strong>Name: </strong>{popupInfo.name}</span>
                        </div>
                        <div>
                            <span><strong>Lat/Lon: </strong>{popupInfo.lat}, {popupInfo.lon}</span>
                        </div>
                        <div>
                            <span><strong>Status: </strong>{popupInfo.status}</span>
                        </div>
                    </Popup>
                )}
            </Map>
        </div>
    );
}
