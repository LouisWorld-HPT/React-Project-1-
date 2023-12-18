import React from 'react'
import { StyledLineContainer } from './styles/HomeCOne.style'
export default function HomeComponentOne() {
  return (
    <StyledLineContainer>
        <div className="content_div_gallery">
            <div className="content_div_dark"></div>
            <div className="content_div_gallery_navi">
                <button className="gallery_buttons" id="gallery_bid_1"></button>
                <button className="gallery_buttons" id="gallery_bid_2"></button>
                <button className="gallery_buttons" id="gallery_bid_3"></button>
            </div>
        </div>
    </StyledLineContainer>
  )
}
