export const LOAD_REGISTRATIONS_REQUEST = 'rego/LOAD_REGISTRATIONS_REQUEST';
export const LOAD_REGISTRATIONS_SUCCESS = 'rego/LOAD_REGISTRATIONS_SUCCESS';
export const API_ERROR = 'rego/API_ERROR';

export interface Vehicle {
  type: string;
  make: string;
  model: string;
  color: string;
  vin: string;
  tare_weight: number;
  gross_mass: number;
}

export interface RegoDetails {
  plate_number: string;
  registration: {
    expired: boolean;
    expiry_date: string;
  };
  vehicle: Vehicle;
  insurer: {
    name: string;
    code: number;
  };
}

export interface RegoState {
  registrations: RegoDetails[];
  error: string;
  loading: boolean;
}
