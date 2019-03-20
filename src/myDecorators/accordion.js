import React, {Component} from 'react'

export default (OriginalComponent) => class AccordeonComponent extends Component {
  state = {
    openItemId: null
  }

  render(){
    console.log(this.props);
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
