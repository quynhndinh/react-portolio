import React from 'react';
import './Footer.css';
import footerImg from '../../image/quynhdinhlogo.png';
import githubImg from '../../image/github.png';
import linkedin from '../../image/linkinin.png';
function Footer() {
    return (
        <div className='footer d__flex align__items__center justify__content__space__between pz-10' style={{"padding":"10px 20px", "zIndex":"100"}}>
            <div className='quynhndinhlogo'>
                <a href=''>
                    <img src={footerImg} alt='' className='footer__img' />
                </a>
                <a href='https://github.com/quynhndinh' target='_blank'>
                    <img src={githubImg} alt='' className='githubimg pointer' />
                </a>
                <a href='https://www.linkedin.com/in/quynh-dinh-711989118/' target='_blank'>
                    <img src={linkedin} alt='' className='linkedin pointer' />
                </a>
            </div>
            
            <span className='copyright' style={{color:"#c6c9d8", "fontSize":"14px", "opacity": "0.75"}}>Copyright @ 2021 programmer Quynh Dinh. All Rights Reserved.</span>
        </div>
    )
}

export default Footer
