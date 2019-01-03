# Linux ed命令

Linux ed命令是文本编辑器，用于文本编辑。

ed是Linux中功能最简单的文本编辑程序，一次仅能编辑一行而非全屏幕方式的操作。

ed命令并不是一个常用的命令，一般使用比较多的是vi 指令。但ed文本编辑器对于编辑大文件或对于在shell脚本程序中进行文本编辑很有用。

### 语法

    ed [-][-Gs][-p][--help][--version][文件] 
    

参数：

- -G或--traditional   提供回兼容的功能。
- -p   指定ed在command mode的提示字符。
- -s,-,--quiet或--silent   不执行开启文件时的检查功能。
- --help   显示帮助。
- --version   显示版本信息。

### 实例

以下是一个 Linux ed 完整实例解析：

    $ ed              
    
    这是文件的内容是：
    
        $ cat readme.text 
        My name is Titan. 
        I am 24 years old. 
        And I love Perl vrey much. 
        
    
    