import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setModeCardlist } from '../../redux/actions'
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const mapStateToProps = state => ({
  mode: state.mode
})

const mapDispatchToProps = dispatch => ({
  setModeCardlist: value => dispatch(setModeCardlist(value)),
})


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  handleClick = () => {
    const { mode } = this.props;
    if (mode == "tiles") {
      this.props.setModeCardlist('list')
    } else {
      this.props.setModeCardlist('tiles')
    }
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;



    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />

        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>

        </Nav>
        <Nav className="ml-auto" navbar>

          <div style={{ marginRight: '20px' }} onClick={this.handleClick}>
            {this.props.mode == 'tiles' ?
              <img style={{ width: '24px', height: '24px' }} src={require('../../assets/tiles.png')} />
              :
              <img style={{ width: '24px', height: '24px' }} src={require('../../assets/list.svg')} />
            }
          </div>


        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader);
