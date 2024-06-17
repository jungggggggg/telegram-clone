import { Text } from "react-native";
import { router } from 'expo-router';
import { useState } from "react";
import { ChannelList, Channel, MessageList, MessageInput } from "stream-chat-expo";


export default function MainTabScreen() {
    const [channel, setChannel] = useState();
    console.log(channel);
    return <ChannelList
     onSelect={(channel) => router.push(`/channel/${channel.cid}`)} 
     />;
    
}