# Linux spell命令

Linux spell命令可建立拼写检查程序。

spell可从标准输入设备读取字符串，结束后显示拼错的词汇。

### 语法

    spell

### 实例

检查文件testfile是否有拼写错误，在命令行提示符下输入如下命令：

    spell testfile 
    

如果文件中有单词拼写错误，则输出如下信息：

    $ spell testfile   #检查testfile 拼写错误  
    scurity            #以下为有错误的单词  
    tp  
    LANs  
    Securty  
    practicl  
    applcations  
    necesary 
    

如果所检查的文件没有单词拼写错误，那么，命令运行后不会给出任何信息。

检查从标准输入读取的字符串。例如在命令行中输入如下命令：

    spell 
    

按回车键后，输入一串字符串，然后按Ctrl+D 组合键退出spell，屏幕上将显示拼写有错误的单词。如下所示：

    $ spell #检查标准输入的字符串的拼写错误  
    hell,this is a linx sustem! #拼写错误的字符串  
    linx #以下为有拼写错误的单词  
    sustem 
    