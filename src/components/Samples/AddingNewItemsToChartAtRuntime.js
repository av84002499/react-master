import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserSlash } from '@fortawesome/free-solid-svg-icons'
import { OrgDiagram } from '../Diagrams';
import { LCA, Tree, PageFitMode, Enabled } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onRemoveButtonClick = this.onRemoveButtonClick.bind(this);

    this.state = {
      cursorItem: 0,
      highlightItem: 0,
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
        }
      

    this.index = this.state.items.length;
  }

  onAddButtonClick(itemConfig) {
    const { items } = this.state;

    var newItem = {
      id: this.index++,
      parent: itemConfig.id,
      title: "New Title",
      description: "New Description",
      image: photos.z
    };

    this.setState({
      items: [...items, newItem],
      cursorItem: newItem.id
    });
  }

  onRemoveButtonClick(itemConfig) {
    const { items } = this.state;

    this.setState(this.getDeletedItems(items, [itemConfig.id]));
  }

  getDeletedItems(items = [], deletedItems = []) {
    const tree = this.getTree(items);
    const hash = deletedItems.reduce((agg, itemid) => {
      agg.add(itemid.toString());
      return agg;
    }, new Set());
    const cursorParent = this.getDeletedItemsParent(tree, deletedItems, hash);
    const result = [];
    tree.loopLevels(this, (nodeid, node) => {
      if (hash.has(nodeid.toString())) {
        return tree.SKIP;
      }
      result.push(node);
    });

    return {
      items: result,
      cursorItem: cursorParent
    };
  }

  getDeletedItemsParent(tree, deletedItems, deletedHash) {
    let result = null;
    const lca = LCA(tree);
    result = deletedItems.reduce((agg, itemid) => {
      if (agg == null) {
        agg = itemid;
      } else {
        agg = lca.getLowestCommonAncestor(agg, itemid);
      }
      return agg;
    }, null);

    if (deletedHash.has(result.toString())) {
      result = tree.parentid(result);
    }
    return result;
  }

  getTree(items = []) {
    const tree = Tree();

    // rebuild tree
    for (let index = 0; index < items.length; index += 1) {
      const item = items[index];
      tree.add(item.parent, item.id, item);
    }

    return tree;
  }

  render() {
    const config = {
      ...this.state,
      pageFitMode: PageFitMode.None,
      hasSelectorCheckbox: Enabled.True,
      hasButtons: Enabled.True,
      buttonsPanelSize: 40,
      onButtonsRender: (({ context: itemConfig }) => {
        return <>
          <button key="1" className="StyledButton"
            onClick={(event) => {
              event.stopPropagation();
              this.onAddButtonClick(itemConfig);
            }}>
            <FontAwesomeIcon icon={faUserPlus} />
          </button>
          <button key="2" className="StyledButton"
            onClick={(event) => {
              event.stopPropagation();
              this.onRemoveButtonClick(itemConfig);
            }}>
            <FontAwesomeIcon icon={faUserSlash} />
          </button>
        </>
      })
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div >
  }
}

export default Sample;
