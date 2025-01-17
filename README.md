# React Native: Uninitialized State Variable Error

This repository demonstrates a common error in React Native: attempting to access a state variable before it has been properly initialized. This often leads to unexpected behavior or app crashes.

## Problem

The `bug.js` file showcases the issue.  Accessing `this.state.count` before the component mounts (or before the state has been updated via an asynchronous operation) will lead to an error.

## Solution

The `bugSolution.js` file illustrates the solution.  The key is to make sure any access to state happens after the component has mounted and the state is properly initialized.  We'll use the `useEffect` hook to accomplish this.

## How to Run

1. Clone the repo.
2. Navigate to the directory using your terminal.
3. Run `npm install` to install the dependencies.
4. Run `npx react-native run-android` (or `npx react-native run-ios`) to run the app on your device/emulator.

This project provides a clear example of the issue and its resolution, emphasizing proper state management in React Native. Feel free to adapt the code and scenario to your own projects.