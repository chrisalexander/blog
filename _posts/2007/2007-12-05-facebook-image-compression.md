---
layout: post
heading: 'Facebook Image Compression'
categories: dev
---

Facebook's photos feature has always astounded me since I first used it. It was quite a while that I had been active on the site before I actually considered putting some of my own photos up there, then I realised when I did how clever the system they had implemented actually was.

They make use of a Java applet to access the filesystem on a users computer, so that the person uploading photos can access their local drive and select the pictures for uploading. This was quite nice, and despite taking a lot off the file size, the image quality was fine for thumbnails and so on. Only someone who was quite interested could see a difference in the one on the site and the original.

The reasons for compression are very obvious - hosting millions of photos all at 4, 5, 6 or even 7 megapixels a pop is going to be very expensive on storage and will require a ridiculous amount of bandwidth. Compressing the images to less than 100kb each means you don't need as much of either of these things to host more pictures, and getting the java applet to do it on the client side also reduces upload usage and server load by a drastic amount.

Recently though, it seems that Facebook have updated their image compressor, so it makes previously rather nice images very grainy indeed. Still fine for thumbnails, but the full-scale ones do look rather disappointing. Take this for example, a direct comparison between a Facebook screenshot and the raw Jpeg file. Unfortunately both had to be put through the Photoshop JPEG compressor but the effect should have not altered the differences between them (image unavailable, sorry!).

It may not be obvious to everyone, it's just I'm quite picky about these things - what could be mistaken for clarity are huge chunks of data removed to take the edge off what was an otherwise nice photo!

I guess I had better start using something else to store my photos on until they do something better with it. For my kind of need it's not so good, but for those pictures of Friday night I guess it's just fine!