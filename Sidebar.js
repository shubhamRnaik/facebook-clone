import React from 'react'
import Sidebaroptions from './Sidebaroptions'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./css/sidebar.css"
function Sidebar() {

    return (
        <div className="sidebar">
            <Sidebaroptions src={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQry1iOrc8u_v8st6ECCwY2tqk-jJO7VyLeLzLcG5e5YbnuB1xT"} title={"shubham"}/>
            <Sidebaroptions  src="https://www.facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png" title="Covid 19 Information Center"/>
            <Sidebaroptions  src="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png" title="Friends"/>
            <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" title="Groups"/>
            <Sidebaroptions  src="https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png" title="Watch"/>
            <Sidebaroptions  src="https://www.facebook.com/rsrc.php/v3/yv/r/QAyfjudAqqG.png" title="Events"/>
            <Sidebaroptions  Icon={ExpandMoreIcon}  title="See More"/>
            
        </div>
    )
}

export default Sidebar
