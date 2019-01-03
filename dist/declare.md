# Linux declare命令

Linux declare命令用于声明 shell 变量。

declare为shell指令，在第一种语法中可用来声明变量并设置变量的属性([rix]即为变量的属性），在第二种语法中可用来显示shell函数。若不加上任何参数，则会显示全部的shell变量与函数(与执行set指令的效果相同)。

### 语法

    declare [+/-][rxi][变量名称＝设置值] 或 declare -f

参数说明：

- +/- 　"-"可用来指定变量的属性，"+"则是取消变量所设的属性。
- -f 　仅显示函数。
- r 　将变量设置为只读。
- x 　指定的变量会成为环境变量，可供shell以外的程序来使用。
- i 　[设置值]可以是数值，字符串或运算式。

### 实例

声明整数型变量

    # declare -i ab //声明整数型变量
    # ab=56 //改变变量内容
    # echo $ab //显示变量内容
    56
    

改变变量属性

    # declare -i ef //声明整数型变量
    # ef=1  //变量赋值（整数值）
    # echo $ef //显示变量内容
    1
    # ef="wer" //变量赋值（文本值）
    # echo $ef 
    0
    # declare +i ef //取消变量属性
    # ef="wer"
    # echo $ef
    wer
    

设置变量只读

    # declare -r ab //设置变量为只读
    # ab=88 //改变变量内容
    -bash: ab: 只读变量
    # echo $ab //显示变量内容
    56
    

声明数组变量

    # declare -a cd='([0]="a" [1]="b" [2]="c")' //声明数组变量
    # echo ${cd[1]}
    b //显示变量内容
    
    # echo ${cd[@]} //显示整个数组变量内容
    a b c
    

显示函数

    # declare -f
    command_not_found_handle () 
    { 
      if [ -x /usr/lib/command-not-found ]; then
        /usr/bin/python /usr/lib/command-not-found -- $1;
        return $?;
      else
        if [ -x /usr/share/command-not-found ]; then
          /usr/bin/python /usr/share/command-not-found -- $1;
          return $?;
        else
          return 127;
        fi;
      fi
    }
    