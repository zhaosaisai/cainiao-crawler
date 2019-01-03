# Linux mattrib命令

Linux mattrib命令用来变更或显示MS-DOS文件的属性。 

mattrib为mtools工具指令，模拟MS-DOS的attrib指令，可变更MS-DOS文件的属性。 

### 语法

    mattrib [-a|+a] [-h|+h] [-r|+r] [-s|+s] [-/] [-X] msdosfile [ msdosfiles ... ]

参数：

- -a/+a 除去/设定备份属性。
- -h/+h 除去/设定隐藏属性。
- -r/+r 除去/设定唯读属性。
- -s/+s 除去/设定系统属性。
- -/ 递回的处理包含所有子目录下的档案。
- -X 以较短的格式输出结果。

### 实例

列出 A 槽 MSDOS 格式磁片上所有文件的属性。

    mattrib a: 

除去 A 槽磁片上 msdos.sys 档案的隐藏、系统与唯读属性。

    mattrib -h -s -r a:msdos.sys

除去 A 槽磁片上包含子目录下所有档案的唯读属性。

    mattrib -r -/ a:*.*