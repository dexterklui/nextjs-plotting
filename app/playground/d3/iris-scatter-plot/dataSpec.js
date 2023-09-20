// The Iris Dataset
export const csvUrl =
  "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/iris.csv";

/** Accessor functions to get field values from a data item */
export const accessors = {
  /**
   * @param {DSVRowArray<String>} d
   * @returns {("setosa"|"versicolor"|"virginica")}
   */
  species: (d) => d.species,

  /**
   * @param {DSVRowArray<String>} d
   * @returns {Number} sepal length
   */
  sepalLength: (d) => +d["sepal_length"],

  /**
   * @param {DSVRowArray<String>} d
   * @returns {Number} sepal width
   */
  sepalWidth: (d) => +d["sepal_width"],

  /**
   * @param {DSVRowArray<String>} d
   * @returns {Number} petal length
   */
  petalLength: (d) => +d["petal_length"],

  /**
   * @param {DSVRowArray<String>} d
   * @returns {Number} petal width
   */
  petalWidth: (d) => +d["petal_width"],

  /**
   * @param {DSVRowArray<String>} d
   * @returns {Number} key
   */
  key: (d) => d.key,
};

function addKey(data) {
  return data.map((d, i) => {
    d.key = i;
    return d;
  });
}

export function preprocessData(data) {
  return addKey(data);
}
