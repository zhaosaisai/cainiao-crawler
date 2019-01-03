# Linux mdeltree命令

Linux mdeltree命令可用来删除 MSDOS 格式档案及目录。

mdeltree 会将所指定的目录与目录之下的所有档案与目录都删除掉。如果所指定的档案或目录不存在，则会传回错误讯息。

### 语法

    mdeltree [-v] msdosdirectory [msdosdirectories...]

参数说明：

- -v 显示更多的信息。

### 实例

将 A 磁盘根目录中的 msdosdir 目录以下的档案与目录都删除掉。

    mcopy a:msdosdir