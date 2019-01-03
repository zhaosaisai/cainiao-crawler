# Linux look命令

Linux look命令用于查询单词。

look指令用于英文单字的查询。您仅需给予它欲查询的字首字符串，它会显示所有开头字符串符合该条件的单字。

### 语法

    look [-adf][-t][字首字符串][字典文件]

参数说明：

- -a   使用另一个字典文件web2，该文件也位于/usr/dict目录下。
- -d   只对比英文字母和数字，其余一慨忽略不予比对。
- -f   忽略字符大小写差别。
- -t   设置字尾字符串。

### 实例

为了查找在testfile文件中以字母L开头的所有的行，可以输入如下命令：

    look L testfile 
    

原文件testfile中的内容如下：

    $ cat testfile #查看testfile 文件内容  
    HELLO LINUX!  
    Linux is a free unix-type opterating system.  
    This is a linux testfile!  
    Linux test 
    

在testfile文件中使用look命令查找以"L"开头的单词，结果如下：

    $ look L testfile                              #查找以“L”开头的单词  
    Linux is a free unix-type opterating system.   #第二行以“L”开头，列出全句  
    Linux test                                     #第四行以“L”开头，列出全句 
    