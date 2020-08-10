import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Table from "components/Table/Table.js";
import MaterialTable from 'material-table';
import players from '../../players.json'
import avatar from "assets/img/faces/marc.jpg";
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Players Table</h4>
            <p className={classes.cardCategoryWhite}>
              List contain all players in our team
            </p>
          </CardHeader>
          <CardBody>
          <MaterialTable
      title="Remote Data Preview"
      columns={[
        {
          title: 'Avatar',
          field: 'avatar',
          render: rowData => (
            <img
              style={{ height: 36, borderRadius: '50%' }}
              src={avatar}
            />
          ),
        },
        { title: 'Name', field: 'name' },
        { title: 'Poste', field: 'poste' },
        { title: 'Status', field: 'status'}
      ]}
      data={players}
      options={{
        paging: false,

    }}
    />
          </CardBody>
        </Card>
      </GridItem>
      </GridContainer>
    </div>
  );
}
