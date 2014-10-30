---
layout: post
title: Docker
tags: [General]
description: Docker
langs: [en]
---

- Quick-Start: Run Boot2Docker (located in Applications), which will open a terminal window. Then, start a test container with: docker run hello-world

- To save and share container images, automate workflows, and more sign-up for a free Docker Hub account.

- You can upgrade your existing Boot2Docker VM without data loss by running: boot2docker upgrade

- The docker and boot2docker binaries are in /usr/local/bin which you can access from your terminal. For further information, please see the Docker OS X installation documentation.


## boot2docker up doesn't work (OSX)

Sometimes OSX will install updates that break VirtualBox and require a restart of the kernel extensions that boot2docker needs in order to run. If you go to boot boot2docker after some updates or a system restart and you get an output such as the following:

$ boot2docker up
error in run: Failed to start machine "boot2docker-vm" (run again with -v for details)

You may need to reload the kernel extensions in order to get your system functioning again.

In this case, try running the following script (supplied with Virtual Box):

$ sudo /Library/Application\ Support/VirtualBox/LaunchDaemons/VirtualBoxStartup.sh restart

You should see output such as:

/Applications/VirtualBox.app/Contents/MacOS/VBoxAutostart => /Applications/VirtualBox.app/Contents/MacOS/VBoxAutostart-amd64
/Applications/VirtualBox.app/Contents/MacOS/VBoxBalloonCtrl => /Applications/VirtualBox.app/Contents/MacOS/VBoxBalloonCtrl-amd64
/Applications/VirtualBox.app/Contents/MacOS/VBoxDD2GC.gc => /Applications/VirtualBox.app/Contents/MacOS/VBoxDD2GC.gc-amd64
/Applications/VirtualBox.app/Contents/MacOS/VBoxDDGC.gc => /Applications/VirtualBox.app/Contents/MacOS/VBoxDDGC.gc-amd64
/Applications/VirtualBox.app/Contents/MacOS/VBoxExtPackHelperApp => /Applications/VirtualBox.app/Contents/MacOS/VBoxExtPackHelperApp-amd64
/Applications/VirtualBox.app/Contents/MacOS/VBoxHeadless => /Applications/VirtualBox.app/Contents/MacOS/VBoxHeadless-amd64
/Applications/VirtualBox.app/Contents/MacOS/VBoxManage => /Applications/VirtualBox.app/Contents/MacOS/VBoxManage-amd64
/Applications/VirtualBox.app/Contents/MacOS/VBoxNetAdpCtl => /Applications/VirtualBox.app/Contents/MacOS/VBoxNetAdpCtl-amd64
/Applications/VirtualBox.app/Contents/MacOS/VBoxNetDHCP => /Applications/VirtualBox.app/Contents/MacOS/VBoxNetDHCP-amd64
/Applications/VirtualBox.app/Contents/MacOS/VBoxNetNAT => /Applications/VirtualBox.app/Contents/MacOS/VBoxNetNAT-amd64
/Applications/VirtualBox.app/Contents/MacOS/VBoxSVC => /Applications/VirtualBox.app/Contents/MacOS/VBoxSVC-amd64
/Applications/VirtualBox.app/Contents/MacOS/VBoxXPCOMIPCD => /Applications/VirtualBox.app/Contents/MacOS/VBoxXPCOMIPCD-amd64
/Applications/VirtualBox.app/Contents/MacOS/VMMGC.gc => /Applications/VirtualBox.app/Contents/MacOS/VMMGC.gc-amd64
/Applications/VirtualBox.app/Contents/MacOS/VirtualBox => /Applications/VirtualBox.app/Contents/MacOS/VirtualBox-amd64
/Applications/VirtualBox.app/Contents/MacOS/VirtualBoxVM => /Applications/VirtualBox.app/Contents/MacOS/VirtualBoxVM-amd64
/Applications/VirtualBox.app/Contents/MacOS/vboxwebsrv => /Applications/VirtualBox.app/Contents/MacOS/vboxwebsrv-amd64
Loading VBoxDrv.kext
Loading VBoxUSB.kext
Loading VBoxNetFlt.kext
Loading VBoxNetAdp.kext

Now the VM should boot properly.
