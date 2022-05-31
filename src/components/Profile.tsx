import { useState } from 'react'

export const Profile: React.FC = () => {
  // * dodat state

  const [showProfile, setShowProfile] = useState(true)

  const changeActive = () => {
    setShowProfile(!showProfile)
  }

  return (
    <div className="fish_profile">
      <div className="fish_profile_header">
        <h1 className="fish_name">Common Pandora</h1>
        <h1 className="fish_name_latin">Pagellus erythinus</h1>
      </div>
      <div className="fish_profile_buttons">
        <button onClick={changeActive} type="button" className="regulation_btn btn">Regulations</button>
        <button onClick={changeActive} type="button" className="profile_btn btn" autoFocus>Profile</button>
      </div>
      {showProfile
        ? <div className="fish_profile_information">
          <h2 className="characterisics">Characterisics</h2>
          <h2 className="season_info">Season: 6 July - 30 September</h2>
          <h2 className="food_heading">Food:</h2>
          <h2 className="food_info">
          The crustaceansans mollusks constituted the predominant food all year round and it wasfound in all length groups. In the present study crustaceans, mollusks polychaetes, foraminifera, sea grasses and sediments increased as the sizeincreased while, echinoderms and fish parts decreased as teh fish increased.
          </h2>
        </div>
        : <div className="profile_regulation">
          <div className="season_banner">
            <h2>OPEN SEASON</h2>
            <h2>6/7/22 - 30/9/22</h2>
          </div>
          <div className="regulation_boxes">
            <div className="box">
              <p>Limit</p>
              <p>NONE</p>
            </div>
            <div className="box">
              <p>Min size</p>
              <p>13 cm</p>
            </div>
            <div className="box">
              <p>Max size</p>
              <p>60 cm</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
