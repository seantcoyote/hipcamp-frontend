import React from 'react'
import {object, array} from 'prop-types'
// import CampFeaturesItem from '../CampFeaturesItem'

const CampFeatures = ({features, style}) => (
  <ul className="CampFeatures" style={style}>
    {features.map((feature) => (
      <li key={feature.title}>{feature.title}: {feature.presence ? 'Yes!' : 'No :-('}
      {feature.subfeatures.length > 0 ? <CampFeatures features={feature.subfeatures} /> : null}
      </li>
        // <CampFeaturesItem
        //   key={featureId}
        //   task={tasks[taskId]}
        // />
      ))
    }
  </ul>
)

CampFeatures.propTypes = {
  features: array.isRequired,
  style: object
}

export default CampFeatures
