export interface CabinInterface {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description?: string;
}

export interface UserInterface {
  nationality?: string;
  nationalID?: number | string;
  countryFlag?: string;
  defaultCountry?: any;
  id?: any;
  fullName?: string;
  name?: string;
  className?: string;
  image?: any;
  email?: string;
}

// Props

export interface CabinIdProps {
  params: Params;
}

// Params

export interface Params {
  cabinId: number;
}
