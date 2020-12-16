import React, { Fragment } from 'react'
import Users from '../components/users/users';
import Search from '../components/users/search';

function Home() {
 return (
  <Fragment>
   <Search />
   <Users />
  </Fragment>
 )
}

export default Home
