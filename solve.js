function solveSudoku(k0) {
//     // 获取表格元素的引用
//     const table = document.getElementById(`mytable${k}`);
//     for (let i = 0; i < table.rows.length; i++) {
//         const row = table.rows[i];
//         for (let j = 0; j < row.cells.length; j++) {
//           const cell = row.cells[j];
//           // 检查单元格是否包含 input 元素
//           const inputElement = cell.querySelector('input');
//           if (inputElement) 
//           {
//             if(inputElement.readOnly!=true)
//             {
//                 // 尝试填充数字 1 到 9
//             for (let num = 1; num <= 9; num++) {
//             if (isValidMove(k,i,j,num)) {
//                 // 如果这个数字是有效的，将其放入空单元格
//                 inputElement.value = num;
//                 inputElement.readOnly=true;
//                 inputElement.style.backgroundColor = "green";
                
//                 // 递归调用解决下一个空单元格
//                 if (solveSudoku(table)) {
//                     return true; // 如果找到解决方案，返回 true
//                 }
                
//                 // 如果没有找到解决方案，撤销当前填充的数字
//                 inputElement.value = 0;
//             }
//         }
//             }
//         }
//     }
//   }
//   alert("数独无解");
// let i=k0;
// for(let i0=1;i0<=9;i0++)
// {
//     var button = document.getElementById(`button${i}`);
// button.style.color = "green";
// }
const i=5;
var button = document.getElementById(`button${i}`);
button.style.color = "green";
  // 如果尝试了 1 到 9 的所有数字都无法解决数独，返回 false，回溯到上一步
  return k0*k0+1;
    // // 找到一个未填充的位置
    // const emptyCell = findEmptyCell(board);
    // // 如果没有未填充的位置，表示数独已解决
    // if (!emptyCell) {
    //     return true;
    // }
    
    // const [row, col] = emptyCell;
    
}

// 在数独中找到一个未填充的位置并返回其坐标，如果没有未填充的位置，返回 null
// function findEmptyCell(board) {
//     for (let row = 0; row < 9; row++) {
//         for (let col = 0; col < 9; col++) {
//             if (board[row][col] === 0) {
//                 return [row, col];
//             }
//         }
//     }
//     return null;
// }

// 检查在给定位置填充数字 num 是否有效
function isValidMove(k, i0,j0, num) {
    const table = document.getElementById(`mytable${k}`);
    const row = table.rows[i0];
    // 检查同一行是否有重复数字
    for (let i = 0; i < 9; i++) {
        const cell = row.cells[i];
          // 检查单元格是否包含 input 元素
          const inputElement = cell.querySelector('input');
          if (inputElement) 
          {
            if (inputElement.value == num) {
                return false;
            }
          }
          else
          {
            if(cell.textContent == num)
            {
                return false;
            }
          }
    }
    
    // 检查同一列是否有重复数字
    for (let i = 0; i < 9; i++) {
        const row0 = table.rows[i];
        const cell0 = row0.cells[j0];
        // 检查单元格是否包含 input 元素
        const inputElement = cell0.querySelector('input');
        if (inputElement) 
          {
            if (inputElement.value == num) {
                return false;
            }
          }
          else
          {
            if(cell0.textContent == num)
            {
                return false;
            }
          }
    }
    
    // 检查同一 3x3 方格是否有重复数字
    const startRow = Math.floor( i0/ 3) * 3;
    const startCol = Math.floor(j0/ 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        const row = table.rows[i];
        for (let j = startCol; j < startCol + 3; j++) {
            const cell = row.cells[j];
          // 检查单元格是否包含 input 元素
          const inputElement = cell.querySelector('input');
          if (inputElement) 
          {
            if (inputElement.value == num) {
                return false;
            }
          }
          else
          {
            if(cell.textContent == num)
            {
                return false;
            }
          }
        }
    }
    
    return true;
}
self.addEventListener('message', function(event) {
    let k1 = event.data;
    // k1=2;
    // var button = document.getElementById(`button${k1}`);
    // button.style.color = "green";
    k0=1;
    a=[1,2,3];
    const solution = solveSudoku(k1); // 调用数独求解算法
    // var button = document.getElementById("button1");
    // button.style.color = "green";
    self.postMessage(solution); // 发送解决方案回主线程
  });
//   for (let k=1; k<=9; k++)
//   {
//     var button = document.getElementById(`button${k}`);
//     if(button.style.color == "white")
//     {
//       const g=generatedSudokus0[k-1];
//       // 获取表格元素的引用
//       const table = document.getElementById(`mytable${k}`);
      // 遍历表格行和单元格
//       for (let i = 0; i < table.rows.length; i++) {
//         const row = table.rows[i];
//         for (let j = 0; j < row.cells.length; j++) {
//           const cell = row.cells[j];
//           // 检查单元格是否包含 input 元素
//           const inputElement = cell.querySelector('input');
//           if (inputElement) {
//             inputElement.value = g[i][j];
//             inputElement.readOnly=true;
//             inputElement.style.backgroundColor = "green";
//             button.style.color = "green"; //答案全部正确则按钮标绿
//           }
//         }
//       }
//       break;
//     }
//   }
  