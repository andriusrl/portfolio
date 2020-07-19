import styled, { keyframes } from 'styled-components'

export const Main = styled.div`
    font-family: 'Roboto', sans-serif;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12px;
    @media (max-width: 480px) {
        padding-top: 0;
    };
`
export const TopBioContainer = styled.div`
      width: 564px;
      height: 621px;
      background-color: #011726;
      display: flex;
      justify-content: flex-end;
      margin-left: 6px;
      @media (max-width: 480px) {
        margin: 0;
        width: 100%;
        height: fit-content;
    };
`
export const TopBioContainerLeft = styled.div`
    width: 564px;
    height: 621px;
    background-color: #011726;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    margin-right: 6px;
    @media (max-width: 480px) {
        margin: 0;
        width: 100%;
        height: 100%;
        /* height: 621px;  */ /* Isso Corrigia as Skills que cobria a bio mas foi corrigido colocando border-box e arrumando width do CotentBio */
        padding-left: 3%;
        padding-right: 3%;
        padding-bottom: 3%;
        box-sizing: border-box;
    };
`
export const ContentBio = styled.div`
    width: 371px;
    align-self: center;
    margin-top: auto;
    margin-bottom: auto;
    @media (max-width: 480px) {
        width: 100%;
    };
`
export const WrapperBioContainer = styled.div`
    display: flex;
    @media (max-width: 480px) {
        flex-direction: column;
        width: 100%;
    };
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
    };
`
export const Link = styled.a`
    text-decoration: none;
    :hover{
            animation: ${increasesSizeLink} 0.3s 0s both;
            @media (max-width: 480px) {
                animation: none;
            };
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
    };
    
`

export const Title = styled.div`
    margin: 23px auto 0 29px;
    font-weight: bold;
    @media (max-width: 480px) {
        width: 100%;
        margin: 3% 0 0 0;
        text-align: end;
    };
`
export const Photo = styled.img`
    position: absolute;
    width: 564px;
    height: 621px;
    opacity: 0.6;
    @media (max-width: 480px) {
        position: relative;
        width: 100%;
        height: fit-content;
    };
`
const increasesSize = keyframes`
    0% {
        width: 49px;
    };
    50% {
        width: 59px;
    };
    100% {
        width: 69px;
    };
`
export const SocialNetworksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 53px auto 0;
    z-index: 1;
    @media (max-width: 480px) {
        position: absolute;
        margin-top: 25%;
    };
`
export const SocialNetwrokIcon = styled.img`
    margin: 16%;
    width: 39px;
    :hover{
            animation: ${increasesSize} 0.3s 0s both;
            @media (max-width: 480px) {
                animation: none;
            };
        };
`

export const WrapperSkills = styled.div`
    width: 1140px;
    background-color: #1b818c;
    margin-top: 12px;
    padding-bottom: 9px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    @media (max-width: 480px) {
        width: 100%;
    };
`
export const PhotoBottom = styled.img`
    position: absolute;
    align-self: flex-end;
    opacity: 0.6;
    @media (max-width: 480px) {
        display: none;
    };
`
export const SkillsContent = styled.div`
    margin: 69px 0 0 79px;
    display: flex;
    @media (max-width: 480px) {
        flex-direction: column;
    };
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
    };
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
    };
    @media (max-width: 480px) {
        margin: 0 !important;
        align-self: center;
        width: 96%;
    };
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
    };
    ${EducationItem}:nth-child(2){
        background-color: #025e73;
        margin-left: 12px;
        margin-right: 12px;
    };
    ${EducationItem}:nth-child(3){
        background-color: #1b818c;
        margin-right: 12px;
    };
    @media (max-width: 480px) {
        flex-direction: column;
        width: 100%;
    };
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
    @media (max-width: 480px) {
        flex-direction: column;
    };
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
    @media (max-width: 480px) {
        width: 100%;
    };
`
export const PhotoProject = styled.img`
    width: 499px;
    height: 303px;
    margin-top: auto;
    margin-bottom: auto;
    @media (max-width: 480px) {
        width: 100%;
    };
`
export const ProjectContent = styled.div`
    width: 420px;
    color: #ffffff;
    margin-top: 3%;
    margin-bottom: 3%;
    @media (max-width: 480px) {
        width: 100%;
    };
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
    @media (max-width: 480px) {
        width: 100%;
    };
`
export const ImageEmail = styled.img`
    width: 193px;
    height: 193px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 66px;
    @media (max-width: 480px) {
        margin-left: auto;
        margin-right: auto;
    };
`
export const ContactContent = styled.div`
    margin-top: 2%;
    width: 563px;
    color: #ffffff;
    display: flex;
    div{
        width: 430px;
        text-align: justify;
        @media (max-width: 480px) {
            width: 100%;
            flex-direction: column;
        };
    };
    @media (max-width: 480px) {
        width: 100%;
        flex-direction: column;
    };
`
export const SocialNetworksContactWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    a{
        margin: 2%;
    };
`

export const SocialNetwrokContactIcon = styled.img`
    width: 39px;
        :hover{
            animation: ${increasesSize} 0.3s 0s both;
            @media (max-width: 480px) {
                animation: none;
            };
        };
        
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
    };
    @media (max-width: 480px) {
        width: 100%;
    }

`
const increasesSizeButton = keyframes`
    0% {
        font-size: 16pt;
    }
    50% {
        font-size: 19pt;
    }
    100% {
        font-size: 21pt;
    }
`
export const Button = styled.a`
    background-color: #ffffff;
    font-size: 16pt;
    border: 1px solid #0A0A0A;
    border-radius: 5px;
    padding: 3px;
    :hover{
            animation: ${increasesSizeButton} 0.3s 0s both;
            @media (max-width: 480px) {
                animation: none;
            };
    };
    :link{
        text-decoration: none;
        color: #0A0A0A;
    };
    :visited {
        text-decoration: none;
        color: #0A0A0A;
    };
    a:active {
        text-decoration: none;
        color: #0A0A0A;
    };
`