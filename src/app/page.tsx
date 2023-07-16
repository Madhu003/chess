"use client";
import { use, useEffect, useState } from "react";
import { getAcccesiblePathForToken } from "../utils";
import constatns from "./constants";

const fullMatrix: any = new Array(8)
  .fill("")
  .map(() => new Array(8).fill("").map(() => ({})));

export default function Home() {
  const [matrix, setMatrix] = useState(fullMatrix);
  const [chance, setChance] = useState<string>(constatns.TYPE.BLACK);
  const [pieceSelected, setPieceSelected] = useState<any>([]);

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

  useEffect(() => {
    console.log(chance);
  }, [chance]);

  const showAccessiblePath = (i: number, j: number) => {
    const cell = matrix[i][j];
    debugger;
    if (cell.type == chance) {
      cell.selected = true;

      const paths = getAcccesiblePathForToken(
        matrix[i][j].name,
        matrix[i][j].type,
        i,
        j
      );

      if (cell.name == constatns.PAWN) {
        for (let i = 0; i < paths.length; i++) {
          const coordinates = paths[i];
          for (let j = 0; j < coordinates.length; j++) {
            const [x, y] = coordinates[j];
            const interCell = matrix[x][y];
            debugger;
            if ((cell.wentGoTwoSteps && j == 1) || interCell?.name) {
              return;
            }
            interCell.accessible = true;
          }
        }
      } else if (cell.name == constatns.KNIGHT) {
        for (let i = 0; i < paths.length; i++) {
          const coordinates = paths[i];
          for (let j = 0; j < coordinates.length; j++) {
            const [x, y] = coordinates[j];
            const cell = matrix[x][y];

            cell.accessible = true;
          }
        }
      } else if (cell.name == constatns.KING) {
      } else {
        for (let i = 0; i < paths.length; i++) {
          const coordinates = paths[i];
          for (let j = 1; j < coordinates.length; j++) {
            const [x, y] = coordinates[j];
            const cell = matrix[x][y];
            
            if (cell?.name) {
              break;
            } else {
              cell.accessible = true;
            }
          }
        }
      }
    }
  };

  const clearSelection = () => {
    matrix.forEach((row: any) => {
      row.forEach((cell: any) => {
        cell.selected = false;
        cell.accessible = false;
      });
    });
    setPieceSelected([]);
  };

  const cellClickHandler = (i: number, j: number) => {
    const cell = matrix[i][j];
    if (pieceSelected.length == 0) {
      clearSelection();

      if (chance == cell.type && cell.name) {
        setPieceSelected([i, j]);
      }

      showAccessiblePath(i, j);
    } else if (pieceSelected[0] == i && pieceSelected[1] == j) {
      clearSelection();
    } else if (cell.type == chance) {
      clearSelection();
    } else if (cell.accessible) {
      const [preI, preJ] = pieceSelected;
      if (matrix[preI][preJ].name == constatns.PAWN) {
        matrix[preI][preJ].wentGoTwoSteps = true;
      }
      matrix[i][j] = matrix[preI][preJ];
      matrix[preI][preJ] = {};

      setChance(
        chance == constatns.TYPE.WHITE
          ? constatns.TYPE.BLACK
          : constatns.TYPE.WHITE
      );
      clearSelection();
    }

    setMatrix([...matrix]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
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
      <div className="mt-2">Chance: {chance}</div>
    </main>
  );
}
