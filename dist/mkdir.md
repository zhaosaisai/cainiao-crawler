# Linux mkdir命令

Linux mkdir命令用于建立名称为 dirName 之子目录。

### 语法

    mkdir [-p] dirName

参数说明：

- -p 确保目录名称存在，不存在的就建一个。

### 实例

在工作目录下，建立一个名为 AAA 的子目录 :

    mkdir AAA

在工作目录下的 BBB 目录中，建立一个名为 Test 的子目录。
若 BBB 目录原本不存在，则建立一个。（注：本例若不加 -p，且原本 BBB目录不存在，则产生错误。）

    mkdir -p BBB/Test