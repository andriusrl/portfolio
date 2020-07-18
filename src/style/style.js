import styled, { keyframes } from 'styled-components'

export const Main = styled.div`
    font-family: 'Roboto', sans-serif;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12px;
`
export const TopBioContainer = styled.div`
      width: 564px;
      height: 621px;
      background-color: #011726;
      display: flex;
      justify-content: flex-end;
      margin-left: 6px;
`
export const TopBioContainerLeft = styled.div`
    width: 564px;
    height: 621px;
    background-color: #011726;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    margin-right: 6px;
`
export const ContentBio = styled.div`
    width: 371px;
    align-self: center;
    margin-top: auto;
    margin-bottom: auto;
`
export const WrapperBioContainer = styled.div`
    display: flex;

`
const increasesSizeLink = keyframes`
    0% {
        font-size: 13pt;
    }
    50% {
        font-size: 16pt;
    }
    100% {
        font-size: 18pt;
    }
`
export const Link = styled.a`
    text-decoration: none;
    :hover{
            animation: ${increasesSizeLink} 0.3s 0s both;
    };
    :link{
        text-decoration: none;
        color:inherit;
    };
    :visited {
        text-decoration: none;
        color:inherit;
    };
    a:active {
        text-decoration: none;
        color:inherit;
    };
`
export const Menu = styled.div`
    position: absolute;
    margin: 23px 0 0 0;
    color: #ffffff;
    z-index: 1;
    padding-right: 53px;
    ${Link}:nth-child(1){
        color: #f2b33e;
    }
    
`

export const Title = styled.div`
    margin: 23px auto 0 29px;
    font-weight: bold;
`
export const Photo = styled.img`
    position: absolute;
    width: 564px;
    height: 621px;
    opacity: 0.6;
`
const increasesSize = keyframes`
    0% {
        width: 49px;
    }
    50% {
        width: 59px;
    }
    100% {
        width: 69px;
    }
`
export const SocialNetworksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 53px auto 0;
    z-index: 1;
`
export const SocialNetwrokIcon = styled.img`
    margin: 16%;
    width: 39px;
    :hover{
            animation: ${increasesSize} 0.3s 0s both;
        }
`

export const WrapperSkills = styled.div`
    width: 1140px;
    background-color: #1b818c;
    margin-top: 12px;
    padding-bottom: 9px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
`
export const PhotoBottom = styled.img`
    position: absolute;
    align-self: flex-end;
    opacity: 0.6;
`
export const SkillsContent = styled.div`
    margin: 69px 0 0 79px;
    display: flex;
`
export const TitleSkills = styled.h1`
    margin: 79px 0 0 79px;
    font-weight: bold;
`
export const SkillItem = styled.div`
    text-align: center;
    p{
        text-align: justify;
        padding: 0 9% 0 9%;
    }
`
export const EducationItem = styled.div`
    width: 364px;
    height: 296px;
    text-align: center;
    display: flex;
    align-items: center;
    div{
        margin-top: 33px;
        padding-left:9%;
        padding-right:9%;

    };
    p:nth-child(3){
        text-align: justify;
    }
`
export const WrapperEducation = styled.div`
    margin-top:12px;
    margin-bottom:12px;
    width: 1140px;
    display: flex;
    color: #ffffff;
    ${EducationItem}:nth-child(1){
        background-color: #024159;
        margin-left: 12px;
    }
    ${EducationItem}:nth-child(2){
        background-color: #025e73;
        margin-left: 12px;
        margin-right: 12px;
    }
    ${EducationItem}:nth-child(3){
        background-color: #82d0d9;
        margin-right: 12px;
    }
`
export const EducationTitle = styled.h1`
        position: absolute;
        width: 364px;
        margin-top: 19px !important;
        align-self: flex-start;
`
export const ProjectItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`
export const WrapperProjects = styled.div`
    width: 1140px;
    ${ProjectItem}:nth-child(1){
        background-color: #011726;
    };
    ${ProjectItem}:nth-child(2){
        background-color: #1b818c;
    };
    ${ProjectItem}:nth-child(3){
        background-color: #025e73;
    };
`
export const PhotoProject = styled.img`
    width: 499px;
    height: 303px;
    margin-top: auto;
    margin-bottom: auto;
`
export const ProjectContent = styled.div`
    width: 420px;
    color: #ffffff;
    margin-top: 3%;
    margin-bottom: 3%;
`
export const ProjectTitle = styled.h2`
    color: #00436c;
    margin: 0;
    margin-bottom: 12px;
`
export const WrapperContact = styled.div`
    background-color: #1b818c;
    margin-top:12px;
    width: 1140px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ImageEmail = styled.img`
    width: 193px;
    height: 193px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 66px;
`
export const ContactContent = styled.div`
    margin-top: 2%;
    width: 563px;
    color: #ffffff;
    display: flex;
    div{
        width: 430px;
        text-align: justify;
    };
`
export const SocialNetworksContactWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
`

export const SocialNetwrokContactIcon = styled.img`
    width: 39px;
    margin: 2%;
        :hover{
            animation: ${increasesSize} 0.3s 0s both;
        }
        
`
export const WrapperFooter = styled.div`
    background-color: #024159;
    width: 1140px;
    height: 58px;
    padding-left: 51px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    p{
        color: #ffffff;
        padding: 0;
    }
`
export const Button = styled.a`
    height: 46px;
    border: 1px solid black;
`