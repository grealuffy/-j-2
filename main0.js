function fun5()
{
    // 创建一个新的Web Worker
const worker = new Worker('solve0.js');

// 定义数独矩阵（示例）
const sudokuMatrix = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const   k=45;
// 发送数独矩阵给Web Worker进行处理
worker.postMessage(k);

// 监听来自Web Worker的消息
worker.onmessage = function(event) {
  const solvedSudoku = event.data;
  alert(solvedSudoku);
};
}

