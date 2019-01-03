# Linux mdel命令

Linux mdel命令用来删除 MSDOS 格式的档案。

在删除只读之前会有提示信息产生。

### 语法

    mdel [-v] msdosfile [ msdosfiles ... ]

参数：

- -v 显示更多的讯息。

### 实例

将 A 槽磁片根目录中的 autoexec.bat 删除。

    mdel a:autoexec.bat . 