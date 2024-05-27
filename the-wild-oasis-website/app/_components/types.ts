export interface Cabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description?: string;
}

export interface User {
  defaultCountry: any;
  id: any;
  name: string;
  className: string;
}

// Props

export interface CabinIdProps {
  params: Params;
}

// Params

export interface Params {
  cabinId: number;
}
