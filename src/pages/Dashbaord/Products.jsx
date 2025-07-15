import React from 'react'
import ProductHeader from '../../section/Dashboard/Products.jsx/ProductHeader';
import ProductSecondSection from '../../section/Dashboard/Products.jsx/ProductSecondSection';
import ProductThirdSection from '../../section/Dashboard/Products.jsx/ProductThirdSection';
import ReportFourthSection from '../../section/Dashboard/Reports/ReportFourthSection';
import ReportSecondSection from '../../section/Dashboard/Reports/ReportSecondSection';
export default function Products() {
  return (
    <>

      <ProductHeader
      title="Products"
      />
      <ProductSecondSection />
      <ReportSecondSection />
      <ProductThirdSection />
      <ReportFourthSection />

    </>
  )
}
