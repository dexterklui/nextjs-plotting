import { Suspense } from "react";
import Loading from "@/app/loading";
import CsvInfoTable from "./CsvInfoTable";

const csvUrl =
  "https://gist.githubusercontent.com/Vikinov/e70aa947c5664302c691fcd94cb656f0/raw/da1af45d98249b9a44379647f5cc32c262edce3a/namedcolors.csv";

export default function Data() {
  return (
    <div>
      <h2>CSV Data Info</h2>
      <Suspense fallback={<Loading />}>
        <CsvInfoTable csvUrl={csvUrl} />
      </Suspense>
    </div>
  );
}
