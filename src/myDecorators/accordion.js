import React, {Component} from 'react'

export default (OriginalComponent) => class AccordeonComponent extends Component {
  state = {
    openItemId: this.props.openDefault
  }

  render(){
    return <OriginalComponent
      {...this.props}
      openItemId = {this.state.openItemId}
      toggleOpen = {this.toggleOpen} />
  }

  toggleOpen = (openItemId) => (e) => {
    this.setState({
      openItemId: (openItemId == this.state.openItemId) ? null : openItemId
    })
  }
}
