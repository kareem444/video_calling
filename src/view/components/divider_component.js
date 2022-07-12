import React from 'react';
import { View, Text } from 'react-native';

export default function DividerComponent({
    width = '80%',
    height = 2,
    color = 'black',
}) {
    return (
        <View
            style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <View
                style={{
                    width: width,
                    height: height,
                    backgroundColor: color,
                }}
            />
        </View>
    );
}
