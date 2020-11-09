export const LOAD_REGISTRATION_REQUEST = 'rego/LOAD_REGISTRATION_REQUEST';
export const LOAD_REGISTRATION_SUCCESS = 'rego/LOAD_REGISTRATION_REQUEST';
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

export interface VehicleRegoDetails {
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
  registrations: VehicleRegoDetails[];
  error: string;
  loading: boolean;
}
