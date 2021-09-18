import { Fragment } from 'react'
import { Hero, CoupleProfile, SaveTheDate } from '#components/index/index'

const IndexService = (): JSX.Element => {
  return (
    <Fragment>
      <Hero />
      <CoupleProfile />
      <SaveTheDate />
    </Fragment>
  )
}

export default IndexService
