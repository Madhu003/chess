import Image from "next/image";
import { useState } from "react";

const fullMatrix: any = new Array(8).fill("").map(() => new Array(8).fill({}));

export default function Home() {
  const [matrix, setMatrix] = useState(fullMatrix);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <table>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
