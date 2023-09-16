import { csv, csvFormat } from "d3";

async function getCsvInfo(csvUrl, init) {
  const data = await csv(csvUrl, init);
  const sizeInKb = Math.round(csvFormat(data).length / 1024);
  const numOfEntries = data.length;
  const numOfFields = data.columns.length;
  return { sizeInKb, numOfEntries, numOfFields };
}

export default async function CsvInfoTable({ csvUrl, init }) {
  const csvInfo = await getCsvInfo(csvUrl, init);

  return (
    <table className="border-spacing-4 border-separate">
      <tbody>
        {Object.entries(csvInfo).map(([key, val]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{val}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
