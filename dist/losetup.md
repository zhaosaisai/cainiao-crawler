# Linux losetup命令

Linux losetup命令用于设置循环设备。

循环设备可把文件虚拟成区块设备，籍以模拟整个文件系统，让用户得以将其视为硬盘驱动器，光驱或软驱等设备，并挂入当作目录来使用。

### 语法

    losetup [-d][-e ][-o ][循环设备代号][文件]

参数：

- -d   卸除设备。
- -e   启动加密编码。
- -o   设置数据平移的数目。

### 实例

（1）创建空的磁盘镜像文件，这里创建一个1.44M的软盘

    $ dd if=/dev/zero of=floppy.img bs=512 count=2880

（2）使用 losetup将磁盘镜像文件虚拟成快设备

    $ losetup /dev/loop1 floppy.img

（3）挂载块设备

    $ mount /dev/loop0 /tmp

经过上面的三步之后，我们就可以通过/tmp目录，像访问真实快设备一样来访问磁盘镜像文件floppy.img。

（4） 卸载loop设备

    $ umount /tmp
    $ losetup -d /dev/loop1
    

一个完整测试实例

1. 首先创建一个 1G 大小的空文件：

    # dd if=/dev/zero of=loopfile.img bs=1G count=1
    1+0 records in
    1+0 records out
    1073741824 bytes (1.1 GB) copied, 69.3471 s, 15.5 MB/s

2. 对该文件格式化为 ext4 格式：

    # mkfs.ext4 loopfile.img
    。。。。

3. 用 file 命令查看下格式化后的文件类型：

    # file loopfile.img
    loopfile.img: Linux rev 1.0 ext4 filesystem data, UUID=a9dfb4a0-6653-4407-ae05-7044d92c1159 (extents) (large files) (huge files)

4. 准备将上面的文件挂载起来：

    # mkdir /mnt/loopback
    # mount -o loop loopfile.img /mnt/loopback

mount 命令的 -o loop 选项可以将任意一个 loopback 文件系统挂载。

上面的 mount 命令实际等价于下面两条命令：

    # losetup /dev/loop0 loopfile.img
    # mount /dev/loop0 /mnt/loopback

因此实际上，mount -o loop 在内部已经默认的将文件和 /dev/loop0 挂载起来了。

然而对于第一种方法(mount -o loop)并不能适用于所有的场景。比如，我们想创建一个硬盘文件，然后对该文件进行分区，接着挂载其中一个子分区，这时就不能用 -o loop 这种方法了。因此必须如下做：

    # losetup /dev/loop1 loopfile.img
    # fdisk /dev/loop1

6. 卸载挂载点：

    # umount /mnt/loopback