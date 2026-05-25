import { StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function AuthLayout() {
  return (
    <>
        <StatusBar barStyle={"auto"} />
        <Stack 
            screenOptions={{headerShown: false, animation: "none"}}
        />
    </>
    
  )
}