# Linux comm命令

Linux comm命令用于比较两个已排过序的文件。

这项指令会一列列地比较两个已排序文件的差异，并将其结果显示出来，如果没有指定任何参数，则会把结果分成3行显示：第1行仅是在第1个文件中出现过的列，第2行是仅在第2个文件中出现过的列，第3行则是在第1与第2个文件里都出现过的列。若给予的文件名称为"-"，则comm指令会从标准输入设备读取数据。

### 语法

    comm [-123][--help][--version][第1个文件][第2个文件]

参数：

- -1   不显示只在第1个文件里出现过的列。
- -2   不显示只在第2个文件里出现过的列。
- -3   不显示只在第1和第2个文件里出现过的列。
- --help   在线帮助。
- --version   显示版本信息。

### 实例

aaa.txt 与 bbb.txt 的文件内容如下：

    [root@localhost text]# cat aaa.txt 
    aaa 
    bbb 
    ccc 
    ddd 
    eee 
    111 
    222
    [root@localhost text]# cat bbb.txt
    bbb 
    ccc 
    aaa 
    hhh 
    ttt 
    jjj
    

    
    执行 comm 命令输出结果如下：
    
    [root@localhost text]# comm aaa.txt bbb.txt 
    aaa
                    bbb
                    ccc
            aaa
    ddd
    eee
    111
    222
            hhh
            ttt
            jjj
    第一列  第二列  第三列
    

 输出的第一列只包含在aaa.txt中出现的行，第二列包含在bbb.txt中出现的行，第三列包含在aaa.txt和bbb.txt中相同的行。各列是以制表符（\t）作为定界符。