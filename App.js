import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Post from "./components/Shared/Post/Post"

export default function App() {
  return (
    <>
    <Header />
    <Nav />
    </>
  )
}

