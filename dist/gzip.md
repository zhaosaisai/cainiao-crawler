# Linux gzip命令

Linux gzip命令用于压缩文件。

gzip是个使用广泛的压缩程序，文件经它压缩过后，其名称后面会多出".gz"的扩展名。

### 语法

    gzip [-acdfhlLnNqrtvV][-S <压缩字尾字符串>][-<压缩效率>][--best/fast][文件...] 或 gzip [-acdfhlLnNqrtvV][-S <压缩字尾字符串>][-<压缩效率>][--best/fast][目录]
    

参数：

- -a或--ascii 　使用ASCII文字模式。
- -c或--stdout或--to-stdout 　把压缩后的文件输出到标准输出设备，不去更动原始文件。
- -d或--decompress或----uncompress 　解开压缩文件。
- -f或--force 　强行压缩文件。不理会文件名称或硬连接是否存在以及该文件是否为符号连接。
- -h或--help 　在线帮助。
- -l或--list 　列出压缩文件的相关信息。
- -L或--license 　显示版本与版权信息。
- -n或--no-name 　压缩文件时，不保存原来的文件名称及时间戳记。
- -N或--name 　压缩文件时，保存原来的文件名称及时间戳记。
- -q或--quiet 　不显示警告信息。
- -r或--recursive 　递归处理，将指定目录下的所有文件及子目录一并处理。
- -S或----suffix 　更改压缩字尾字符串。
- -t或--test 　测试压缩文件是否正确无误。
- -v或--verbose 　显示指令执行过程。
- -V或--version 　显示版本信息。
- - 　压缩效率是一个介于1－9的数值，预设值为"6"，指定愈大的数值，压缩效率就会愈高。
- --best 　此参数的效果和指定"-9"参数相同。
- --fast 　此参数的效果和指定"-1"参数相同。

### 实例

压缩文件

    [root@w3cschool.cc a]# ls //显示当前目录文件
    a.c b.h d.cpp
    [root@w3cschool.cc a]# gzip * //压缩目录下的所有文件
    [root@w3cschool.cc a]# ls //显示当前目录文件
    a.c.gz    b.h.gz    d.cpp.gz
    [root@w3cschool.cc a]# 
    

接范例1， 列出详细的信息

    [root@w3cschool.cc a]# gzip -dv * //解压文件，并列出详细信息
    a.c.gz:     0.0% -- replaced with a.c
    b.h.gz:     0.0% -- replaced with b.h
    d.cpp.gz:     0.0% -- replaced with d.cpp
    [root@w3cschool.cc a]# 
    

 接范例1，显示压缩文件的信息

    [root@w3cschool.cc a]# gzip -l *
         compressed    uncompressed ratio uncompressed_name
             24          0  0.0% a.c
             24          0  0.0% b.h
             26          0  0.0% d.cpp
    
    