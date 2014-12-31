---
layout: post
heading: 'Nabaztag setup guide'
leader:
  image: http://web.archive.org/web/20090309103320im_/http://help.nabaztag.com/upload/4_setup_tn.jpg
  showonpage: false
  hassmall: false
categories: life
---

Helpfully the Nabaztag setup guide, which used to be at http://help.nabaztag.com/fiche.php?fiche=45, is now no longer available.

As I couldn't find a decent mirror, I grabbed this copy from the Internet Archive and have reposted it.

### Introduction

Nabaztag/tag is the second generation of Nabaztag.

Nabaztag/tag not only knows how to do everything his older brother does, he also has a microphone in his bellybutton.

Your Nabaztag is delivered with no pre-set parameters. That means he can connect to any open Wi-Fi network (not secure). A network is considered open when:

* It is not encrypted (no WEP encryption)
* It distributes IP addresses dynamically (DHCP)
* There is no special authentication
* There is no proxy involved

In most cases, it is not likely that the Wi-Fi network that you want to connect your Nabaztag/tag to is open. In this case, you will have to configure your rabbit to indicate which network to connect to and in what way.

The following procedure is called "Expert mode"

### Step 1: Preparing the necessary information

Before beginning the configuration process to connect your Rabbit to your Wi-Fi network, you will need the following information on hand:

* The connection parameters of your Wi-Fi network
* the type of encryption (None/ WEP / WPA)
* the encryption key to your network (only if the encryption is in WEP or WPA) 
* the name of your network (SSID)
* the type of encryption (None/ WEP / WPA)
* the encryption key to your network (only if the encryption is in WEP or WPA)
* Your Nabaztag
* A computer equipped with a Wi-Fi card

If your Wi-Fi network is furnished by your broadband provider, they will have provided you this information. If your Wi-Fi networked was installed by someone else besides you, you may need to cosult whoever was in charge of the installation.

In the case of a business Wi-Fi network, you will need supplimentary information if:

* there is a DHCP server
* a proxy is used to access the internet

### Step 2 : Connecting Your Rabbit

Connecting a Rabbit to a Wi-Fi network is like connecting a computer to one : in both cases, you have to find out the network's parameters such as its name, the password... etc.

In order for your Rabbit to receive information from your computer (that has a Wi-Fi card) you have to prepare it.To do this, you have to put your Rabbit in "all blue" mode (ad hoc for those that know):

* Unplug the cord from the bottom of your rabbit

{% include images/block.html src="http://web.archive.org/web/20090309103320im_/http://help.nabaztag.com/upload/0_setup_tn.jpg" %}

* Before plugging the cord back in, push down and hold the button found on his head

{% include images/block.html src="http://web.archive.org/web/20090309103320im_/http://help.nabaztag.com/upload/1_setup_tn.jpg" %}

* Now plug the cord back in while still holding the button down

{% include images/block.html src="http://web.archive.org/web/20090309103320im_/http://help.nabaztag.com/upload/2_setup_tn.jpg" %}

* Keep holding down the button until all of your Rabbit's lights turn blue

{% include images/block.html src="http://web.archive.org/web/20090309103320im_/http://help.nabaztag.com/upload/3_setup_tn.jpg" %}

* Once all the lights are blue you can let go of the button

{% include images/block.html src="http://web.archive.org/web/20090309103320im_/http://help.nabaztag.com/upload/4_setup_tn.jpg" %}

* Now your Rabbit is ready to accept a connection to your computer

Note: If your Rabbit shows all blue lights, but then suddenly turns to all white lights with one ear turning, that means you held the button down for too long. if this happens, just unplug your Rabbit and try the process again. This time, let go of the button a bit quicker, right when the lights turn blue !

### Step 3: Getting into your rabbit's head

