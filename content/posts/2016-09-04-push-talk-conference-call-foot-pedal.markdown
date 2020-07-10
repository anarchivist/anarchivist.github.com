---
comments: true
date: '2016-09-04T14:16:50Z'
slug: push-talk-conference-call-foot-pedal
syndication:
- https://twitter.com/anarchivist/status/772507454923956225
tags:
- hardware
- software
title: A Push-to-Talk Conference Call Foot Pedal
---

My current position at [DPLA](https://dp.la/), especially since we are remote-first
organization, requires me to be on lots of conference calls, both video and audio.
While I've learned the value of staying muted while I'm not talking, there are a 
couple of things that make this challenging. First, I usually need the window
for the call to have focus to unmute myself by the platform's designated keystroke.
Forget that working well if you need to bring something up in another window,
or switch to another application. Secondly, while we have our own preferred
platform internally (Google Hangouts), I have to use countless others, too;
each of those platforms has its own separate keystroke to mute.

This all leads to a less than ideal situation, and naturally, I figured there
must be a better way. <!--more-->I knew that some folks have used inexpensive USB footpedals
for things like Teamspeak, but that ran into the issue where a keystroke would
only be bound to a specific application. Nonetheless, I went ahead and bought
a cheap [PCSensor footswitch](http://www.dansdata.com/footswitch.htm) sold
under another label from an online retailer. The PCSensor footswitches are
programmable, but the software that ships with them is Windows-only. However, 
I also found a [command-line tool](https://github.com/rgerganov/footswitch)
for programming the switches.

After doing some digging, I came across an application for Mac OS X called
[Shush](http://mizage.com/shush/), which provides both push-to-talk and 
push-to-silence modes, which are activated by a keystroke. Once installed, 
I bound Shush to the `Fn` keystroke, which would allow me to activate 
push-to-talk even if I didn't have the pedal plugged in. However, I couldn't
get the pedal to send the `Fn` keystroke alone since it's a modifier key. As
a workaround, I put together a device-specific configuration for
[Karabiner](https://pqrs.org/osx/karabiner/), a flexible and powerful tool
to configure input devices for Mac OS. By default, the pedal sends the keycode
for `b`, and the configuration rebinds `b` for an input device matching the
USB vendor and product IDs for the pedal to `Fn`.

Since I've bought and set up my first pedal, I've gotten used to using the
pedal to quickly mute and unmute myself, making my participation in conference
calls become much more smooth than it was previously. I've also just replaced
my first pedal which broke suddenly with a nearly identical one, but I might
make the switch to a more durable version. My [Karabiner configuration](https://gist.github.com/anarchivist/e13c0a64930b975a509681ff36f95490)
is available as a [gist](https://gist.github.com/anarchivist/e13c0a64930b975a509681ff36f95490) for
your use - I hope this helps you as much as it helped me!