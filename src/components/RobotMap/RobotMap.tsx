import React, {FunctionComponent, useEffect, useState} from 'react';
import Map, {Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {RobotMapMarker} from "./RobotMapMarker";
import './RobotMap.css';
import mapboxgl from "mapbox-gl";
import {ToastSeverity, showToast} from "../../utils/showToast";
import {Robot, RobotStatus} from "../../models/Robot";
import {Loading} from "../Loading/Loading";
import {IconButton} from "../IconButton/IconButton";
import {FaClock, FaChartLine, FaStopCircle} from "react-icons/fa";

// eslint-disable-next-line import/no-webpack-loader-syntax
(mapboxgl as any).workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const robotData = [
    { lat: 42.382561, lon: -71.059566, name: "Hammer", status: RobotStatus.IDLE, jobId: null},
    { lat: 42.382395, lon: -71.059899, name: "Nail", status: RobotStatus.WORKING, jobId: 479283 },
    { lat: 42.382381, lon: -71.059706, name: "Lug Nut", status: RobotStatus.CRASHED, jobId: 234477 },
]

type MapProps = {
    coords: { lat: number, lon: number },
}

export const RobotMap: FunctionComponent<MapProps> = ({ coords }: MapProps) => {

    const [popupInfo, setPopupInfo] = useState<null|Robot>(null);
    const [robots, setRobots] = useState<Robot[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Mock data fetch on load
    useEffect(() => {
        fetchRobots();
    }, []);

    // Mock a 3 second request
    const fetchRobots = () => {
        setIsLoading(true);
        setTimeout(() => {
            setRobots(robotData)
            setIsLoading(false);
        }, 3000);
    }

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
                        { popupInfo.jobId && (
                            <div>
                                <span><strong>Job ID: </strong>{popupInfo.jobId}</span>
                            </div>
                        ) }
                        <div style={{ textAlign: 'center' }}>
                            { popupInfo.status === RobotStatus.CRASHED && (
                                <IconButton
                                    icon={<FaChartLine/>}
                                    onClick={() => showToast("Fetching logs...", ToastSeverity.INFO)}
                                    color='black'
                                >
                                    View Logs
                                </IconButton>
                            ) }
                            { popupInfo.status === RobotStatus.IDLE && (
                                <IconButton
                                    icon={<FaClock/>}
                                    onClick={() => showToast("Queueing...", ToastSeverity.WARN)}
                                    color='black'
                                >
                                    Queue Job
                                </IconButton>
                            ) }
                            { popupInfo.status === RobotStatus.WORKING && (
                                <IconButton
                                    icon={<FaStopCircle/>}
                                    onClick={() => showToast("Job terminated", ToastSeverity.ERROR)}
                                    color='black'
                                >
                                    Terminate Job
                                </IconButton>
                            ) }
                        </div>
                    </Popup>
                )}
            </Map>
            {isLoading && <Loading/>}
        </div>
    );
}
