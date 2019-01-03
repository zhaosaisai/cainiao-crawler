# Linux pico命令

Linux pico命令用于编辑文字文件。

pico是个简单易用、以显示导向为主的文字编辑程序，它伴随着处理电子邮件和新闻组的程序pine而来。

### 语法

    pico [-bdefghjkmqtvwxz][-n][-o][-r][-s][+][文件]
    

参数说明：

- -b   开启置换的功能。
- -d   开启删除的功能。
- -e   使用完整的文件名称。
- -f   支持键盘上的F1、F2...等功能键。
- -g   显示光标。
- -h   在线帮助。
- -j   开启切换的功能。
- -k   预设pico在使用剪下命令时，会把光标所在的列的内容全部删除。
- -m   开启鼠标支持的功能，您可用鼠标点选命令列表。
- -n   设置多久检查一次新邮件。
- -o   设置工作目录。
- -q   忽略预设值。
- -r   设置编辑文件的页宽。
- -s   另外指定拼字检查器。
- -t   启动工具模式。
- -v   启动阅读模式，用户只能观看，无法编辑文件的内容。
- -w   关闭自动换行，通过这个参数可以编辑内容很长的列。
- -x   关闭换面下方的命令列表。
- -z   让pico可被Ctrl+z中断，暂存在后台作业里。
- +   执行pico指令进入编辑模式时，从指定的列数开始编辑。

### 实例

使用pico命令来编辑testfile文件，在终端中输入如下命令：

    pico testfile 
    

输出结果如下：

    GNU nano 2.0.9 文件: testfile #从左到右分别为编辑器版本号、文件名  
    #编辑区  
    Linux networks are becoming more and more common, but security is often an over$  
    Linux Network Securty focuses on securing Linux in a networked environment, whe$  
    [ 已读取3 行] #以下为菜单栏  
    ^G 求助^O 写入^R 读档^Y 上页^K 剪切文字^C 在标位置  
    ^X 离开^J 对齐^W 搜寻^V 下页^U 还原剪切^T 拼写检查 
    