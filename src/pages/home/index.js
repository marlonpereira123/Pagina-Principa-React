import React from 'react';
import {ContainerPage, TituloPage  } from '../../component/Main'
import BeenhereIcon from '@material-ui/icons/Beenhere';

const Page = () =>{
    return(
        <ContainerPage>
            <TituloPage>
                <BeenhereIcon/> Seja bem vindo
            </TituloPage>
        </ContainerPage>
    );
}

export default Page;