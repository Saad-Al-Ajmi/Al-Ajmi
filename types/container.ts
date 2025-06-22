export interface DateField {
  Date: string;
  IsActual: string | boolean;
}

export interface TSPort {
  Port: string;
  ArrivalDate: DateField;
  DepartureDate: DateField;
}

export interface BLContainer {
  ContainerCode: string;
  ContainerTEU: string;
  ContainerType: string;
}

export interface ContainerInfo {
  Status: string;
  StatusId: number;
  ReferenceNo?: string;
  BLReferenceNo?: string;
  ShippingLine?: string;
  ContainerNumber: string;
  ContainerTEU?: string;
  ContainerType?: string;
  FromCountry?: string;
  Pol?: string;
  ToCountry?: string;
  Pod?: string;
  LoadingDate?: DateField;
  DepartureDate?: DateField;
  TSPorts?: TSPort[];
  Vessel?: string;
  VesselIMO?: string;
  VesselLatitude?: string;
  VesselLongitude?: string;
  VesselVoyage?: string;
  ArrivalDate?: DateField;
  DischargeDate?: DateField;
  FirstETA?: string;
  ETA?: string;
  GateInDate?: string;
  GateOutDate?: string;
  EmptyReturnDate?: string;
  FormatedTransitTime?: string;
  Co2Emission?: string;
  LiveMapUrl?: string;
  Tags?: string[];
  BLContainerCount?: number;
  BLContainers?: BLContainer[];
}
