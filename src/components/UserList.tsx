import react from 'react'
import { useSelector } from 'react-redux'

const UserList: React.FC = () => {
  const state = useSelector(state => state)
  return (
    <div>
      List
    </div>
  )
}

export default UserList