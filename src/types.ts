export interface GetSolarSystemsResult {
  Data:             RawSystem[];
  Total:            number;
  AggregateResults: any[];
  Errors:           null;
}

export interface RawSystem {
  Id:                          number;
  AnlagenbetreiberId:          number;
  AnlagenbetreiberMaStRNummer: string;
  AnlagenbetreiberName:        string;
  BetriebsStatusId:            number;
  BetriebsStatusName:          string;
  DatumLetzteAktualisierung:   string;
  EinheitMeldeDatum:           string;
  EinheitName:                 string;
  InbetriebnahmeDatum:         string;
  MaStRNummer:                 string;
  PersonenArtId:               number;
  Typ:                         number;
  Ort:                         string;
  Plz:                         string;
  AnzahlSolarModule:           number;
  Bruttoleistung:              number;
  EnergietraegerName:          string;
  Flurstueck:                  null;
  IsAnonymisiert:              boolean;
  IsPilotwindanlage:           null;
  LokationId:                  number;
  Nettonennleistung:           number;
}

export interface System extends RawSystem {
  CleanedDate: Date;
}