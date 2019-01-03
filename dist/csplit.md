# Linux csplit命令

Linux csplit命令用于分割文件。

将文件依照指定的范本样式予以切割后，分别保存成名称为xx00,xx01,xx02...的文件。若给予的文件名称为"-"，则csplit指令会从标准输入设备读取数据。

### 语法

    csplit [-kqsz][-b][-f]
    [-n][--help][--version][文件][范本样式...] 
    

参数：

- -b或--suffix-format=   预设的输出格式其文件名称为xx00,xx01...等，您可以通过改变来改变输出的文件名。
- -f或--prefix=   预设的输出字首字符串其文件名为xx00,xx01...等，如果你指定输出字首字符串为"hello"，则输出的文件名称会变成hello00,hello01...等。
- -k或--keep-files   保留文件，就算发生错误或中断执行，也不能删除已经输出保存的文件。
- -n或--digits=   预设的输出文件名位数其文件名称为xx00,xx01...等，如果你指定输出文件名位数为"3"，则输出的文件名称会变成xx000,xx001...等。
- -q或-s或--quiet或--silent   不显示指令执行过程。
- -z或--elide-empty-files   删除长度为0 Byte文件。
- --help   在线帮助。
- --version   显示版本信息。

### 实例

将文本文件testfile以第 2 行为分界点切割成两份，使用如下命令：

    csplit testfile 2
    

testfile文件中的内容如下：

    $ cat testfile #查看testfile 文件内容  
    hello Linux!  
    Linux is a free Unix-type operating system.  
    This is a Linux testfile!  
    Linux 
    

使用csplit命令，输出结果如下：

    $ csplit testfile 2  
    13 #xx00文件字符个数  
    76 #xx01文件字符个数  
    

其中第1 行是第一个文件xx00的字符个数，同样，第2 行为第二个文件xx01的字符个数。同时，在testfile 的同目录下将生成两个文件，文件名分别为xx00、xx01，xx00 中的内容为：

    $ cat xx00 #查看分割后的xx00文件内容  
    hello Linux! #testfile文件第1行的内容 
    

xx01 中的内容为：

    $ cat xx01 #查看分割后的xx01文件内容  
    Linux is a free Unix-type operating system. #testfile文件第2行以后的内容  
    This is a Linux testfile!  
    Linux 
    