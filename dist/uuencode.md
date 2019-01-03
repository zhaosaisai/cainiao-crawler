# Linux uuencode命令

Linux uuencode命令用于将uuencode编码后的档案还原。

早期在许多 unix 系统的传送协定只能传送七位元字元，并不支援二进位档案，像中文文字档就有用到八位元，所以无法完整地送到另一架机器上。 uuencode 指令，可以将二进位档转换成七位元的档案，传送到另一架机器上再以 uudecode 还原。最常见的是用在以电子邮件传送二进位档。uuencode 编码后的资料都以 begin 开始，以 end 作为结束。

### 语法

     compress[必要参数][选择参数][目录或者文件]

参数说明：

必要参数：

- 无

选择参数：

- 
h 显示帮助信息
- 

v 显示版本信息

### 实例

还原档案

    # uuencode test.uud
    