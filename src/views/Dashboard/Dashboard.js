import React, { Component, lazy, Suspense } from 'react';
import CardList from '../../components/CardList/cardlist'
import { Row } from 'reactstrap'
import { CANCELLED } from 'dns';

const items = [
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
  {
    name: "cycle",
    description: "best deal for cyclers",
  },
]

class Dashboard extends Component {
  constructor(props) {
    super(props);



    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }


  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div style={{ overflowY: 'hidden', overflowX: 'hidden' }} className="animated fadeIn">
        <CardList items={items} />
      </div>
    );
  }
}

export default Dashboard;
