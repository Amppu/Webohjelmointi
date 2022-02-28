import React from 'react';

export default function Maincontent(props) {
  return <div className="mainContent">
            <div className="mainNews">
                <div className="mainHeadline"><b>Applen uutuus yllättää</b><br></br>
                <img src="https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_960_720.jpg"></img>
                <div className="HSSeuraa">HS seuraa livenä</div>
                <div className="kuvateksti">Applen uutuudesta tihkuu hiljalleen lisätietoa. Muun muassa puheominaisuuden poistuminen varmistunut.</div>
                
                </div>
                
                
            </div>
            <div className="sideBar">
            <div className="luetuimmat">Luetuimmat 24H</div>
            {        
                props.sideBarList.map(item =>{
                return <div className='sideNumber' key={item}> {item.number}
                <div className='sideBarNewsBox' key={item}> {item.news} </div>
                </div>
})}

            </div>
  </div>;
}
