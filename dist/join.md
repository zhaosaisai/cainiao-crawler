# Linux join命令

Linux join命令用于将两个文件中，指定栏位内容相同的行连接起来。

找出两个文件中，指定栏位内容相同的行，并加以合并，再输出到标准输出设备。

### 语法

    join [-i][-a][-e][-o][-t][-v][-1][-2][--help][--version][文件1][文件2]
    

参数：

- -a   除了显示原来的输出内容之外，还显示指令文件中没有相同栏位的行。
- -e   若[文件1]与[文件2]中找不到指定的栏位，则在输出中填入选项中的字符串。
- -i或--igore-case   比较栏位内容时，忽略大小写的差异。
- -o   按照指定的格式来显示结果。
- -t   使用栏位的分隔字符。
- -v   跟-a相同，但是只显示文件中没有相同栏位的行。
- -1   连接[文件1]指定的栏位。
- -2   连接[文件2]指定的栏位。
- --help   显示帮助。
- --version   显示版本信息。

### 实例

连接两个文件。

为了清楚地了解join命令，首先通过cat命令显示文件testfile_1和
testfile_2 的内容。

然后以默认的方式比较两个文件，将两个文件中指定字段的内容相同的行连接起来，在终端中输入命令：

    join testfile_1 testfile_2 
    

首先查看testfile_1、testfile_2 中的文件内容：

    $ cat testfile_1 #testfile_1文件中的内容  
    Hello 95 #例如，本例中第一列为姓名，第二列为数额  
    Linux 85  
    test 30  
    cmd@hdd-desktop:~$ cat testfile_2 #testfile_2文件中的内容  
    Hello 2005 #例如，本例中第一列为姓名，第二列为年份  
    Linux 2009  
    test 2006 
    

然后使用join命令，将两个文件连接，结果如下：

    $ join testfile_1 testfile_2 #连接testfile_1、testfile_2中的内容  
    Hello 95 2005 #连接后显示的内容  
    Linux 85 2009  
    test 30 2006 
    

文件1与文件2的位置对输出到标准输出的结果是有影响的。例如将命令中的两个文件互换，即输入如下命令：

    join testfile_2 testfile_1

最终在标准输出的输出结果将发生变化，如下所示：

    $ join testfile_2 testfile_1 #改变文件顺序连接两个文件  
    Hello 2005 95 #连接后显示的内容  
    Linux 2009 85  
    test 2006 30 
    