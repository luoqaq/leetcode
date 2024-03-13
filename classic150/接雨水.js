/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//     // 从底部往上砍一刀，找到为0的下标，然后计算不为0的位置围起来的多少（从第一个不是0的开始，到最后一个不为0的结束，累计）
//     // diff 从1开始，表示比底部高出多少
//     // diff的边界只剩一个不为0的
//     let diff = 1;
//     let max = 0;
//     let count = 0;
//     let noZeroIndexs = []

//     let lastNozeroIndex = -1;
//     for (let i = 0; i < height.length; i++) {
//         if (max < height[i]) {
//             max = height[i]
//         }

//         if (height[i] >= diff) {
//             noZeroIndexs.push(i)
//             if (lastNozeroIndex !== -1) {
//                 count += (i - lastNozeroIndex - 1);
//             }
//             lastNozeroIndex = i;
//         }
//     }

//     diff++
//     while(diff <= max && noZeroIndexs.length > 1) {
//         let newNoZeroIndexs = [];
//         lastNozeroIndex = -1;
//         for (let i = 0; i < noZeroIndexs.length; i++) {
//             let index = noZeroIndexs[i];
//             if (height[index] >= diff) {
//                 newNoZeroIndexs.push(index);
//                 if (lastNozeroIndex !== -1) {
//                     count += (index - lastNozeroIndex - 1)
//                 }
//                 lastNozeroIndex = index;
//             }
//         }
//         diff++;
//         noZeroIndexs = newNoZeroIndexs;
//     }

//     return count;
// };

// var trap = function(height) {
//     let sum = 0;
//     let leftMax = 0;
//     let rightMax = 0
//     for (let i = 1; i < height.length - 1; i++) {
//         // 找左侧最高
//         leftIndex = i - 1;
//         for (let j = i - 1; j >= 0; j--) {
//             if (leftMax < height[j]) {
//                 leftMax = height[j]
//             }   
//         }
//         for (let j = i + 1; j < height.length; j++) {
//             if (rightMax < height[j]) {
//                 rightMax = height[j]
//             }
//         }

//         if (leftMax > height[i] && rightMax > height[i]) {
//             sum += (Math.min(leftMax, rightMax) - height[i])
//         }

//         leftMax = 0;
//         rightMax = 0
//     }
//     return sum
// }

var trap = function(height) {
  let sum = 0;
  let leftMax = height[0];
  let rightMax = 0
  for (let i = 1; i < height.length; i++) {
       if (rightMax < height[i]) {
          rightMax = height[i]
      }
  }
  console.log('rightMax', rightMax)
  for (let i = 1; i < height.length - 1; i++) {
      if (leftMax < height[i - 1]) {
          leftMax = height[i - 1]
      }
      
      console.log(i, 'leftMax', leftMax)

      if (rightMax === height[i]) {
          console.log(i, '当前为最高点，得重新计算')
          // 当前为最高点，接不到水，且rightMax不可用了，得重新计算
          rightMax = 0;
          for (let j = i + 1; j < height.length; j++) {
              if (rightMax < height[j]) {
                  rightMax = height[j]
              }
              console.log(i, '重新计算的最高点', rightMax)
          }
          continue;
      }

      if (leftMax > height[i] && rightMax > height[i]) {
          sum += (Math.min(leftMax, rightMax) - height[i])
      }
      console.log(i, 'sum', sum)
  }
  return sum
}

// trap([4,2,0,3,2,5])
trap([5,4,1,2])