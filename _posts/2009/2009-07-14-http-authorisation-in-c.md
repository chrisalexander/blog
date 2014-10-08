---
layout: post
heading: 'HTTP Authorisation in C#'
categories: dev
---

I've been doing some work on a super-secret project recently that involves C# and web APIs. As part of this, most of the API calls require HTTP Basic authorization. This is fairly easy to do, as in C# using a WebClient object you just do this:

    WebClient client = new WebClient();
    client.Credentials = new NetworkCredentials("username", "password");
    client.DownloadFile("http://api.file.here/get.json", "D:\Stuff\Location.doc");

However, the credentials are only sent when the server challenges for authorisation - if it doesn't explicitly challenge then the credentials aren't sent. The way around this is to set the header yourself using this little snippet:

    WebClient client = new WebClient();
    
    string authInfo = this.credentials.UserName + ":" + this.credentials.Password;
    authInfo = Convert.ToBase64String(Encoding.Default.GetBytes(authInfo));
    client.Headers["Authorization"] = "Basic " + authInfo;
    
    client.DownloadFile("http://api.file.here/get.json", "D:\Stuff\Location.doc");
