# Linux free命令

Linux free命令用于显示内存状态。

free指令会显示内存的使用情况，包括实体内存，虚拟的交换文件内存，共享内存区段，以及系统核心使用的缓冲区等。

### 语法

    free [-bkmotV][-s ]

参数说明：

- -b 　以Byte为单位显示内存使用情况。
- -k 　以KB为单位显示内存使用情况。
- -m 　以MB为单位显示内存使用情况。
- -o 　不显示缓冲区调节列。
- -s 　持续观察内存使用状况。
- -t 　显示内存总和列。
- -V 　显示版本信息。

### 实例

显示内存使用情况

    # free //显示内存使用信息
    total used free shared buffers cached
    Mem: 254772 184568 70204 0 5692 89892
    -/+ buffers/cache: 88984 165788
    Swap: 524280 65116 459164
    

以总和的形式显示内存的使用信息

    # free -t //以总和的形式查询内存的使用信息
    total used free shared buffers cached
    Mem: 254772 184868 69904 0 5936 89908
    -/+ buffers/cache: 89024 165748
    Swap: 524280 65116 459164
    Total: 779052 249984 529068
    

周期性的查询内存使用信息

    # free -s 10 //每10s 执行一次命令
    total used free shared buffers cached
    Mem: 254772 187628 67144 0 6140 89964
    -/+ buffers/cache: 91524 163248
    Swap: 524280 65116 459164
    
    total used free shared buffers cached
    Mem: 254772 187748 67024 0 6164 89940
    -/+ buffers/cache: 91644 163128
    Swap: 524280 65116 459164
    