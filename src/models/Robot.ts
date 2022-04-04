export enum RobotStatus {
    IDLE = "Idle",
    WORKING = "Working",
    CRASHED = "Crashed"
}

export interface Robot {name: string, lat: number, lon: number, status: RobotStatus, jobId: number|null}
