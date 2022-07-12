import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import DividerComponent from '../../components/divider_component'
import ListItemComponent from './components/list_item'
import styles from '../../style/home_style'
import InputComponent from '../../components/input_component'
import { SearchUserAction } from '../../../controller/actions/search_user_action'

const Home = () => {
    const user_reducer = useSelector(state => state.users_reducer)
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container}>
            <InputComponent
                name='Search'
                onChange={(text) => dispatch(SearchUserAction({ payload: text }))}
            />
            <DividerComponent color='#E2E1E1' width='95%' />
            <FlatList
                ItemSeparatorComponent={() => <DividerComponent color='#EEEDED'/>}
                data={user_reducer.users}
                renderItem={({ item, index }) => (
                    <ListItemComponent user={item} />
                )}
            />
        </SafeAreaView>
    )
}

export default Home
