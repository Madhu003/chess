"use client";
import { useEffect, useState } from "react";
import constatns from "./constants";

const fullMatrix: any = new Array(8).fill("").map(() => new Array(8).fill({}));

export default function Home() {
  const [matrix, setMatrix] = useState(fullMatrix);

  useEffect(() => {
    matrix[0] = [
      ...constatns.STARTINGPOSITIONS.BLACK.map((token: string) => ({ token })),
    ];
    matrix[1] = matrix[1].map(() => ({ token: constatns.BLACK.PAWN }));

    matrix[6] = matrix[6].map(() => ({ token: constatns.WHITE.PAWN }));
    matrix[7] = [
      ...constatns.STARTINGPOSITIONS.WHITE.map((token: string) => ({ token })),
    ];

    console.log(matrix);
    setMatrix([...matrix]);
  }, []);

  const cellClickHandler = (i: number, j: number) => {
    matrix.forEach((row: any) => {
      row.forEach((cell: any) => {
        cell.selected = false;
      });
    });

    matrix[i][j].selected = true;
    setMatrix([...matrix]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <table className="border-collapse border border-slate-400">
        <tbody>
          {matrix.map((row: any, i: number) => (
            <tr key={i}>
              {row.map((cell: any, j: number) => (
                <td
                  key={j}
                  style={{ fontSize: "44px", fontWeight: "600" }}
                  className={`border border-slate-300 cursor-pointer p-12 relative shadow-inner  ${
                    (i + j) % 2 == 0 ? "bg-slate-white" : "bg-slate-500"
                  } ${cell.selected && "selected-cell"}`}
                  onClick={() => cellClickHandler(i, j)}
                >
                  <p
                    className="m-0 p-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    dangerouslySetInnerHTML={{ __html: cell.token || "" }}
                  ></p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
