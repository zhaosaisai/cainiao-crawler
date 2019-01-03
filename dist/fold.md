# Linux fold命令

Linux fold命令用于限制文件列宽。

fold指令会从指定的文件里读取内容，将超过限定列宽的列加入增列字符后，输出到标准输出设备。若不指定任何文件名称，或是所给予的文件名为"-"，则fold指令会从标准输入设备读取数据。

### 语法

    fold [-bs][-w][--help][--version][文件...]

参数：

- -b或--bytes   以Byte为单位计算列宽，而非采用行数编号为单位。
- -s或--spaces   以空格字符作为换列点。
- -w或--width   设置每列的最大行数。
- --help   在线帮助。
- --version   显示版本信息。

### 实例

将一个名为testfile 的文件的行折叠成宽度为30，可使用如下命令：

    fold -w 30 testfile
    

为了对比，先将testfile文件输出如下：

    $ cat testfile #查看testfile 中的内容  
    Linux networks are becoming more and more common, but 
    security is often an overlooked  
    issue. Unfortunately, in today’s environment all networks 
    are potential hacker targets,  
    from top-secret military research networks to small home LANs.  
    Linux Network Security focuses on securing Linux in a 
    networked environment, where the  
    security of the entire network needs to be considered 
    rather than just isolated machines.  
    It uses a mix of theory and practical techniques to 
    teach administrators how to install and  
    use security applications, as well as how the 
    applications work and why they are necessary. 
    

然后使用fold命令折叠显示：

    $ fold -w 30 testfile #行折叠成宽度为30，显示testfile 文件  
    Linux networks are becoming mo  
    re and more common, but securi  
    ty is often an overlooked issu  
    e. Unfortunately, in today’s  
    environment all networks are  
    potential hacker targets, from  
    top-secret military research  
    networks to small home LANs.  
    Linux Network Security focuses  
    on securing Linux in a networ  
    ked environment, where the sec  
    urity of the entire network ne  
    eds to be considered rather th  
    an just isolated machines. It  
    uses a mix of theory and pract  
    ical techniques to teach admin  
    istrators how to install and u  
    se security applications, as w  
    ell as how the applications wo  
    rk and why they are necessary 
    