* On your computer (that has a Wi-Fi card), open the window that shows the status of your wireless network. Press the "View Wireless Networks" button.
* In the list of wireless networks that your computer is detecting, there should be a network called "nabaztagXX" (where XX are the last two digits of your Rabbit's serial number)
* Ask your computer to connect to this network

Important: After clicking on this network, you will no longer be connected to your regular Wi-Fi network or the internet. Instead,you will be connected to your Nabaztag.

* Count to 20 and then open a new web browser window to the page http://192.168.0.1
* You have now accessed the configuration page for your Nabaztag. Fill it out carefully with the information you have prepared.
* When you have finished, click the "Update &amp; Start" button.

Your Rabbit will now look for and connect to your Wi-Fi network and the internet. His lights blink in orange at first and will gradually all become green. When this happens, that means that your Rabbit is successfully connected.

You've given him life, now give him a name. You can do this by going to the address : http://www.nabaztag.com/start

At step 6, you will be asked to configure your Rabbit. If you've already done this, click on "I've already configured my Rabbit with the Configuration Wizard".

### If you are using a Mac with an Airport router (and you have a Nabaztag/tag)

If you are using an Airport router to connect your Nabaztag/tag (<span style="color: #ff0000;">note, does not work with Nabaztag</span><span style="color: #000000;">) to the internet and your Nabaztag/tag's nose is flashing orange or orange/green, do the following :</span>

* Put your rabbit in "all blue" mode
* Connect your computer to the NabaztagXX network (where XX are the last two digits of your Rabbit's serial number)
* Open the configuration page in your browser (http://192.168.0.1)
* Change the Violet platform address near the bottom of the page from r.nabaztag.com/vl to 62.210.186.165/vl
* Click on "Update &amp; Start"

### Default parameter settings for a Nabaztag/tag

Here are the factory set parameters that you should have on your Rabbit's configuration page from the time of your first connection :

**Basic Configuration**

SSID : [Empty]
Encryption : Non selection / No encryption
Key : [Empty]

**Advanced Configuration**

Authentication : OpenSystem
DHCP Enabled : Yes
Local IP : 0.0.0.0
Local Mask : 255.255.255.0
Local Gateway : 0.0.0.0
DNS Server : 0.0.0.0

**Proxy Server**

HTTP Proxy : No
Proxy IP Address : 0.0.0.0
Proxy port : 0

**General Info**

Violet Platform : r.nabaztag.com/vl

### My Nabaztag/tag's nose flashes orange/green and I can't connect him

NOTE : this announcement only concerns Nabaztag/tags (those with the bellybuttons) whose nose LEDs are blinking orange and green. If this is not happening to your Rabbit, this procedure may be ignored.

Before anything else, download the following document on your computer (the one that you use to configure your rabbit): [www.nabaztag.com/firmware/firmware.0.0.0.10.sim.txt](http://web.archive.org/web/20090309103320/http://www.nabaztag.com/firmware/firmware.0.0.0.10.sim.txt) (right click - Save file under)

Follow these instructions:

* Unplug your rabbit
* Push and hold the button on the top of his head
* While keeping the button pressed, plug him back in
* Once all 4 of his lights turn blue, release the button

Look in the list of available wireless networks on your computer that is furnished with a Wi-Fi card (you may have to refresh the list of networks) and connect to the wireless network "nabaztagXX" (the XX is the last two digits of your Rabbit's serial number found on his bottom).

Once connected to the Nabaztag network, open your internet browser and type in the address http://192.168.0.1

PLEASE DO NOT UNPLUG YOUR RABBIT DURING THE REST OF THIS PROCEDURE.

On your Rabbit's configuration page, all the way at the bottom, verify that the version of your firmware ends with a 9 (if this isn't the case, this procedure may be ignored).

Go back to the top of the page and click on "Click here for firmware upgrade" (in the top right-hand corner).

On the page that appears, Click on Browse and find the file that you<br> had just downloaded earlier.

Click on Upload.

The Rabbit will flash red lights and then white, then he will restart.

You should now pass the point where your Rabbit has an orange/green nose and see that his ears turn and he lights up purple at his base. This means he is correctly connected to the internet.
