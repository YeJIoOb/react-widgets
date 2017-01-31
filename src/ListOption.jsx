import React from 'react';
import cn from 'classnames';
import _  from './util/_';

let ListOption = React.createClass({
  propTypes: {
    dataItem: React.PropTypes.any,
    focused:  React.PropTypes.bool,
    selected: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    handleMouseDown: React.PropTypes.func
  },

  render() {
    let { className, children, focused, selected, disabled, readOnly } = this.props;

    let props = _.omitOwnProps(this);

    let classes = {
      'rw-state-focus':    focused,
      'rw-state-selected': selected,
      'rw-state-disabled': disabled,
      'rw-state-readonly': readOnly
    };

    return (
      <li
        role='option'
        tabIndex={!(disabled || readOnly) ? '-1' : undefined}
        aria-selected={!!selected}
        className={cn('rw-list-option', className, classes)}
        ref='li'
        {...props}
        onClick={(e) => {
          this.props.handleMouseDown();
          this.props.onClick({target: this.refs.li.children[0].children[0]});
        }}
      >
        {children}
      </li>
    );
  }
});

export default ListOption;
