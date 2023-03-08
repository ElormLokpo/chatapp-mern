import React, {useEffect, useState} from 'react'; 
import Friend from '../../components/friend';
import axios from '../../services/axios';

function Friends() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    axios.get('/auth/users')
    .then(res=>{
    
      setUsers(res.data.users)
    })
  },[]);


  return (
    <div className='my-10 mx-20'>
        <p className='text-lg mb-4 font-semibold'>Friends</p>

        <div>
            {
              users.length > 0 ?
                users.map(i=><Friend details = {i} />)
              : <p>No Users on network to add</p>
            }
           
        </div>
    </div>
  )
}

export default Friends