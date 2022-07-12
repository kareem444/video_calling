// import React from 'react'
// import { Button, Text, View } from 'react-native'
// import { useSelector , useDispatch } from 'react-redux'
// import { CounterAction } from '../../controller/actions/counter_action';
// import styles from '../style/home_style';

// const Counter = () => {
//     const counter_reducer = useSelector(state => state.counter_reducer);
//     const dispatch = useDispatch();
//     return (
//         <View style={styles.container}>
//             <Button
//                 title='incraese'
//                 onPress={() => {
//                     dispatch(CounterAction("+" , 1));
//                 }}
//             />
//             <Text style={styles.text}>{counter_reducer.counter}</Text>
//             <Button
//                 title='decrease'
//                 onPress={() => {
//                     dispatch(CounterAction("-" , 5));
//                 }}
//             />
//         </View>
//     )
// }

// export default Counter
