import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Terms from '@/components/templates/rules/Terms'
import React from 'react'

function page() {
  return (
    <>
      <main id="content">
        <Breadcrumb title={"قوانین"} />
        <Terms />
      </main>
    </>
  )
}

export default page
