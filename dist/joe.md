# Linux joe命令

Linux joe命令用于编辑文本文件。

Joe是一个功能强大的全屏幕文本编辑程序。操作的复杂度要比Pico高一点，但是功能较为齐全。Joe一次可开启多个文件，每个文件各放在一个编辑区内，并可在文件之间执行剪贴的动作。

### 语法

    joe [-asis][-beep][-csmode][-dopadding][-exask][-force][-help][-keepup][-lightoff][-arking][-mid][-nobackups][-nonotice][-nosta][-noxon][-orphan][-backpath][-columns][-lines][-pg][-skiptop][-autoindent crlf linums overwrite rdonly wordwrap][+][-indentc][-istep][-keymap][-lmargin][-rmargin][-tab][要编辑的文件]

参数：
H2M_LI_HEADER 以下为程序参数
H2M_LI_HEADER -asis   字符码超过127的字符不做任何处理。
H2M_LI_HEADER -backpath   指定备份文件的目录。
H2M_LI_HEADER -beep   编辑时，若有错误即发出哗声。

- -columns   设置栏数。
- -csmode   可执行连续查找模式。
- -dopadding   是程序跟tty间存在缓冲区。
- -exask   在程序中，执行"Ctrl+k+x"时，会先确认是否要保存文件。
- -force   强制在最后一行的结尾处加上换行符号。
- -help   执行程序时一并显示帮助。
- -keepup   在进入程序后，画面上方为状态列。
- -lightoff   选取的区块在执行完区块命令后，就会回复成原来的状态。
- -lines   设置行数。
- -marking   在选取区块时，反白区块会随着光标移动。
- -mid   当光标移出画面时，即自动卷页，使光标回到中央。
- -nobackups   不建立备份文件。
- -nonotice   程序执行时，不显示版权信息。
- -nosta   程序执行时，不显示状态列。
- -noxon   尝试取消"Ctrl+s"与"Ctrl+q"键的功能。
- -orphan   若同时开启一个以上的文件，则其他文件会置于独立的缓冲区，而不会另外开启编辑区。
- -pg   按"PageUp"或"PageDown"换页时，所要保留前一页的行数。
- -skiptop   不使用屏幕上方指定的行数。
- 以下为文件参数
- +   指定开启文件时，光标所在的行数。
- -autoindent   自动缩排。
- -crlf   在换行时，使用CR-LF字符。
- -indentc   执行缩排时，实际插入的字符。
- -istep   每次执行缩排时，所移动的缩排字符数。
- -keymap   使用不同的按键配置文件。
- -linums   在每行前面加上行号。
- -lmargin   设置左侧边界。
- -overwrite   设置覆盖模式。
- -rmargin   设置右侧边界。
- -tab   设置tab的宽度。
- -rdonly   以只读的方式开启文件-wordwrap编辑时若超过右侧边界，则自动换行。

### 实例

利用joe命令编辑文本文件。例如利用joe编辑C 语言源代码main.c，使用如下命令：

    joe main.c
    

与jed类似，joe编辑器中C语言的语法也以彩色的方式显示。效果如下：

    I A main.c (c) Row 1 Col 1 12:28 Ctrl-K H for help  
    #上排从左至右分别为打开的文件名、光标所在行列数、现在时间、显示操作说明  
    /*-*- linux-c-*-*/ #编辑区  
    #include  
    #include  
    #include  
    static struct list_head *  
    net_ctl_header_lookup(struct ctl_table_root *root, struct nsproxy *namespaces)  
    {  
    return &namespaces->net_ns->sysctl_table_headers;  
    }  
    static struct ctl_table_root net_sysctl_root = {  
    .lookup = net_ctl_header_lookup,  
    };  
    static int sysctl_net_init(struct net *net)  
    {  
    INIT_LIST_HEAD(&net->sysctl_table_headers);  
    return 0;  
    }  
    ** Joe's Own Editor v3.5 ** (utf-8) ** Copyright . 2006 ** #joe编辑区的版本及版权信息 
    

joe编辑器有一些常用的组合键，例如可以通过Ctrl+K+H 寻求联机帮助，首先按Ctrl+K组合键，再输入字母H，即可调出帮助菜单，通过该帮助信息可以方便地获知如何对joe 编辑器进行操作。