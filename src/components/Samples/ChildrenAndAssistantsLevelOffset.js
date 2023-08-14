import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { AnnotationType, Colors, ChildrenPlacementType, AdviserPlacementType, ItemType, LineType, PageFitMode, Enabled, GroupByType, Thickness } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  constructor(props) {
    super(props);

    var items = [];
    var rootItem = {
      id: 1,
      fullName: "Alice Anderson",
      desingnation: "Founder",
      emailAddress: "alice.anderson@example.com",
      manager: " - "
    }
    items.push(rootItem);

    items.push({
      id: 2,
      fullName: "Bob Barker",
      emailAddress: "Founder",
      desingnation: "bob.barker@example.com",
      manager: " - "
    });

    items.push({
     
      "id": 3,
      "fullName": "Carol CEO",
      "desingnation": "CEO",
      "emailAddress": "carol.ceo@examiple.com",
      "manager": "Alice Anderson"
    });

    for (var index = 3; index <= 10; index += 2) {
      items.push({
        "id": 4,
      "fullName": "David HR",
      "desingnation": "CHRO",
      "emailAddress": "david.hr@examiple.com",
      "manager": "Alice Anderson"
      });
      items.push({
        id: (index + 1),
       "id": 4,
      "fullName": "Eric CFO",
      "desingnation": "CFO",
      "emailAddress": "eric.cfo@examiple.com",
      "manager": "Alice Anderson"
      });
    }

    items.push({
      "id": 5,
      "fullName": "Frank Sales Mgr",
      "desingnation": "Sales Manager",
      "emailAddress": "frank.sales@examiple.com",
      "manager": "Carol CEO"
    });


    items.push({
     "id": 6,
      "fullName": "Grace Marketing Mgr",
      "desingnation": "Marketing Manager",
      "emailAddress": "grace.marketing@examiple.com",
      "manager": "Carol CEO"
    });

    for (index = 100; index <= 107; index += 1) {
      items.push({
       
      "id": 7,
      "fullName": "Henry Ops Mgr",
      "desingnation": "Operations Manager",
      "emailAddress": "henry.ops@examiple.com",
      "manager": "Carol CEO"
      });
    }

    for (index = 15; index <= 20; index += 1) {
      items.push({
      "id": 8,
      "fullName": "Irene Tech Mgr",
      "desingnation": "Technology Manager",
      "emailAddress": "irene.tech@examiple.com",
      "manager": "Carol CEO"
      });
    }

    for (index = 21; index <= 32; index += 1) {
      items.push({
        "id": 9,
      "fullName": "Jack Sales TL",
      "desingnation": "Sales Team Leader",
      "emailAddress": "jack.sales@examiple.com",
      "manager": "Frank Sales Mgr"
      });
    };

    items.push({
     "id": 10,
      "fullName": "Kelly Sales TL",
      "desingnation": "Sales Team Leader",
      "emailAddress": "kelly.sales@examiple.com",
      "manager": "Frank Sales Mgr"
    });

    items.push({
   "id": 11,
      "fullName": "Lro Mktg TL",
      "desingnation": "Marketing Team Leader",
      "emailAddress": "Ieo.marketing@examiple.com",
      "manager": "Grace Marketing Mgr"
    });

    items.push({
      "id": 12,
      "fullName": "Maria Mktg TL",
      "desingnation": "Marketing Team Leader",
      "emailAddress": "maria.marketing@examiple.com",
      "manager": "Grace Marketing Mgr"
    });

    var annotations = [
      {
        annotationType: AnnotationType.Level,
        levels: [0],
        title: "CEO",
        titleColor: Colors.RoyalBlue,
        offset: new Thickness(0, 0, 0, -1),
        lineWidth: new Thickness(0, 0, 0, 0),
        opacity: 0,
        borderColor: Colors.Gray,
        fillColor: Colors.Gray,
        lineType: LineType.Dotted
      },
      {
        annotationType: AnnotationType.Level,
        levels: [1],
        title: "Children 1",
        titleColor: Colors.RoyalBlue,
        offset: new Thickness(0, 0, 0, -1),
        lineWidth: new Thickness(0, 0, 0, 0),
        opacity: 0.08,
        borderColor: Colors.Gray,
        fillColor: Colors.Gray,
        lineType: LineType.Dotted
      },
      {
        annotationType: AnnotationType.Level,
        levels: [2],
        title: "Children 2",
        titleColor: Colors.RoyalBlue,
        offset: new Thickness(0, 0, 0, -1),
        lineWidth: new Thickness(0, 0, 0, 0),
        opacity: 0,
        borderColor: Colors.Gray,
        fillColor: Colors.Gray,
        lineType: LineType.Dotted
      },
      {
        annotationType: AnnotationType.Level,
        levels: [3],
        title: "Members",
        titleColor: Colors.RoyalBlue,
        offset: new Thickness(0, 0, 0, -1),
        lineWidth: new Thickness(0, 0, 0, 0),
        opacity: 0.08,
        borderColor: Colors.Gray,
        fillColor: Colors.Gray,
        lineType: LineType.Dotted
      }
    ];

    this.state = {
      items,
      annotations
    }
  }
  render() {
    const config = {
      ...this.state,
      pageFitMode: PageFitMode.Auto,
      cursorItem: 0,
      highlightItem: 0,
      hasSelectorCheckbox: Enabled.True,
      normalLevelShift: 20,
      dotLevelShift: 10,
      lineLevelShift: 10,
      normalItemsInterval: 20,
      dotItemsInterval: 10,
      lineItemsInterval: 5,
      buttonsPanelSize: 48,
      itemTitleSecondFontColor: Colors.White,
      leavesPlacementType: ChildrenPlacementType.Matrix,
      arrowsDirection: GroupByType.Children
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
