// 定义一个数组来存储生成的数独
let generatedSudokus0 = [];
// const generatedSudokus0 = [];
// 生成数独并存储
function  generateSudoku(generatedSudokus){
  // 生成数独的逻辑
  const sudoku = [
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

  // 将数独添加到数组中
  generatedSudokus.push(sudoku);

  // 可以选择进行其他操作，如展示生成的数独
}
function fun0()
{
  const generatedSudokus = [];
  generateSudoku(generatedSudokus)
  // console.log(generatedSudokus);
  generatedSudokus0 = generatedSudokus;
  // console.log(generatedSudokus[0]);
}
fun0();
console.log(generatedSudokus0[0]);