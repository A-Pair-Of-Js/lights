# The Plan

These notes are here for future reference and to help me keep track of my intentions.

I set out to practise after a few months off work. Someone made a super basic suggestion to get me started: just make a shape using HTML and CSS. I made a circle and then added two more and gave the three traffic light colours. My friend suggested I use my Javascript skills to make one of the circles change colour every second. My commitment to accessibility concerns triggered me to add a button to stop the colours changing and that's where the fun began. It was easy to turn it into a game and to record the stopped on colour. I decided to make it more fun and add a points system: green +4, yellow +1, red -1 and to add rounds. Once the player meets a score threshold the speed of flash increases.

This was all fun to do and then I felt the need to call that a prototype and to begin again in React in order to work in a test-driven and component-driven way and to make the design of the UI more appealing.

## Creating a React App in early 2026

With the deprecation of our old friend 'create react app' in early 2025, research and chatGPT led me to create my Lights app using Node.js, Yarn, Vite, React, and typescript.

## Test-driven Development
I decided to try Vitest for the first time. I've previously used Jest but the lightweight and purportedly speedy Vitest with hot reloading, re-running only changed code and affected tests, looked worth exploring.
This video was very helpful to get Vitest configured for Typescript - https://www.youtube.com/watch?v=U24H2mLwhgc


## Component-driven design
I propose creating the following:-

- text: for consistency of design and accessibility across components
- circle: for lights, round indicator, and scoring
- rectangle: for parts of the traffic light
- button


## Proposed upgrades to the prototype

1. create UI design 
2. consider changing background colour at round changes
3. more rounds including ones with irregular colour change intervals that may score more points
3. 2-player version

## Design

![figma design](src/assets/design.png)

## Branching Strategy
Even though I'm doing this single handedly I want to maintain good source control so features will be developed on separate branches and merged in when they have full coverage.