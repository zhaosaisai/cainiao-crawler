# Linux mformat命令

Linux mformat命令用于对MS-DOS文件系统的磁盘进行格式化。

在已经做过低阶格式化的磁片上建立 DOS 档案系统。如果在编程 mtools 的时候把 USE_2M 的参数打开，部分与 2M 格式相关的参数就会发生作用。否则这些参数（像是 S,2,1,M）不会发生作用。

### 语法

    mformat [-t cylinders] [-h heads] [-s sectors] [-l volume_label] [-F] [-I fsVer-sion] [-S sizecode] [-2 sectors_on_track_0] [-M software_sector_size] [-a] [-X] [-C] [-H hidden_sectors] [-r root_sectors] [-B boot_sector] [-0 rate_on_track_0] [-A rate_on_other_tracks] [-1] [-k] drive:

参数：

- -t 磁柱（synlider）数
- -h 磁头（head）数
- -s 每一磁轨的磁区数
- -l 标签
- -F 将磁碟格式化为 FAT32 格式，不过这个参数还在实验中。
- -I 设定 FAT32 中的版本号。这当然也还在实验中。
- -S 磁区大小代码，计算方式为 sector = 2^(大小代码+7)
- -c 磁丛（cluster）的磁区数。如果所给定的数字会导致磁丛数超过 FAT 表的限制，mformat 会自动放大磁区数。
- -s
- -M 软件磁区大小。这个数字就是系统回报的磁区大小。通常是和实际的大小相同。
- -a 如果加上这个参数，mformat 会产生一组 Atari 系统的序号给这块软碟。
- -X 将软碟格式化成 XDF 格式。使用前必须先用 xdfcopy 指令对软碟作低阶格式化的动作。
- -C 产生一个可以安装 MS-DOS 档案系统的磁碟影像档（disk image）。当然对一个实体磁碟机下这个参数是没有意义的。
- -H 隐藏磁区的数目。这通常适用在格式化硬盘的分割区时，因为通常一个分割区的前面还有分割表。这个参数未经测试，能不用就不用。
- -n 磁碟序号
- -r 根目录的大小，单位是磁区数。这个参数只对 FAT12 和 FAT16 有效。
- -B 使用所指定的档案或是设备的开机磁区做为这片磁片或分割区的开机磁区。当然当中的硬件参数会随之更动。
- -k 尽量保持原有的开机磁区。
- -0 第 0 轨的资料传输率
- -A 第 0 轨以外的资料传输率
- -2 使用 2m 格式
- -1 不使用 2m 格式

### 实例

用预设值把 a: （就是 /dev/fd0）里的磁碟片格式化。

    mformat a: