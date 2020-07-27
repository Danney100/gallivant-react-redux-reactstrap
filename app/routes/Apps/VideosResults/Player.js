import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardBody} from 'components'
import ReactPlayer from 'react-player'

const Player = ({url, description}) => {
  return (
    <Card className="mb-4">
      <CardBody>
        <ReactPlayer url={url} width="273" height="180" className="r-player" />
        <div className="d-flex m-2 text-center">
          <span>
            <a className="h6 text-decoration-none font-weight-bold" href="#">
              Scout & Cellar - &nbsp;
            </a>
            {description}
          </span>
        </div>
      </CardBody>
    </Card>
  )
}

Player.propTypes = {
  url: PropTypes.string,
  description: PropTypes.string,
}

export default Player
