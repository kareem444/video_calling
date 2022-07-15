import React, { useEffect } from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import DividerComponent from '../../components/divider_component'
import ListItemComponent from './components/list_item'
import styles from '../../style/home_style'
import InputComponent from '../../components/input_component'
import { SearchUserAction } from '../../../controller/actions/search_user_action'
import { useNavigation } from '@react-navigation/native'
import CallService from '../../../service/call_service'

const Home = () => {
    const user_reducer = useSelector(state => state.user_reducer)
    const dispatch = useDispatch();

    const navigation = useNavigation()

    useEffect(() => {
        CallService.stopListingToCallEvents(dispatch)
        CallService.listenToIncomingCall(navigation, dispatch)
        return () => {
            CallService.stopListeningToIncomingCall()
        };
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <InputComponent
                name='Search'
                onChange={(text) => dispatch(SearchUserAction({ payload: text }))}
            />
            <DividerComponent color='#E2E1E1' width='95%' />
            <FlatList
                ItemSeparatorComponent={() => <DividerComponent color='#EEEDED' />}
                data={user_reducer.users}
                renderItem={({ item, index }) => (
                    item.userName != user_reducer.auth.displayName && <ListItemComponent user={item} />
                )}
            />
        </SafeAreaView>
    )
}

export default Home
