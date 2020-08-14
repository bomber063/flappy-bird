const canvas = wx.createCanvas();
console.log(canvas.width,canvas.height)
const context = canvas.getContext('2d') // 创建一个 2d context
context.fillStyle = '#1aad19' // 矩形颜色
context.fillRect(10, 10, 300, 200) // 矩形左上角顶点为(0, 0)，右下角顶点为(100, 100)