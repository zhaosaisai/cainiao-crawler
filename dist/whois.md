# Linux whois命令

Linux whois命令用于查找并显示用户信息。

whois指令会去查找并显示指定帐号的用户相关信息，因为它是到Network Solutions的WHOIS数据库去查找，所以该帐号名称必须在上面注册方能寻获，且名称没有大小写的差别。

### 语法

    whois [帐号名称]

### 实例

显示指定用户信息

    # whois root
    
    //查找root用户信息
    

查询域名描述信息

    # whois .Lx138.COm
    
    Whois Server Version 2.0
    
    Domain names in the .com and .net domains can now be registered
    with many different competing registrars. Go to http://www.internic.net
    for detailed information.
    
    ...省略部分内容
    

查询域名信息

    # whois Lx138.COm
    
    The Registry database contains ONLY .COM, .NET, .EDU domains and
    Registrars.
    Domain Name ..................... Lx138.COm
    Name Server ..................... dns15.hichina.com
                     dns16.hichina.com
    Registrant ID ................... hc937242545-cn
    
    ...省略部分内容
    

查询域名信息省略法律声明

    # whois -H Lx138.COm
    
    ...省略内容
    

指定端口查询

    # whois -p 80 Lx138.COm
    
    ...省略内容
    