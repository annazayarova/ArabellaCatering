
import React from 'react';
import { translate, Trans } from 'react-i18next';

class MyClickable extends React.Component {

  handleClick = () => this.props.onClick(this.props.index)
  
  render() {
      const { t, i18n } = this.props

    return <button type='button' className={ this.props.isActive ? 'active' : 'default'}
      onClick={this.handleClick }>
      { this.props.name }
    </button>
  }
}



export default translate("common")(MyClickable);
