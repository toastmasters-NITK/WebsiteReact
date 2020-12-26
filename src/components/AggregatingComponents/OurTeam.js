import React from 'react';
import Content from '../RenderingComponents/Content';

import logo from '../../../src/images/TM Supritha.jpeg';

import {OurTeamData} from '../../constants';
import OurTeamItem from "../RenderingComponents/OurTeamItem";
class OurTeam extends React.Component{

    PresidentComponent=(
        <div className="col-md-12 col-sm-6">
            <OurTeamItem Name="TM Supritha"  Description="President" url="https://www.linkedin.com/in/suprithahs" image="logo" />
            {/* <OurTeamItem Name="TM Supritha"  Description="President" url="https://www.linkedin.com/in/suprithahs" image="../../../src/images/TM Supritha.jpeg" /> */}
        </div>
        );
        
        
        
    OurTeamComponents=OurTeamData.map(({Name,Description,url,image})=>{
        <div className="col-md-3 col-sm-6">
        <OurTeamItem/>
        </div>
    });



   
        render(){
            return(
            <div>
                <Content 
          header={"Our Team"} 
          content={"We pride ourselves on providing superior service but you don't just have to take our word for it."}
          />
            {this.PresidentComponent}​​
            {this.OurTeamComponents}​​
            </div>
            );
        }
    }
//         const CardRenderList=this.props.cardData.map(({Title,Description,url,image})=>{
//             return (
//                 <Card title={Title} desc={Description} url={url} img={image} />
//             );
//         });
//         return(
//             <section class="card-content section">
//                 <div class="container">
//                     <div class="row">
//                         {CardRenderList}
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }
export default OurTeam;