# Linux mmove命令

Linux mmove命令用于在MS-DOS文件系统中，移动文件或目录，或更改名称。

mmove为mtools工具命令，模拟MS-DOS的move命令，可在MS-DOS文件系统中移动现有的文件或目录，或是更改现有文件或目录的名称。

### 语法

    mmove [源文件或目录...][目标文件或目录]

参数说明:

- 
[源文件或目录…]:
执行操作的源文件或目录路径
- 
[目标文件或目录]:
执行操作后的目标文件或目录路径

### 实例

使用指令mmove将文件"autorun.bat"移动到目录"test"中，输入如下命令：

    $ mmove autorun.bat test        #移动文件到目录test中 
    

以上命令执行以后，指令mmove会将文件"autorun.bat"移动到指定目录"test"中。

注意：用户可以使用mdir指令查看移动后的文件或目录信息。