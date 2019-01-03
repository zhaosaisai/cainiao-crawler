# Linux rmdir命令

Linux rmdir命令删除空的目录。

### 语法

    rmdir [-p] dirName

参数：

- -p 是当子目录被删除后使它也成为空目录的话，则顺便一并删除。

### 实例

将工作目录下，名为 AAA 的子目录删除 :

    rmdir AAA

在工作目录下的 BBB 目录中，删除名为 Test 的子目录。若 Test 删除后，BBB 目录成为空目录，则 BBB 亦予删除。

    rmdir -p BBB/Test