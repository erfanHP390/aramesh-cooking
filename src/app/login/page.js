import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Login from '@/components/templates/login/Login'
import React from 'react'

function page() {
  return (
    <>
     <main id="content">
        <Breadcrumb title={"ورود"} />
        <Login />
     </main>
    </>
  )
}

export default page
