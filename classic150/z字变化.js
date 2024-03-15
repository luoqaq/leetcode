/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  // 构建result二维数组 result[numRows][]
  const result = []
  let row = 0;
  let col = 0;
  let flag = 0; // 是向下还是向上 0-向下（row++ col不变） 1-向上（row-- col++）
  for (let i = 0; i < s.length; i++) {
    if (!result[row]) {
      result[row] = []
    }
    result[row].push(s[i])
    console.log('result', result)
      if (row === 0) {
          // 边界：最上面则 flag为0，开始向下
          flag = 0
      } else if (row === numRows - 1) {
          // 边界：最下面开始向上
          flag = 1
      }
      if (flag === 0) {
          row++
      } else {
          row--
          col++
      }
  }
  return result.reduce((pre, item) => pre += item.join(''), '')
};

convert('PAYPALISHIRING', 3)