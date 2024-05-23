export interface Cabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: HTMLImageElement | String | File;
}

export interface User {
  defaultCountry: any;
  id: any;
  name: string;
  className: string;
}
