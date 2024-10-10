import { Mena } from "@/types/mena.types";
import axios from "axios";

export default async function DataPage() {
  const response = await axios.get(
    "https://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt"
  );

  const data: string = response.status === 200 ? response.data : "";
  const splitData: Array<string> = data.split("\n");
  const splitData2 = splitData.slice(2, splitData.length - 1);

  const parseData: Array<Mena | undefined> = splitData2.map((splitData) => {
    const splitCurrentLine = splitData.split("|");

    if (splitCurrentLine.length >= 5) {
      return {
        zeme: splitCurrentLine[0],
        mena: splitCurrentLine[1],
        count: Number(splitCurrentLine[2]),
        code: splitCurrentLine[3],
        kurz: Number(splitCurrentLine[4].replace(",", ".")),
      };
    }

    return undefined;
  });

  return (
    <div>
      {parseData.map((value, index) => (
        <div className="my-2" key={index}>
          {value?.code} - {value?.kurz}
        </div>
      ))}
    </div>
  );
}
