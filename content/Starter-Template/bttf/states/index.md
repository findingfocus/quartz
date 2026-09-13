---
title: States
description: The four BTTF game states — title, play, and win screens plus their shared interface.
---

One file per screen. The [[Starter-Template/bttf/StateMachine|StateMachine]] just forwards `enter / update / draw` to whichever state is active — pattern explained in [[Cookbook/Game-States|Game States]].

- [[Starter-Template/bttf/states/BaseState|BaseState.lua]] — empty interface every state inherits
- [[Starter-Template/bttf/states/TitleScreenState|TitleScreenState.lua]] — press enter to start
- [[Starter-Template/bttf/states/PlayState|PlayState.lua]] — gameplay
- [[Starter-Template/bttf/states/WinState|WinState.lua]] — press enter to replay

Full tree: [[Starter-Template/bttf/index|BTTF project page]]. Template: [[Starter-Template/index|Starter Template]].
