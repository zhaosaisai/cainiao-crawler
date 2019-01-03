# Linux fmt命令

Linux fmt命令用于编排文本文件。

fmt指令会从指定的文件里读取内容，将其依照指定格式重新编排后，输出到标准输出设备。若指定的文件名为"-"，则fmt指令会从标准输入设备读取数据。

### 语法

    fmt [-cstu][-p][-w][--help][--version][文件...]

参数说明：

- -c或--crown-margin   每段前两列缩排。
- -p或-prefix=   仅合并含有指定字符串的列，通常运用在程序语言的注解方面。
- -s或--split-only   只拆开字数超出每列字符数的列，但不合并字数不足每列字符数的列。
- -t或--tagged-paragraph   每列前两列缩排，但第1列和第2列的缩排格式不同。
- -u或--uniform-spacing   每个字符之间都以一个空格字符间隔，每个句子之间则两个空格字符分隔。
- -w或--width=或-   设置每列的最大字符数。
- --help   在线帮助。
- --version   显示版本信息。

### 实例

重排指定文件。如文件testfile共5 行文字，可以通过命令对该文件格式进行重排，其命令为：

    fmt testfile 
    

输出结果如下：

    $ fmt testfile #重排testfile 文件  
    hello Linux! Linux is a free Unix-type operating system. This is a  
    Linux testfile! Linux Linux 
    

将文件testfile重新排成85 个字符一行，并在标准输出设备上输出，其命令应该为：

    fmt -w 85 testfile
    

为了对比，先使用cat 命令查看文件内容：

    $ cat testfile #查看testfile 文件的内容  
    hello Linux!  
    Linux is a free Unix-type operating system.  
    This is a Linux testfile!  
    Linux  
    Linux 
    

使用fmt命令重排之后，输出结果如下：

    $ fmt -w 85 testfile #指定重排宽度为85个字符  
    hello Linux! Linux is a free Unix-type operating system. This is a Linux testfile!  
    Linux Linux 
    