import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { Size, PageFitMode } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.setMinimumSize = this.setMinimumSize.bind(this);
    this.setMaximumSize = this.setMaximumSize.bind(this);

    this.sizes = {
      "640*480": new Size(640, 480),
      "800*600": new Size(800, 600),
      "1024*768": new Size(1024, 768),
      "1280*1024": new Size(1280, 1024)
    }

    this.state = {
      autoSizeMinimum: "640*480",
      autoSizeMaximum: "1280*1024"
    }
  }

  setMinimumSize(key) {
    this.setState({
      autoSizeMinimum: key
    })
  }

  setMaximumSize(key) {
    this.setState({
      autoSizeMaximum: key
    })
  }

  render() {
    const { autoSizeMinimum, autoSizeMaximum } = this.state;
    const config = {
      pageFitMode: PageFitMode.AutoSize,
      highlightItem: 0,
      cursorItem: 0,
      autoSizeMinimum: this.sizes[autoSizeMinimum],
      autoSizeMaximum: this.sizes[autoSizeMaximum],
      
        "users": [
          {
            "id": 1,
            "fullName": "Alice Anderson",
            "desingnation": "Founder",
            "emailAddress": "alice.anderson@example.com",
            "manager": " - "
          },
          {
            "id": 2,
            "fullName": "Bob Barker",
            "emailAddress": "Founder",
            "desingnation": "bob.barker@example.com",
            "manager": " - "
          },
          {
            "id": 3,
            "fullName": "Carol CEO",
            "desingnation": "CEO",
            "emailAddress": "carol.ceo@examiple.com",
            "manager": "Alice Anderson"
          },
          {
            "id": 4,
            "fullName": "David HR",
            "desingnation": "CHRO",
            "emailAddress": "david.hr@examiple.com",
            "manager": "Alice Anderson"
          },
          {
            "id": 4,
            "fullName": "Eric CFO",
            "desingnation": "CFO",
            "emailAddress": "eric.cfo@examiple.com",
            "manager": "Alice Anderson"
          },
          {
            "id": 5,
            "fullName": "Frank Sales Mgr",
            "desingnation": "Sales Manager",
            "emailAddress": "frank.sales@examiple.com",
            "manager": "Carol CEO"
          },
          {
            "id": 6,
            "fullName": "Grace Marketing Mgr",
            "desingnation": "Marketing Manager",
            "emailAddress": "grace.marketing@examiple.com",
            "manager": "Carol CEO"
          },
          {
            "id": 7,
            "fullName": "Henry Ops Mgr",
            "desingnation": "Operations Manager",
            "emailAddress": "henry.ops@examiple.com",
            "manager": "Carol CEO"
          },
          {
            "id": 8,
            "fullName": "Irene Tech Mgr",
            "desingnation": "Technology Manager",
            "emailAddress": "irene.tech@examiple.com",
            "manager": "Carol CEO"
          },
          {
            "id": 9,
            "fullName": "Jack Sales TL",
            "desingnation": "Sales Team Leader",
            "emailAddress": "jack.sales@examiple.com",
            "manager": "Frank Sales Mgr"
          },
          {
            "id": 10,
            "fullName": "Kelly Sales TL",
            "desingnation": "Sales Team Leader",
            "emailAddress": "kelly.sales@examiple.com",
            "manager": "Frank Sales Mgr"
          },
          {
            "id": 11,
            "fullName": "Lro Mktg TL",
            "desingnation": "Marketing Team Leader",
            "emailAddress": "Ieo.marketing@examiple.com",
            "manager": "Grace Marketing Mgr"
          },
          {
            "id": 12,
            "fullName": "Maria Mktg TL",
            "desingnation": "Marketing Team Leader",
            "emailAddress": "maria.marketing@examiple.com",
            "manager": "Grace Marketing Mgr"
          },
          {
            "id": 13,
            "fullName": "Nathan Ops TL",
            "desingnation": "Operations Team Leader",
            "emailAddress": "nathan.ops@example.com",
            "manager": "Henry Ops Mgr            "
          },
          {
            "id": 14,
            "fullName": "Olivia Ops TL",
            "desingnation": "Operations Team Leader",
            "emailAddress": "olivia.ops@example.com",
            "manager": "Henry Ops Mgr"
          },
          {
            "id": 15,
            "fullName": "Paul Tech TL",
            "desingnation": "Technology Team Leader",
            "emailAddress": "paul.tech@example.com",
            "manager": "Irene Tech Mgr"
          },
          {
            "id": 16,
            "fullName": "Quinn Tech TL",
            "desingnation": "Technology Team Leader",
            "emailAddress": "quinn.tech@example.com",
            "manager": "Irene Tech Mgr"
          },
          {
            "id": 17,
            "fullName": "Rachel Sales Rep",
            "desingnation": "Sales Representative",
            "emailAddress": "rachel.sales@example.com",
            "manager": "Jack Sales TL"
          },
          {
            "id": 18,
            "fullName": "Sam Sales Rep",
            "desingnation": "Sales Representative",
            "emailAddress": "sam.sales@example.com",
            "manager": "Jack Sales TL"
          },
          {
            "id": 19,
            "fullName": "Tina Sales Rep",
            "desingnation": "Sales Representative",
            "emailAddress": "tina.sales@example.com",
            "manager": "Kelly Sales TL"
          },
          {
            "id": 20,
            "fullName": "Victor Sales Rep",
            "desingnation": "Sales Representative",
            "emailAddress": "victor.sales@examiple.com",
            "manager": "Kelly Sales TL"
          },
          {
            "id": 21,
            "fullName": "Wendy Mktg Rep",
            "desingnation": "Marketer",
            "emailAddress": "wendy.marketing@example.com",
            "manager": "Leo Mktg TL"
          },
          {
            "id": 22,
            "fullName": "Xavier Mktg Rep",
            "desingnation": "Marketer",
            "emailAddress": "xavier.marketing@example.com",
            "manager": "Leo Mktg TL"
          },
          {
            "id": 23,
            "fullName": "Yara Ops Staff",
            "desingnation": "Operations Staff",
            "emailAddress": "yara.ops@example.com",
            "manager": "Nathan Ops TL"
          },
          {
            "id": 24,
            "fullName": "Zach Ops Staff",
            "desingnation": "Operations Staff",
            "emailAddress": "zach.ops@example.com",
            "manager": "Nathan Ops TL"
          },
          {
            "id": 25,
            "fullName": "Alex Tech Staff",
            "desingnation": "Technology Staff ",
            "emailAddress": "alex.tech@example.com",
            "manager": "Paul Tech TL"
          },
          {
            "id": 26,
            "fullName": "Bella Tech Staff",
            "desingnation": "Technology Staff ",
            "emailAddress": "bella.tech@example.com",
            "manager": "Paul Tech TL"
          },
          {
            "id": 27,
            "fullName": "Chris Tech Staff",
            "desingnation": "Technology Staff ",
            "emailAddress": "chris.tech@example.com",
            "manager": "Quinn Tech TL"
          },
          {
            "id": 28,
            "fullName": "Dana Tech Staff",
            "desingnation": "Technology Staff ",
            "emailAddress": "dana.tech@example.com",
            "manager": "Quinn Tech TL"
          }
        ]
      
    };

    return <>
      <p>Minimum Auto Size:&nbsp;
        {Object.keys(this.sizes).map(key => <label key={key}><input onChange={() => this.setMinimumSize(key)} name="autoSizeMinimum" type="radio" checked={autoSizeMinimum === key ? 'checked' : ''} value="{key}" />{key}</label>)}
      </p>
      <p>Maximum Auto Size:&nbsp;
        {Object.keys(this.sizes).map(key => <label key={key}><input onChange={() => this.setMaximumSize(key)} name="autoSizeMaximum" type="radio" checked={autoSizeMaximum === key ? 'checked' : ''} value="{key}" />{key}</label>)}
      </p>
      <OrgDiagram centerOnCursor={true} config={config} />
    </>
  }
}

export default Sample;