import axios from "axios";
import { GetSolarSystemsResult, System } from "./types";

export function getSolarSystems(city: string, page: number = 1): Promise<System[]> {
  return new Promise((resolve, reject) => {
    // Max page size is 5.000
    const pageSize = 5000
    const sortByKey = "InbetriebnahmeDatum"
    const sortDirection = "asc"
    const proxyURL = "https://test2.aschwad.workers.dev/"
    const url = `${proxyURL}https://www.marktstammdatenregister.de/MaStR/Einheit/EinheitJson/GetVerkleinerteOeffentlicheEinheitStromerzeugung?sort=${sortByKey}-${sortDirection}&page=${page}&pageSize=${pageSize}&group=&filter=Betriebs-Status~eq~%2735%27~and~Ort~eq~%27${city}%27~and~Energietr%C3%A4ger~eq~%272495%27&ia=web`;

    axios
      .get(url)
      .then(async ({ data } : {data: GetSolarSystemsResult}) => {
        // The props "InbetriebnahmeDatum" is formated like: "/Date(1664409600000)/"
        // To leverage this prop as JS date, we create a cleaned version of the array
        let cleanedData : System[] = data.Data.map((entry)=> {
          return {
            ...entry,
            CleanedDate: new Date(parseInt(entry.InbetriebnahmeDatum.split("(")[1].split(")")[0]))
          }
        })
        if(cleanedData.length === 5000){
          // recursively call api again for next page, when pageLimit has been reached for current page
          const nextPage = await getSolarSystems(city, page + 1)
          cleanedData.push(...nextPage)
        }
        resolve(cleanedData)
      })
     .catch((error) => reject(error));

  });
}