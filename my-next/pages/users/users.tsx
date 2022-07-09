import {addUsers} from '../../redux/users/actions/actionCreator'
import {useSelector,useDispatch} from 'react-redux'
export default ()=>{
    const dispatch = useDispatch<any>()
    let users = useSelector(state => {
        console.log('useSelector ',state.user.users)
        return state.user.users
    })
    // users = users??[]
    return (
        <>
            <button onClick={()=>{
                dispatch(addUsers(''))
            }}>get Users</button>
            {
                users.map(({name},index) => <h1 key={index}>{name}</h1>)
            }
            
        </>
    )
}