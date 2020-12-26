import React from 'react';

import PageTitle from '../RenderingComponents/PageTitle';
import TextnImg from '../RenderingComponents/TextnImg';

class AwardsComponent extends React.Component{
    render(){
        return(
            <div>
                <PageTitle>
                    Awards
                </PageTitle>
                <TextnImg/>
            </div>
        );
    }
}
export default AwardsComponent;