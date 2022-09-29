import axios from "axios";
import { GetSolarSystemsResult } from "./types";

export function getSolarSystems(city: string): Promise<GetSolarSystemsResult> {
  return new Promise((resolve, reject) => {
    const pageSize = 999999
    // TODO: Limit for one page is 5000, should get more results if limit is reached 
    const url = `https://test2.aschwad.workers.dev/https://www.marktstammdatenregister.de/MaStR/Einheit/EinheitJson/GetVerkleinerteOeffentlicheEinheitStromerzeugung?sort=EinheitMeldeDatum-desc&page=1&pageSize=${pageSize}&group=&filter=Betriebs-Status~eq~%2735%27~and~Ort~eq~%27${city}%27~and~Energietr%C3%A4ger~eq~%272495%27&ia=web`;

    axios
      .get(url)
      .then((result) => {
        resolve(result.data)
      })
     .catch((error) => reject(error));

  });
}