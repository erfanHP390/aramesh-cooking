import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import ForgotPass from '@/components/templates/forgot/ForgotPass'
import React from 'react'

function page() {
  return (
    <>
      <main id="content">
        <Breadcrumb title={"بازیابی رمزعبور"} />
        <ForgotPass />
      </main>
    </>
  )
}

export default page
