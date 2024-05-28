
export interface header {
    xRapidAPIKey: string;
    xRapidAPIHost: string;
}

export class Project {
    id: string;
    name: string;
    healthcheckUrl: string;
    siteUrl: string;
    type : number ; 
    assignedTo: string;
    isActive: boolean;
    sendMailifUnhealthy: boolean;
    durationInMinute: number;
    maxResponseTimeInSecond: number;
    headersSerialized: string;
    headers: header[];
}