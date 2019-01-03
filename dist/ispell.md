# Linux ispell命令

Linux ispell命令用于拼写检查程序。

ispell预设会使用/usr/lib/ispell/english.hash字典文件来检查文本文件。若在检查的文件中找到字典没有的词汇，ispell会建议使用的词汇，或是让你将新的词汇加入个人字典。

### 语法

    ispell [-aAbBClmMnNPStVx][-d][-L][-p][-w][-W][要检查的文件]

参数：

- -a   当其他程序输出送到ispell时，必须使用此参数。
- -A   读取到"&Include File&"字符串时，就去检查字符串后所指定文件的内容。
- -b   产生备份文件，文件名为.bak。
- -B   检查连字错误。
- -C   不检查连字错误。
- -d   指定字典文件。
- -l   从标准输入设备读取字符串，结束后显示拼错的词汇。
- -L   指定内文显示的行数。
- -m   自动考虑字尾的变化。
- -M   进入ispell后，在画面下方显示指令的按键。
- -n   检查的文件为noff或troff的格式。
- -N   进入ispell后，在画面下方不显示指令的按键。
- -p   指定个人字典文件。
- -P   不考虑字尾变化的情形。
- -S   不排序建议取代的词汇。
- -t   检查的文件为TeX或LaTeX的格式。
- -V   非ANSI标准的字符会以"M-^"的方式来显示。
- -w   检查时，特别挑出含有指定的字符。
- -W   不检查指定长度的词汇。
- -x   不要产生备份文件。

### 实例

检查文件的拼写。例如，检查testfile文件，可使用如下命令：

    ispell testfile 
    

如果文件中出现可疑词汇，则第一个出现的可疑词汇以高亮显示，并在屏幕下方给出词汇的修改意见，以及ispell的操作命令。如下所示：

    netwrks File: testfile  
    Linux netwrks are becoming more and more common, but security is often an overlooked  
    issue. Unfortunately  
    0: networks  
    [SP]  R)epl A)ccept I)nsert L)ookup U)ncap Q)uit e(X)it or ? for help
    

本例中，检查出netwrks 错误，并提示纠正信息，此时输入"0"，即使用networks 来纠正错误，同时继续显示下一个错误，直到所有的错误显示完毕。

通过以上实例我们可以发现，文件testfile中有拼写错误，对该文件进行修改后需备份文件。此时使用如下命令：

    ispell-b testfile    #检查拼写错误的同时，备份文件 
    

如果文件已经无拼写错误，则不显示任何信息，通过ls命令我们也可以查看到当前文件目录下产生了文件testfile的备份文件testfile.bak。查看结果如下所示：

    $ ls #以列表的形式查看当前目录下的文件  
    examples.desktop testfile_1 testfile.bak xx01 模板图片 音乐  
    testfile testfile1 testfile_2 xx00 公共的视频文档桌面 
    

其中，testfile.bak 文件就是刚才命令生成的备份文件，内容与原来的testfile 文件内容是一样的。