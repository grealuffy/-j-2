const worker = new Worker('./solve.js');
for (let k = 0; k <= 9; k++) 
{
  var button = document.getElementById(`button${k}`);
    if(button.style.color == "white")
    {
      // 发送数独矩阵序号给Web Worker进行处理
      worker.postMessage(k);
    }
}
// 监听来自Web Worker的消息
worker.onmessage = function(event) {
    const solution = event.data;
    if(solution)
    {
      alert('所有数独均已解决');
    }
  };