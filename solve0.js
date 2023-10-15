 function solveSudoku(board) {
// 找到一个未填充的位置
const emptyCell = findEmptyCell(board);
// 如果没有未填充的位置，表示数独已解决
if (!emptyCell) {
    return true;
}

const [row, col] = emptyCell;

// 尝试填充数字 1 到 9
for (let num = 1; num <= 9; num++) {
    if (isValidMove(board, row, col, num)) {
        // 如果这个数字是有效的，将其放入空单元格
        board[row][col] = num;
        
        // 递归调用解决下一个空单元格
        if (solveSudoku(board)) {
            return board; // 如果找到解决方案，返回 true
        }
        
        // 如果没有找到解决方案，撤销当前填充的数字
        board[row][col] = 0;
    }
}

// 如果尝试了 1 到 9 的所有数字都无法解决数独，返回 false，回溯到上一步
return false;
}

// 在数独中找到一个未填充的位置并返回其坐标，如果没有未填充的位置，返回 null
function findEmptyCell(board) {
for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
            return [row, col];
        }
    }
}
return null;
}

// 检查在给定位置填充数字 num 是否有效
function isValidMove(board, row, col, num) {
// 检查同一行是否有重复数字
for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) {
        return false;
    }
}

// 检查同一列是否有重复数字
for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) {
        return false;
    }
}

// 检查同一 3x3 方格是否有重复数字
const startRow = Math.floor(row / 3) * 3;
const startCol = Math.floor(col / 3) * 3;
for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === num) {
            return false;
        }
    }
}

return true;
}
// self.addEventListener('message', function(event) {
//     const i = event.data; // 可以直接访问传递的数字
//     alert(i); // 输出: 42
//   });
// 在 "solve.js" 中
self.onmessage = function (event) {
const sudokuBoard = event.data;
// alert(sudokuBoard);
// // const solution = solveSudoku(sudokuBoard); // 调用数独求解算法
self.postMessage(sudokuBoard); // 发送解决方案回主线程
};