# Linux rdev命令

Linux rdev命令可以用来查询/设置内核映像文件的根设备，RAM 磁盘大小或视频模式。

不带任何参数的 rdev 命令将输出当前根文件系统的 /etc/mtab 文件行。不带任何参数的 ramsize, vidmode, 和 rootflags 将显示帮助信息。

### 语法

    rdev [-rsvh ] [-o offset ] [ image [value [ offset ] ] ]

但是随著使用者想要设定的参数的不同，底下的方式也是一样：

    rdev [ -o offset ] [ image [ root_device [ offset ] ] ]

    swapdev [ -o offset ] [ image [ swap_device [ offset ] ] ]

    ramsize [ -o offset ] [ image [ size [ offset ] ] ]

    videomode [ -o offset ] [ image [ mode [ offset ] ] ]

    rootflags [ -o offset ] [ image [ flags [ offset ] ] ]

参数：

- 
-r：
使得 rdev 作为 ramsize 运行。
- 
-R：
使得 rdev 作为 rootflags 运行。
- 
-v：
使得 rdev 作为 vidmode 运行。
- 
-h：
提供帮助。