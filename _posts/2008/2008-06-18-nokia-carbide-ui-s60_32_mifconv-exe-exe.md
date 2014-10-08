---
layout: post
heading: 'Nokia Carbide UI'
subheading: 'S60_32_mifconv.exe exe'
categories: dev
---

Carbide UI is a Nokia application (actually based on the open-source application Eclipse) for developing themes for use on Series 60 and Series 40 Symbian-powered Nokia devices. It's a fully featured suite and is very good, although I ran into this mysterious error the other day running Windows Vista:

The following error occurred in the packaging process: The command S60_32_mifconv.exe execution failed

    MifConv version 1.11 build (48, SVG stand-alone).
    Reading source list file: themepackage_MIFList.txt
    Checking: .\qsn_bg_screen.bmp
    [...]
    Checking: .\qsn_fr_set_opt_foc.svg
    Choosing...
    Convert files...
    The current directory is invalid.
    [...]
    The current directory is invalid.
    ................................
    Loading mif icons...
    Loading file: \epoc32\BUILD\s60\icons\temp\s2uo.tmp\._s60_2_6_qsn_fr_list.svgb
    
    ERROR: Unable to open file for reading! \epoc32\BUILD\s60\icons\temp\s2uo.tmp\._s60_2_6_qsn_fr_list.svgb
    
    Multi Icon File converter tool. Version 1.11 (Build 48, SVG stand-alone)
    Copyright (c) 2001-2007 Nokia Corporation. All rights reserved.
    
    Usage:
    
    MIFCONV miffile.MIF
    [/Hheaderfile.MBG]
    [/E]
    [/Ppalettefile]
    [/Bbmconvpath]
    [/Ssvgencodepath]
    [/Vsvgtversion]
    [/Fparametername.txt]
    [/A] [/OPT] iconsource1.EXT [ ... [/A] [/OPT] iconsourceN.EXT]
    
    /Hheaderfile.MBG specifies output header file name
    
    /E               specifies that source icons are only loaded with given file
    extensions. By default, MifConv prefers source icons with
    extension .SVG over .BMP, regardless of which is given as
    a parameter.
    /Ppalettefile    palette parameter, which is forwarded to BMCONV for
    bitmap icons. See more details in BMCONV help.
    
    /Bbmconvpath     specifies the location path of BMCONV.exe.
    
    /Ssvgencodepath  specifies the location path of SVGTBINENCODE.exe.
    
    /Vsvgversion     specifies the format version of the generated SVGB binary
    code by SVGTBINENCODE.exe.
    svgversion may be one of the following values:
    1 - original encoding for 3.0 and 3.1 (BGR/float)
    2 - encoding (BGR/fixed point)
    3 - optimized encoding for 3.1 only (RGB/fixed pt)
    4 - encoding (RGB/float)
    
    /A                specifies animated flag for icon
    
    /OPT              specifies icon framebuffer depth and mask depth and
    the syntax is DEPTH[ ,MASK]
    DEPTH             may be one of /1,/2,/4,/8,/c4,/c8,/c12,/c16,/c24,/c32
    MASK              may be one of 1,8
    
    EXT               may be one of SVG, BMP
    
    Parameter file defined with option /F may contain
    any of the parameters listed above, separated by spaces or newlines.


This error was solved like so: Firstly, export your project to a new folder. This has to be somewhere your user has access to, as this problem is caused by Vista's file permissions and security, so your user's documents folder is a good place. Then, switch to this workspace, using File -&gt; switch workspace. Now you should be able to export correctly without any errors :)
