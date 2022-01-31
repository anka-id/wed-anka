import { Fragment } from 'react'
import {
  Hero,
  CoupleProfile,
  SaveTheDate,
  Events,
} from '#components/index/index'

const IndexService = (): JSX.Element => {
  return (
    <Fragment>
      <Hero />
      <CoupleProfile />
      <Events />
      <SaveTheDate />
    </Fragment>
  )
}

export default IndexService
