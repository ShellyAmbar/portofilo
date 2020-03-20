import React, { Component } from "react";
import new_app_logo from "../../photos/new_app.png";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    padding: 10
  },
  card: {
    padding: theme.spacing(3),
    textAlign: "center",
    margin: theme.spacing(4),
    justifyContent: "center",
    width: 450
  },
  media: {
    justifyContent: "center",
    textAlign: "center",
    height: 0,
    paddingTop: "10%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {}
}));

function Products(props) {
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const productsItems = props.products.map(product => (
    <Grid item xs={3} container justify="center" alignContent="center">
      <Card key={product.id.toString()} className={classes.card}>
        <CardHeader
          style={{ height: 100 }}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={product.title}
          subheader={
            <b>{`Price: ${product.price} ${product.currency} Orders: ${product.numOfOrders} `}</b>
          }
        />
        <CardMedia
          style={{ height: 200, width: 250 }}
          className={classes.media}
          image={new_app_logo}
          title={product.title}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to cart"
            onClick={() => props.handelAddToCart(product)}
          >
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography
              paragraph
            >{`Description: ${product.description}`}</Typography>
            <Typography
              paragraph
            >{`Framework: ${product.framework} `}</Typography>
            <Typography paragraph>{`Language: ${product.language}`}</Typography>
            <Typography paragraph>
              {`Work Time: ${product.work_time} `}
            </Typography>
            <Typography paragraph>
              {`Operation System: ${product.operating_system}`}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  ));
  return <div className="row">{productsItems}</div>;
}

export default Products;
