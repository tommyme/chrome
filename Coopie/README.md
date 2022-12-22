# cookie copier

## 可以利用的点

1. 点击图标就执行《copy cookie》任务，值得借鉴
2. showMSG函数，能自动消失，非常漂亮简洁，用来显示提示信息非常好

## 简要分析

主要就是`bg.js`里面写了个点击监听器，用来执行`main.js`
然后`main.js`里面有 `showMSG` 的函数
还有计算cookie数量的函数
