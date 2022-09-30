import axios from "axios";
import { GetSolarSystemsResult, System } from "./types";

export function getSolarSystems(city: string): Promise<System[]> {
  return new Promise((resolve, reject) => {
    const pageSize = 999999
    const sortByKey = "InbetriebnahmeDatum"
    const sortDirection = "asc"
    // TODO: Limit for one page is 5000, should get more results if limit is reached 
    const url = `https://test2.aschwad.workers.dev/https://www.marktstammdatenregister.de/MaStR/Einheit/EinheitJson/GetVerkleinerteOeffentlicheEinheitStromerzeugung?sort=${sortByKey}-${sortDirection}&page=1&pageSize=${pageSize}&group=&filter=Betriebs-Status~eq~%2735%27~and~Ort~eq~%27${city}%27~and~Energietr%C3%A4ger~eq~%272495%27&ia=web`;

    axios
      .get(url)
      .then(({ data } : {data: GetSolarSystemsResult}) => {
        // The props "InbetriebnahmeDatum" is formated like: "/Date(1664409600000)/"
        // To leverage this prop as JS date, we create a cleaned version of the array 
        const cleanedData : System[] = data.Data.map((entry)=> {
          return {
            ...entry,
            CleanedDate: new Date(parseInt(entry.InbetriebnahmeDatum.split("(")[1].split(")")[0]))
          }
        })
        resolve(cleanedData)
      })
     .catch((error) => reject(error));

  });
}