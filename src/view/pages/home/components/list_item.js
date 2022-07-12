import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MAKE_CALL_PAGE } from '../../../../constants/string_constants'

function ListItemComponent({ user }) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            key={user.key}
            onPress={() => navigation.navigate(MAKE_CALL_PAGE, { user })}
        >
            <View style={styles.container}>
                <Image
                    size={50}
                    source={{
                        uri: user.image,
                    }}
                    style={styles.image}
                />
                <Text style={styles.title}>{user.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        padding: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderColor: '#EAEAEA',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    title: {
        color: '#2F2F2F',
        fontSize: 20,
        textTransform: 'capitalize',
    },

    image: {
        width: 50,
        height: 50,
        marginEnd: 10,
        borderColor: '#0D98C1',
        borderWidth: 3,
        borderRadius: 100,
    },
})

export default ListItemComponent
