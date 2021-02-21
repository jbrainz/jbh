import React, { useState, useContext } from "react"
import { withStyles } from "@material-ui/core/styles"
import {
  Button,
  TextField,
  Dialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  IconButton,
  Typography,
  makeStyles,
  Select,
  FormControl,
  MenuItem,
  Grid,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import { AppContext } from "../../Components/context/ContextState"

const menus = [
  {
    index: 1,
    type: "Sauce",
    title: "Curry sauce",
  },
  {
    index: 2,
    type: "Sauce",
    title: "Egg sauce",
  },
  {
    index: 4,
    type: "Sauce",
    title: "Meatballs sauce",
  },
  {
    index: 5,
    type: "Sauce",
    title: "Chicken casserole",
  },
  {
    index: 6,
    type: "Sauce",
    title: "beef sauce with vegetables",
  },
  {
    index: 7,
    type: "Sauce",
    title: "chicken sauce with vegetables",
  },
  {
    index: 8,
    type: "Sauce",
    title: "fish sauce with vegetables",
  },
  {
    index: 9,
    type: "Sauce",
    title: "pawn and chili sauce",
  },
  {
    index: 10,
    type: "Sauce",
    title: "Shrimp in garlic sauce",
  },
  {
    index: 11,
    type: "Sauce",
    title: "Sweet n sour meal with a choice of protein",
  },
  {
    index: 12,
    type: "Soup",
    title: "Eforiro{spinach soup]",
  },
  {
    index: 13,
    type: "Soup",
    title: "Banga [palm nuts extracts]",
  },
  {
    index: 14,
    type: "Soup",
    title: "Egusi soup [melon soup]",
  },
  {
    index: 15,
    type: "Soup",
    title: "Ewedu and gbegiri",
  },
  {
    index: 16,
    type: "Soup",
    title: "Ogbono soup (Draw Soup)",
  },
  {
    index: 17,
    type: "Soup",
    title: "Afang",
  },
  {
    index: 18,
    type: "Soup",
    title: "Okro",
  },
  {
    index: 19,
    type: "Soup",
    title: "Bitterleaf",
  },
  {
    index: 20,
    type: "Hot Spot Special",
    title: "Goat Peppersoup",
  },
  {
    index: 21,
    type: "Hot Spot Special",
    title: "Catfish Pepersoup",
  },
  {
    index: 22,
    type: "Hot Spot Special",
    title: "Tilapia Paper Mixed",
  },
  {
    index: 23,
    type: "Hot Spot Special",
    title: "Peppered snail",
  },
  {
    index: 24,
    type: "Hot Spot Special",
    title: "Assorted meat pepper",
  },
  {
    index: 25,
    type: "Hot Spot Special",
    title: "Chicken Mixed pepper",
  },
  {
    index: 26,
    type: "Hot Spot Special",
    title: "Asun",
  },
  {
    index: 27,
    type: "Hot Spot Special",
    title: "Nkwobi",
  },
  {
    index: 28,
    type: "Hot Spot Special",
    title: "Peppered Turkey",
  },
  {
    index: 29,
    type: "Yam Meals",
    title: "Boiled yam",
  },
  {
    index: 30,
    type: "Yam Meals",
    title: "Yamarita",
  },
  {
    index: 31,
    type: "Yam Meals",
    title: "Crispy Fried yam",
  },
  {
    index: 32,
    type: "Yam Meals",
    title: "Wedges potatoes",
  },
  {
    index: 33,
    type: "Yam Meals",
    title: "Yam pottage [ASARO]",
  },
  {
    index: 34,
    type: "Rice Meals",
    title: "Jolof Rice",
  },
  {
    index: 35,
    type: "Rice Meals",
    title: "Fried Rice",
  },
  {
    index: 36,
    type: "Rice Meals",
    title: "Coconout Rice",
  },
  {
    index: 32,
    type: "Rice Meals",
    title: "Chineese Rice",
  },
  {
    index: 37,
    type: "Breakfast",
    title: "Akara",
  },
  {
    index: 38,
    type: "Breakfast",
    title: "Moi Moi",
  },
  {
    index: 39,
    type: "Breakfast",
    title: "Yam and egg sauce",
  },
  {
    index: 40,
    type: "Breakfast",
    title: "Omelet",
  },
  {
    index: 41,
    type: "Breakfast",
    title: "Cereal",
  },
  {
    index: 42,
    type: "Swallow",
    title: "Amala",
  },
  {
    index: 43,
    type: "Swallow",
    title: "Eba",
  },
  {
    index: 43,
    type: "Swallow",
    title: "Semolina",
  },
  {
    index: 44,
    type: "Swallow",
    title: "Wheat",
  },
  {
    index: 45,
    type: "Swallow",
    title: "Pounded Yam",
  },
  {
    index: 46,
    type: "Swallow",
    title: "Fufu",
  },
  {
    index: 47,
    type: "Others",
    title: "Stew with beef",
  },
  {
    index: 48,
    type: "Others",
    title: "Stew with chicken",
  },
  {
    index: 49,
    type: "Others",
    title: "Stew with fish",
  },
  {
    index: 50,
    type: "Others",
    title: "Stew with turkey",
  },
  {
    index: 51,
    type: "Others",
    title: "Egusi and eforiro",
  },
  {
    index: 52,
    type: "Others",
    title: "afang",
  },
  {
    index: 53,
    type: "Others",
    title: "oha",
  },
  {
    index: 54,
    type: "Others",
    title: "ogbono",
  },
  {
    index: 55,
    type: "Others",
    title: "Seafood okra",
  },
  {
    index: 56,
    type: "Others",
    title: "Yam pottage alone",
  },
  {
    index: 57,
    type: "Others",
    title: "Yam pottage with protien",
  },
  {
    index: 57,
    type: "Others",
    title: "3.4 litres assorted meat stew",
  },
]
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  inputs: {
    marginBottom: "2em",
    marginLeft: "3em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0.5em",
      marginBottom: "0.5em",
    },
  },
  select: {
    width: "10em",
    [theme.breakpoints.down("sm")]: {
      width: "8em",
    },
  },
  selectC: {
    marginLeft: "3em",
    width: "15em",
    [theme.breakpoints.down("sm")]: {
      width: "10em",
    },
  },
  main: {
    backgroundColor: "#fff",
  },
}))

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

