# Linux mkdosfs命令

Linux mkdosfs命令用于建立DOS文件系统。

 device 指你想要建立 DOS 档案系统的装置代号。像是 /dev/hda1 等等。 block_count 则是你希望配置的区块数。如果 block_count 没有指定则系统会自动替你计算符合该装置大小的区块数。

    mkdosfs [ -c | -l filename ]
    　　 [ -f number_of_FATs ]
    　　 [ -F FAT_size ]
    　　 [ -i volume_id ]
    　　 [ -m message_file ]
    　　 [ -n volume_name ]
    　　 [ -r root_dir_entry ]
    　　 [ -s sector_per_cluster ]
    　　 [ -v ]
    　　 device
    　　 [ block_count ]
    

参数：

- -c 建立档案系统之前先检查是否有坏轨。
- -l 从得定的档案中读取坏轨记录。
- -f 指定档案配置表（FAT , File Allocation Table)的数量。预设值为 2 。目前 Linux 的 FAT 档案系统不支援超过 2 个 FAT 表。通常这个不需要改。
- -F 指定 FAT 表的大小，通常是 12 或是 16 个位元组。12 位元组通常用于磁碟片，16 位元组用于一般硬盘的分割区，也就是所谓的 FAT16 格式。这个值通常系统会自己选定适当的值。在磁碟片上用 FAT16 通常不会发生作用，反之在硬盘上用 FAT12 亦然。
- -i 指定 Volume ID。一般是一个 4 个位元组的数字，像是 2e203a47 。如果不给系统会自己产生。
- -m 当使用者试图用这片磁片或是分割区开机，而上面没有操作系统时，系统会给使用者一段警告讯息。这个参数就是用来变更这个讯息的。你可以先用档案编辑好，然后用这个参数指定，或是用
- -m -
- 这样系统会要求你直接输入这段文字。要特别注意的是，档案里的字串长度不要超过 418 个字，包括展开的跳栏符号（TAB）和换行符号（换行符号在 DOS 底下算两个字元！）
- -n 指定 Volume Name，就是磁碟标签。如同在 DOS 底下的 format 指令一样，给不给都可以。没有预设值。
- -r 指定根目录底下的最大档案数。这里所谓的档案数包括目录。预设值是在软碟上是 112 或是 224 ，在硬盘上是 512。没事不要改这个数字。
- -s 每一个磁丛（cluster）的磁区数。必须是 2 的次方数。不过除非你知道你在作什么，这个值不要乱给。
- -v 提供额外的讯息

### 实例

将 A 槽里的磁碟片格式化为 DOS 格式，并将标签设为 Tester

    mkdosfs -n Tester /dev/fd0