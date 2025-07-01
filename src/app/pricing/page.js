import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Plans from '@/components/templates/pricing/Plans'
import React from 'react'

function page() {
  return (
    <>
      <main id="content">
        <Breadcrumb title={"تعرفه ها"} />
        <Plans />
      </main>
    </>
  )
}

export default page
