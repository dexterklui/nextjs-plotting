// Temperature over time
export const csvUrl =
  "https://gist.githubusercontent.com/curran/60b40877ef898f19aeb8/raw/week_temperature_sf.csv";

/**
 * Accessor functions for preprocessed data to get field value for a data item
 */
export const accessors = {
  /**
   * @param {DSVRowArray<String>} d
   * @returns {Date} datetime
   */
  date: (d) => d.date,

  /**
   * @param {DSVRowArray<String>} d
   * @returns {Number} temperature
   */
  temperature: (d) => +d.temperature,
};

function transformData(data) {
  return data.map((d) => ({
    date: new Date(d.timestamp),
    temperature: +d.temperature,
  }));
}

export function preprocessData(data) {
  return transformData(data);
}
