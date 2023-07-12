"use client";
import { useEffect, useState } from "react";
import { getAcccesiblePathForToken } from "../utils";
import constatns from "./constants";

const fullMatrix: any = new Array(8)
  .fill("")
  .map(() => new Array(8).fill("").map(() => ({})));

export default function Home() {
  const [matrix, setMatrix] = useState(fullMatrix);

  useEffect(() => {
    matrix[0] = [...constatns.STARTINGPOSITIONS.BLACK];
    matrix[1] = matrix[1].map(() => ({
      unicode: constatns.BLACK.PAWN,
      name: constatns.PAWN,
      type: constatns.TYPE.BLACK,
    }));

    matrix[6] = matrix[6].map(() => ({
      unicode: constatns.WHITE.PAWN,
      name: constatns.PAWN,
      type: constatns.TYPE.WHITE,
    }));
    matrix[7] = [...constatns.STARTINGPOSITIONS.WHITE];

    console.log(matrix);
    setMatrix([...matrix]);
  }, []);

  const cellClickHandler = (i: number, j: number) => {
    matrix.forEach((row: any, iIndex: number) => {
      row.forEach((cell: any, jIndex: number) => {
        cell.selected = iIndex == i && jIndex == j;
        cell.accessible = false;
      });
    });

    const paths = getAcccesiblePathForToken(
      matrix[i][j].name,
      matrix[i][j].type,
      i,
      j
    );
    paths.forEach((coordinates) => {
      coordinates.forEach((coordinate: [number, number]) => {
        const [x, y] = coordinate;
        matrix[x][y].accessible = true;
      });
    });
    setMatrix([...matrix]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <table className="border-collapse border border-slate-400 board">
        <tbody>
          {matrix.map((row: any, i: number) => (
            <tr key={i}>
              {row.map((cell: any, j: number) => (
                <td
                  key={j}
                  style={{ fontSize: "44px", fontWeight: "600" }}
                  className={`border border-slate-300 cursor-pointer p-12 relative shadow-inner  ${
                    (i + j) % 2 == 0 ? "bg-slate-white" : "bg-slate-500"
                  } ${cell.selected || cell.accessible ? "selected-cell" : ""}`}
                  onClick={() => cellClickHandler(i, j)}
                >
                  <p
                    className="m-0 p-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    dangerouslySetInnerHTML={{ __html: cell.unicode || "" }}
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
