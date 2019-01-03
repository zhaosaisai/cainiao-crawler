# Linux jed命令

Linux jed命令用于编辑文本文件。

Jed是以Slang所写成的程序，适合用来编辑程序原始代码。

### 语法

    jed [-2n][-batch][-f][-g][-i][-I][-s][文件]

参数：

- -2   显示上下两个编辑区。
- -batch   以批处理模式来执行。
- -f   执行Slang函数。
- -g   移到缓冲区中指定的行数。
- -i   将指定的文件载入缓冲区。
- -n   不要载入jed.rc配置文件。
- -s   查找并移到指定的字符串。

### 实例

jed主要用于编辑程序的源码，编辑源码时将以彩色高亮的方式显示程序的语法。例如使用jed编辑一个C语言的源代码文件，可使用如下命令：

    jed main.c       #用jed编辑器打开main.c 文件 
    

输出结果如下：

    F10 key ==> File Edit Mode Search Buffers Windows System Help #编辑器菜单  
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
    -----+(Jed 0.99.18U) Emacs: main.c (C) All 6:06pm-----------------------------  
    #从左到右分别为jed版本编号、当前是模拟emacs编辑器、打开的文件名、现在的时间  
    loading /usr/share/jed/lib/modeinfo.slc 
    