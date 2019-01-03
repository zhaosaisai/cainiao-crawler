# Linux uudecode命令

Linuxuudecode 将 uuencode 编码后的档案还原， uudecode 只会将 begin 与 end 标记之间的编码资料还原，程序会跳过标记以外的资料。

### 
语法

    uuencode [-hv] [file1 ...]

参数：

- h 列出指令使用格式 (help)
- v 列出版本讯息

### 实例

将 file.uud 还原，而还原后的档名储存在 file.uud 档中。

    uuencode file.uud

可以一起还原好几个档案。

    uuencode file1.uud file2.uud