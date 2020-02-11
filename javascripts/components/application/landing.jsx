import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'

import Hero from '@/components/hero'

export default class Landing extends Component {

  render () {
    return (
      <Hero>
        <div className="columns">
          <div className="column"></div>

          <div className="column is-two-thirds">
            <p className="title">
              What is POBA?
            </p>
            <p>
              <strong>//// POBA</strong> (<a href="http://erc721.org/" title="ERC721 Standard Info Page">ERC721</a>, POBA TAGS are specialized Ethereum tokens that carry a unique individual signature that is attached to a specific asset held in inventory. No duplication may exist. POBA tags stop product counterfeiting and theft while offering customers an easy and secure method of asset management.)
            </p>

            <br />
            <Link to="/tokens/new" className="button is-info is-large">
              <span>Register a POBA tag</span>
            </Link>
            <br />
            <small className="is-size-7">(Only for testing, does not require actual Ether)</small>
          </div>

          <div className="column"></div>
        </div>
      </Hero>
    )
  }

}
