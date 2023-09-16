import mongodbQuery from "@/app/(js)/mongodb";
import dynamic from "next/dynamic";

// dyanmic import and disable server side rendering to prevent
// hydration error
const SimpleBarChart = dynamic(() => import("@/app/(js)/SimpleBarChart"), {
  ssr: false,
});

export default async function Recharts() {
  const users = await mongodbQuery("users");
  const genderFreq = users.reduce((accu, curr) => {
    if (accu.find((val) => val.gender === curr.gender) == undefined) {
      accu.push({ gender: curr.gender, count: 0 });
    }
    ++accu.find((val) => val.gender === curr.gender).count;
    return accu;
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <SimpleBarChart data={genderFreq} />
    </div>
  );
}
