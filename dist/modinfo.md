# Linux modinfo命令

Linux modinfo命令用于显示kernel模块的信息。

modinfo会显示kernel模块的对象文件，以显示该模块的相关信息。

### 语法

    modinfo [-adhpV][模块文件]

参数：

- -a或--author 　显示模块开发人员。
- -d或--description 　显示模块的说明。
- -h或--help 　显示modinfo的参数使用方法。
- -p或--parameters 　显示模块所支持的参数。
- -V或--version 　显示版本信息。

### 实例

显示sg模块的信息。

    # modinfo sg
    filename:    /lib/modules/2.6.9-42.ELsmp/kernel/drivers/scsi/sg.ko
    author:     Douglas Gilbert
    description:  SCSI generic (sg) driver
    license:    GPL
    version:    3.5.31 B0B0CB1BB59F0669A1F0D6B
    parm:      def_reserved_size:size of buffer reserved for each fd
    parm:      allow_dio:allow direct I/O (default: 0 (disallow))
    alias:     char-major-21-*
    vermagic:    2.6.9-42.ELsmp SMP 686 REGPARM 4KSTACKS gcc-3.4
    depends:    scsi_mod
    