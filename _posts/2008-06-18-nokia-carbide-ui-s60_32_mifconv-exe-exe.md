---
layout: post
heading: 'Nokia Carbide UI: S60_32_mifconv.exe exe'
categories: dev
---

Carbide UI is a Nokia application (actually based on the open-source application Eclipse) for developing themes for use on Series 60 and Series 40 Symbian-powered Nokia devices. It's a fully featured suite and is very good, although I ran into this mysterious error the other day running Windows Vista:

This error was solved like so: Firstly, export your project to a new folder. This has to be somewhere your user has access to, as this problem is caused by Vista's file permissions and security, so your user's documents folder is a good place. Then, switch to this workspace, using File -&gt; switch workspace. Now you should be able to export correctly without any errors :)