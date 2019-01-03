# Linux expr命令

expr命令是一个手工命令行计数器，用于在UNIX/LINUX下求表达式变量的值，一般用于整数值，也可用于字符串。

### 语法

    expr 表达式
    

表达式说明:

- 
用空格隔开每个项；
- 
用 / (反斜杠) 放在 shell 特定的字符前面；
- 
对包含空格和其他特殊字符的字符串要用引号括起来

### 实例

1、计算字串长度

    > expr length “this is a test”
     14
    

2、抓取字串

    > expr substr “this is a test” 3 5
    is is
    

3、抓取第一个字符数字串出现的位置

    > expr index "sarasara"  a
     2
    

4、整数运算

     > expr 14 % 9
     5
     > expr 10 + 10
     20
     > expr 1000 + 900
     1900
     > expr 30 / 3 / 2
     5
     > expr 30 \* 3 (使用乘号时，必须用反斜线屏蔽其特定含义。因为shell可能会误解显示星号的意义)
     90
     > expr 30 * 3
     expr: Syntax error
    