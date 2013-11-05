---
layout: post
heading: 'A More Advanced Simple Server'
categories: dev
---

You may have seen [my post a while back](http://www.chris-alexander.co.uk/3222) featuring a Python webserver in less than 50 lines of code.

I was tinkering with it a little bit this evening, and decided that I could actually make this pretty useful.

What I've done is that if it can't find what you're looking for, it dumps out a directory listing with links in it. You will probably be familiar with this kind of behaviour from Apache, nginx etc. (if you don't turn it off that is), so it's fairly standard stuff.

I've managed to squeeze this into just 70 lines of code, so it's pretty lightweight.

A couple of points to note from this little exercise:

* Had to do a manual replace for ‘%20′ to a space, as Chrome (which I was testing it in) was encoding spaces in URLs as %20 so was throwing the server off quite a bit. Simple one-liner at the top of the script.
* Added mime-type support with the *mimetypes* library, which guesses a mime type from the filename's extension - pretty useful!

So in short, this server now supports directory listings, and serving things other than HTML.

There was one more thing I wanted to do though. I have been toying around with the [Android Scripting Environment](http://code.google.com/p/android-scripting/), which allows you to run all kinds of scripts on your Android phone (in my case, the very shiny Nexus One). So I stuck the pyhon on my phone, ran it, and everything works great! No more needing to mount your phone to your PC just to download some pictures at least!

{% include images/block.html src="http://chart.apis.google.com/chart?cht=qr&amp;chs=200x200&amp;chl=http://an…googlecode.com/files/ase_r21.apk&amp;nonsense=something_that_ends_with.png" %}

One word of warning though, the script currently just reads your entire phone, so unless you want people snooping around and having access to every file on your internal and SD card memory, don't leave it running - this is very much just a proof of concept at the moment!

Here's my code... 

    #!/usr/bin/python
    
    #
    # A simple web server
    #
    
    import sys, string, cgi, time, os, mimetypes
    from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
    
    class MyServer(BaseHTTPRequestHandler):
    
    def ca_serve_file(self):
        self.path = self.path.replace('%20', ' ')
        try:
            f = open(os.curdir + os.sep + self.path, 'r')
    
            self.send_response(200)
            self.send_header('Content-type', mimetypes.guess_type(self.path))
            self.end_headers()
            self.wfile.write(f.read())
              f.close()

        except IOError:
            # get a directory listing
            try :
                contents = os.listdir(os.getcwd() + self.path)
                if (self.path != '/'):
                    mysep = '/';
                    blocks = self.path.split('/')
                    blocks.pop()
                    parentpath = '/'.join(blocks)
                    if (len(parentpath) == 0):
                        parentpath = '/'
                    else:
                        mysep = ''
                        parentpath = '/';
                returnstring = '<html><head><title>A simple web server</title></head><body>'
                returnstring += '<ul><li><a href="%s">.</a></li><li><a href="%s">..</a></li>' % (self.path, parentpath)
                for content in contents:
                    if os.path.isdir(content):
                        returnstring += '<li>Directory: <a href="%s">%s</a></li>' % (self.path + mysep + content, content)
                    else:
                        returnstring += '<li>File: <a href="%s">%s</a></li>' % (self.path + mysep + content, content)

                returnstring += '</ul></body></html>'
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(returnstring)
            except OSError:
                self.send_error(404, 'Not found: %s' % self.path)

    def do_GET(self):
        try:
            self.ca_serve_file()
            return

        except IOError:
            self.send_error(404, 'File not found: %s' % self.path)

    def main():
        try:
            server = HTTPServer(('',1025), MyServer)
            print 'Started HTTP server'
            server.serve_forever()
        except KeyboardInterrupt:
            print 'Shutting down...'
            server.socket.close()

    if __name__ == '__main__':
        main()
