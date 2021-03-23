import styled from 'styled-components';

export const AreaHeader = styled.div`

    height: 60px;
    background-image: linear-gradient(to right , #FFFAFA, #1C1C1C);
    color: black ;

    .container{
        padding: 5px 20px;
        display:flex;
        align-items: center;
    }
        .Logo{
           flex: 1;

           img{
               width:40px
           }
        }   
        nav{
            ul{
                display:flex;
            }

                li{
                    margin-left: 20px;
                    list-style: none;
                    font-size: 15px;
                
                    a{
                        text-decoration: none;
                        color: white;
                        display: flex;
                        align-items: center;

                        &:hover{
                            color:black;
                        }
                       
                    }

                }
        }

`;