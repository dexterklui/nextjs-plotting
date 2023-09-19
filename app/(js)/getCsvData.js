import { csvParse } from "d3";

/**
 * @param {(RequestInfo | URL)} url
 * @param {RequestInit} [requestInit]
 * @returns {Promise<Array>} parsed CSV data table
 */
export default async function getCsvData(url, requestInit) {
  return new Promise(async (resolve) => {
    const res = await fetch(url, requestInit);
    const csvStr = await res.text();
    const data = csvParse(csvStr);
    resolve(data);
  });
}
