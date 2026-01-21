import React, { useState, useEffect, useCallback, useRef } from "react";
import '../css/Tetris.css';

const ROWS = 20;
const COLS = 10;
const EMPTY = 0;

type TetrominoType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';
type Grid = number[][];
type Shape = number[][];

interface Tetromino {
  shape: Shape;
  type: TetrominoType;
}

const TETROMINOES: Record<TetrominoType, Shape> = {
  I: [[1, 1, 1, 1]],
  O: [[2, 2], [2, 2]],
  T: [[0, 3, 0], [3, 3, 3]],
  S: [[0, 4, 4], [4, 4, 0]],
  Z: [[5, 5, 0], [0, 5, 5]],
  J: [[6, 0, 0], [6, 6, 6]],
  L: [[0, 0, 7], [7, 7, 7]],
};

const COLORS: string[] = ["#000", "#0ff", "#ff0", "#a0f", "#0f0", "#f00", "#00f", "#fa0"];

interface Position {
  x: number;
  y: number;
}

export default function Tetris(): React.JSX.Element {
  const [grid, setGrid] = useState<Grid>(Array.from({ length: ROWS }, () => Array(COLS).fill(EMPTY)));
  const [score, setScore] = useState<number>(0);
  const [current, setCurrent] = useState<Tetromino | null>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState<boolean>(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const randomTetromino = (): Tetromino => {
    const keys = Object.keys(TETROMINOES) as TetrominoType[];
    const key = keys[Math.floor(Math.random() * keys.length)];
    return { shape: TETROMINOES[key], type: key };
  }

  const checkCollision = (shape: Shape, pos: Position): boolean =>
    shape.some((row, y) =>
      row.some((cell, x) => {
        if (!cell) return false;
        const newY = pos.y + y;
        const newX = pos.x + x;
        return newY >= ROWS || newX < 0 || newX >= COLS || grid[newY][newX] !== EMPTY;
      })
    );

  const merge = (shape: Shape, pos: Position): Grid => {
    const newGrid = grid.map(r => [...r]);
    shape.forEach((row, y) =>
      row.forEach((cell, x) => {
        if (cell) newGrid[pos.y + y][pos.x + x] = cell;
      })
    );
    return newGrid;
  }

  const clearLines = (g: Grid): Grid => {
    let cleared = 0;
    const newGrid = g.filter(row => {
      if (row.every(cell => cell !== EMPTY)) {
        cleared++;
        return false;
      }
      return true;
    });
    while (newGrid.length < ROWS) newGrid.unshift(Array(COLS).fill(EMPTY));
    if (cleared > 0) setScore(prev => prev + cleared * 10);
    return newGrid;
  }

  const move = useCallback((dx: number, dy: number) => {
    if (!current) return;
    const newPos = { x: position.x + dx, y: position.y + dy };

    if (!checkCollision(current.shape, newPos)) {
      setPosition(newPos);
    } else if (dy === 1) {
      // 碰到底部或其他方块，短延迟停住
      setTimeout(() => {
        const merged = merge(current.shape, position);
        const cleared = clearLines(merged);
        setGrid(cleared);
        const next = randomTetromino();
        if (checkCollision(next.shape, { x: Math.floor(COLS / 2) - 1, y: 0 })) {
          setGameOver(true);
          if (intervalRef.current) clearInterval(intervalRef.current);
        } else {
          setCurrent(next);
          setPosition({ x: Math.floor(COLS / 2) - 1, y: 0 });
        }
      }, 50);
    }
  }, [current, position, grid]); // Added grid dependency because merge uses grid state but logic implies merge uses current state which is updated via setGrid logic. Actually 'grid' is a dependency for checkCollision logic inside move? No, `grid` is state. `checkCollision` uses `grid`.

  // Wait, `checkCollision` uses `grid` state. `grid` changes. `move` depends on `grid`?
  // `checkCollision` is defined inside component, so it closes over `grid`.
  // So `move` must depend on `checkCollision` (which depends on `grid`).
  // So `move` depends on `grid`.

  const rotate = () => {
    if (!current) return;
    const rotated = current.shape[0].map((_, i) =>
      current.shape.map(row => row[i]).reverse()
    );
    if (!checkCollision(rotated, position)) setCurrent({ ...current, shape: rotated });
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!current || gameOver) return;
      switch (e.key.toLowerCase()) {
        case "a": move(-1, 0); break;
        case "d": move(1, 0); break;
        case "s": move(0, 1); break;
        case "w": rotate(); break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, move, gameOver]); // rotate is not in dependency list of useEffect but used. rotate depends on current, position, checkCollision => grid.
  // Ideally wrap rotate in useCallback too or include it.

  // 自动下落
  useEffect(() => {
    if (!current || gameOver) return;
    intervalRef.current = setInterval(() => move(0, 1), 500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current, gameOver, move]);

  const startGame = () => {
    setGrid(Array.from({ length: ROWS }, () => Array(COLS).fill(EMPTY)));
    setScore(0);
    setGameOver(false);
    const next = randomTetromino();
    setCurrent(next);
    setPosition({ x: Math.floor(COLS / 2) - 1, y: 0 });
  }

  const restartGame = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startGame();
  }

  const displayGrid = grid.map((row, r) =>
    row.map((cell, c) => {
      if (!current) return cell;
      const y = r - position.y;
      const x = c - position.x;
      if (y >= 0 && y < current.shape.length && x >= 0 && x < current.shape[0].length) {
        if (current.shape[y][x]) return current.shape[y][x];
      }
      return cell;
    })
  );

  return (
    <section className="tetris-section">
      <div className="tetris-banner">
        <p>Bored of reading my portfolio? How about playing a quick game of Tetris? Go ahead and try!</p>
      </div>
      <div className="tetris-container">
        <h2>Tetris</h2>
        <p>Score: {score}</p>
        {gameOver && <p style={{ color: "red" }}>Game Over!</p>}
        <div className="grid">
          {displayGrid.map((row, r) =>
            row.map((cell, c) => (
              <div key={`${r}-${c}`} className="cell" style={{ backgroundColor: COLORS[cell] }} />
            ))
          )}
        </div>
        <div className="controls">
          <button onClick={startGame}>Start</button>
          <button onClick={restartGame}>Restart</button>
        </div>
        <p>Controls: W = rotate, A = left, S = down, D = right</p>
      </div>
    </section>
  );
}