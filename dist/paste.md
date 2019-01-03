# Linux paste命令

Linux paste命令用于合并文件的列。

paste指令会把每个文件以列对列的方式，一列列地加以合并。

### 语法

    paste [-s][-d ][--help][--version][文件...]

参数：

- -d或--delimiters= 　用指定的间隔字符取代跳格字符。
- -s或--serial 　串列进行而非平行处理。
- --help 　在线帮助。
- --version 　显示帮助信息。
- [文件…]   指定操作的文件路径

### 实例

使用paste指令将文件"file"、"testfile"、"testfile1"进行合并，输入如下命令：

    paste file testfile testfile1 #合并指定文件的内容 
    

但是，在执行以上命令之前，首先使用"cat"指令对3个文件内容进行查看，显示如下所示：

    $ cat file                  #file文件的内容  
    xiongdan 200  
    lihaihui 233  
    lymlrl 231  
    $ cat testfile              #testfile文件的内容  
    liangyuanm  ss  
    $ cat testfile1             #testfile1文件的内容  
    huanggai 56  
    zhixi 73 
    

当合并指令"$ paste file testfile testfile1"执行后，程序界面中将显示合并后的文件内容，如下所示：

    xiongdan 200  
    lihaihui 233  
    lymlrl 231  
    liangyuanm  ss  
    huanggai 56  
    zhixi 73  
    

若使用paste指令的参数"-s"，则可以将一个文件中的多行数据合并为一行进行显示。例如，将文件"file"中的3行数据合并为一行数据进行显示，输入如下命令

    $ paste -s file             #合并指定文件的多行数据

上面的命令执行后，显示的数据内容如下所示：

    xiongdan 200 lihaihui 233 lymlrl 231 
    

注意：参数"-s"只是将testfile文件的内容调整显示方式，并不会改变原文件的内容格式。