# Linux mktemp命令

Linux mktemp命令用于建立暂存文件。

mktemp建立的一个暂存文件，供shell script使用。

### 语法

    mktemp [-qu][文件名参数]

参数：

- -q 　执行时若发生错误，不会显示任何信息。
- -u 　暂存文件会在mktemp结束前先行删除。
- [文件名参数] 　文件名参数必须是以"自订名称.XXXXXX"的格式。

### 实例

使用mktemp 命令生成临时文件时，文件名参数应当以"文件名.XXXX"的形式给出，mktemp 会根据文件名参数建立一个临时文件。在命令行提示符输入如下命令：

    mktemp tmp.xxxx #生成临时文件 

使用该命令后，可使用dir 或ls看当前目录，得到如下结果：

    cmd@cmd-desktop:~$ mktemp tmp.xxxx #生成临时文件  
    cmd@cmd-desktop:~$dir #查看当前目录  
    file test testfile testfile1 tmp.3847 #生成了tmp.3847 
    

由此可见，生成的临时文件为tmp.3847，其中，文件名参数中的"XXXX"被4 个随机产生的字符所取代。