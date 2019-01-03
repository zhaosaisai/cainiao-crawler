# Linux lndir命令

Linux lndir命令用于连接目录内容。

执行lndir指令，可一口气把源目录底下的文件和子目录统统建立起相互对应的符号连接。

### 语法

    lndir [-ignorelinks][-silent][源目录][目的目录]

参数：

- -ignorelinks   直接建立符号连接的符号连接。
- -silent   不显示指令执行过程。

### 实例

给目录下所有的文件或者子文件目录建立链接：

    lndir /home/uptech abc
    