//REgex!
const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

export default function CustomizedDialogs() {
  const { open, handleClose, item } = useContext(AppContext)
  const classes = useStyles()
  const [details, setDetails] = useState({
    email: "",
    address: "",
    phone: "",
    disc: "",
    select: "",
  })
  const [er, setEr] = useState(false)

  const { email, address, phone, disc, select } = details
  const onChange = (e) =>
    setDetails({ ...details, [e.target.name]: e.target.value })

  const showError = (
    <Typography style={{ color: "red", marginLeft: "1em" }}>{er}</Typography>
  )

  const onSubmit = (e) => {
    e.preventDefault()
    setEr("")
    if (email === "" || phone === "" || address === "") {
      setEr("All Fields Are Required!", "danger")
    } else if (!emailRegex.test(email)) {
      setEr("Invalid Email")
    } else if (!phoneRegex.test(phone)) {
      setEr("Invalid Phone")
    } else {
      const newWindow = window.open(
        `//api.whatsapp.com/send?phone=+2348139714746&text=${select},${phone}, ${address},${email} `,
        "_blank",
        "noopener,noreferrer",
      )
      if (newWindow) newWindow.opener = null
    }
  }

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        open={open}
        className={classes.main}
      >
        <DialogTitle id="form-dialog-title" onClose={handleClose}>
          Order
        </DialogTitle>
        {showError}
        <DialogContent className={classes.content} dividers>
          <FormControl className={classes.formControl}>
            <Grid container justify="space-between" direction="column">
              <Grid
                container
                justify="space-between"
                direction="row"
                alignItems="center"
              >
                <Grid item className={classes.inputs}>
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    required
                    name="email"
                    label="Email"
                    value={email}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item className={classes.inputs}>
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    required
                    label="Phone"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item className={classes.inputs}>
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    label="Address"
                    name="address"
                    required
                    value={address}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item className={classes.inputs}>
                  <TextField
                    variant="outlined"
                    multiline
                    id="outlined-basic"
                    name="disc"
                    label="others please specify"
                    value={disc}
                    onChange={onChange}
                  />
                </Grid>
              </Grid>
              <Grid container className={classes.selectC}>
                <Grid item>
                  <Typography>select meal</Typography>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={select}
                    name="select"
                    className={classes.select}
                    onChange={onChange}
                  >
                    {menus
                      .filter((d) => d.type === item)
                      .map(({ title, index }) => (
                        <MenuItem value={index}>{title}</MenuItem>
                      ))}
                  </Select>
                </Grid>
              </Grid>
            </Grid>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            autoFocus
            onClick={onSubmit}
            color="secondary"
          >
            Order
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
