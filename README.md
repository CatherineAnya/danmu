# danmu

实现一个简易的弹幕墙

# 项目简介：
这是一个在学习FreeCodeCamp过程中的基础项目。

主要功能：显示弹幕、发送弹幕、清除弹幕

技术栈：HTML、CSS、jQuery

# 效果展示：
![image](https://user-images.githubusercontent.com/26202472/38066554-1181c5a4-333b-11e8-86f1-e455b7d75026.png)

# 过程中遇到的问题：
1.如何把数据存储同步并且存储同步在哪里？

在开始项目时，数据怎样存储、怎样同步、存储同步在哪里是一个大问题。之后我了解了野狗云这个实时通信引擎，思路逐渐清晰。
通过调用野狗云的API，实现了数据的存储与同步，解决了问题。

2.怎样随机选取颜色？

随机颜色是个更大的问题，我的理解是先从0-15中抽取六个数，并把超过9的数字转换成16进制数（也就是a-f），然后在6个数前面加上#号，显示成16进制的颜色。

# 项目不足及待改进之处：
当弹幕从右侧滑动至左侧边框处时，并没有消失，而是滑进浏览器左边框，待改进。
