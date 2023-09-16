import { range } from "d3";
import Smilie from "./Smilie";

export const dynamic = "force-dynamic";

export default function SmiliePage() {
  return (
    <div>
      <h2>Smilie Faces</h2>
      <div className="grid grid-cols-6">
        {range(3 * 6).map((i) => (
          <Smilie key={i} random={i} />
        ))}
      </div>
    </div>
  );
}
