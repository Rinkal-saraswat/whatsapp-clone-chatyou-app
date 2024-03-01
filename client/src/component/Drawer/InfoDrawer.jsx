// profile conatiner...first green part
import { Box, Drawer, Typography ,styled} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
 // Components
import Profile from "./Profile";
const Header=styled(Box)`
background:#008069;
height:110px;
color:#FFFFFF;
display:flex;
&>svg, &>p{
    margin-top:auto;
    padding:15px;
    font-weight:600;
    font-size:20px 
}
`
const Component=styled(Box)`
 background:#ededed;
 height:85%;
 overflow:scroll;

`

const drawerStyle={

    left:20,  //fr scroll drawer profile
    top:15,
    height:'95%',
    width:'35%',
    boxshadow:'none'

}

const InfoDrawer=({open,setOpen})=>{  
    const handleClose=()=>{
        setOpen(false);
    }



    return (


       <Drawer

        open={open}
        onClose={handleClose}
         PaperProps={{sx:drawerStyle}}
         style={{zIndex:1500}}  >
            <Header>

                <ArrowBack onClick={()=>setOpen(false)}/>
                <Typography>Profile</Typography>
            </Header>
            <Component>
                <Profile/> 

            </Component>
           
      

       </Drawer>
    )
}

export default InfoDrawer;