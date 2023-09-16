// import users from "@/_data/puffin.users.json";
// const data = Promise.resolve(
//   users.filter((item) => item.age < 120 && item.age > 0)
// );

import getCsvData from "@/app/(js)/getCsvData";
const carCsvUrl =
  "https://gist.githubusercontent.com/engrhassanr/53d0f114c5029064ce0309fec73ffa34/raw/carsdata.csv";
const data = getCsvData(carCsvUrl);

export default data;
