# Linux lsmod命令

Linux lsmod命令用于显示已载入系统的模块。

执行lsmod(list modules)指令，会列出所有已载入系统的模块。Linux操作系统的核心具有模块化的特性，应此在编译核心时，务须把全部的功能都放入核心。您可以将这些功能编译成一个个单独的模块，待需要时再分别载入。

### 语法

    lsmod

### 实例

显示模块信息

    # lsmod 
    Module         Size Used by
    nfsd         238935 11 
    lockd         64849 1 nfsd
    nfs_acl         2245 1 nfsd
    auth_rpcgss      33735 1 nfsd
    sunrpc        193181 10 nfsd,lockd,nfs_acl,auth_rpcgss
    exportfs        3437 1 nfsd
    xt_TCPMSS        2931 1 
    xt_tcpmss        1197 1 
    xt_tcpudp        2011 1 
    iptable_mangle     2771 1 
    ip_tables        9991 1 iptable_mangle
    x_tables        14299 4 xt_TCPMSS,xt_tcpmss,xt_tcpudp,ip_tables
    pppoe          8943 2 
    pppox          2074 1 pppoe
    binfmt_misc       6587 1 
    snd_ens1371      18814 0 
    gameport        9089 1 snd_ens1371
    snd_ac97_codec    100646 1 snd_ens1371
    ac97_bus        1002 1 snd_ac97_codec
    snd_pcm_oss      35308 0 
    snd_mixer_oss     13746 1 snd_pcm_oss
    snd_pcm        70662 3 snd_ens1371,snd_ac97_codec,snd_pcm_oss
    snd_seq_dummy      1338 0 
    snd_seq_oss      26726 0 
    snd_seq_midi      4557 0 
    snd_rawmidi      19056 2 snd_ens1371,snd_seq_midi
    snd_seq_midi_event   6003 2 snd_seq_oss,snd_seq_midi
    snd_seq        47263 6 snd_seq_dummy,snd_seq_oss,snd_seq_midi,snd_seq_midi_event
    snd_timer       19098 2 snd_pcm,snd_seq
    snd_seq_device     5700 5 snd_seq_dummy,snd_seq_oss,snd_seq_midi,snd_rawmidi,snd_seq
    fbcon         35102 71 
    tileblit        2031 1 fbcon
    font          7557 1 fbcon
    bitblit         4707 1 fbcon
    ppdev          5259 0 
    softcursor       1189 1 bitblit
    snd          54148 10 snd_ens1371,snd_ac97_codec,snd_pcm_oss,snd_mixer_oss,snd_pcm,snd_seq_oss,snd_rawmidi,snd_seq,snd_timer,snd_seq_device
    psmouse        63245 0 
    serio_raw        3978 0 
    soundcore        6620 1 snd
    parport_pc       25962 1 
    snd_page_alloc     7076 1 snd_pcm
    vga16fb        11385 1 
    intel_agp       24177 1 
    vgastate        8961 1 vga16fb
    i2c_piix4        8335 0 
    shpchp         28820 0 
    agpgart        31724 1 intel_agp
    lp           7028 0 
    parport        32635 3 ppdev,parport_pc,lp
    mptspi         14652 2 
    mptscsih        31325 1 mptspi
    pcnet32        28890 0 
    floppy         53016 0 
    mii           4381 1 pcnet32
    mptbase        83022 2 mptspi,mptscsih
    scsi_transport_spi   21096 1 mptspi
    