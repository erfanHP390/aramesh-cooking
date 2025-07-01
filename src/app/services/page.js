import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Brands from '@/components/templates/services/barnds/Brands'
import Service from '@/components/templates/services/service/Service'
import React from 'react'

function page() {
  return (
    <>
      <main id="content">
        <Breadcrumb title={"خدمات"} />
        <Service />
        <Brands />
      </main>
    </>
  )
}

export default page
