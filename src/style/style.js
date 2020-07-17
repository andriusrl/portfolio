import styled from 'styled-components'

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
      justify-content: right;
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
    width: 369px;
    align-self: center;
    margin-top: auto;
    margin-bottom: auto;
`
export const WrapperBioContainer = styled.div`
    display: flex;
`

export const Menu = styled.div`
    position: absolute;
    margin: 23px 53px 0 0;
    color: #ffffff;
    z-index: 1;

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
export const SocialNetworksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 53px auto 0;
    z-index: 1;
`
export const SocialNetwrokIcon = styled.img`
    margin: 16%;
    width: 39px;
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
    align-self: end;
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