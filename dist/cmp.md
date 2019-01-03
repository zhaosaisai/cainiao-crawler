# Linux cmp命令

Linux cmp命令用于比较两个文件是否有差异。

当相互比较的两个文件完全一样时，则该指令不会显示任何信息。若发现有所差异，预设会标示出第一个不同之处的字符和列数编号。若不指定任何文件名称或是所给予的文件名为"-"，则cmp指令会从标准输入设备读取数据。

### 语法

    cmp [-clsv][-i ][--help][第一个文件][第二个文件]

参数：

- -c或--print-chars 　除了标明差异处的十进制字码之外，一并显示该字符所对应字符。
- -i或--ignore-initial= 　指定一个数目。
- -l或--verbose 　标示出所有不一样的地方。
- -s或--quiet或--silent 　不显示错误信息。
- -v或--version 　显示版本信息。
- --help 　在线帮助。

### 实例

要确定两个文件是否相同，请输入： 

    cmp prog.o.bak prog.o 
    

这比较 prog.o.bak 和 prog.o。如果文件相同，则不显示消息。如果文件不同，则显示第一个不同的位置；例如： 

    prog.o.bak prog.o differ: char 4, line 1 
    

如果显示消息 cmp: EOF on prog.o.bak，则 prog.o 的第一部分与 prog.o.bak 相同，但在 prog.o 中还有其他数据。 