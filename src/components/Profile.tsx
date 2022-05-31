import { useState } from 'react'
import hook from '../assets/hook.png'

export const Profile: React.FC = () => {
  const [showProfile, setShowProfile] = useState(true)

  const changeActive = () => {
    setShowProfile(!showProfile)
  }

  return (
    <div className="fish_profile">
      <div className="fish_profile_header">
        <img src={ hook } alt='fish on the hook' />
        <div className='fish_profile_header_div'>
          <h1 className="fish_name">Pagar</h1>
          <h1 className="fish_name_latin">Pagrus pagrus</h1>
        </div>
      </div>
      <div className="fish_profile_buttons">
        <button onClick={changeActive} type="button" className="regulation_btn btn">Regulacije</button>
        <button onClick={changeActive} type="button" className="profile_btn btn" autoFocus>Profil</button>
      </div>
      {showProfile
        ? <div className="fish_profile_information">
          <h2 className="characterisics">Karakteristike</h2>
          <h2 className="season_info"><span>Sezona:</span> 6 Srpanj - 30 Rujan</h2>
          <p className="food_info">
          <span>Opis:</span> Pripada porodici ljuskavki (Sparidae). Naraste do 75 cm duljine i 8 kg težine. Tijelo mu je ovalno, bočno stisnuto sa jakom glavom i svojstvenom manjom grbom između očiju. Ljuske su krupne i prekrivaju cijelo tijelo. S leđne strane je ružičasto-crvene do crveno-žute boje. Razvijena repna peraja koja je rašljasta i sa plavkasto-bijelim završetcima. Mlađi primjerci imaju plavkasti most između očiju.</p>
          <p className="food_info">
          <span>Rasprostranjenost:</span> Tropske i umjerene vode Atlantskog oceana. U zapadnom dijelu živi od New Yorka preko Meksičkog zaljeva i Kariba do Argentine, a u istočnom od juga Britanskog otočja sve do južnog vrha Afrike. U Mediteranu je učestaliji u zapadnim dijelovima. U Jadranu živi duž cijele obale na tvrdim dnima, do 300 m dubine. Rado se okuplja oko podvodnih hridi ili potonulih objekata.
          </p>
          <p className="food_info">
          <span>Biologija:</span> Mrijesti se krajem ljeta i početkom jeseni. Proždrljiv grabežljivac koji se hrani rakovima, ribama, mekušcima. Pripada hermafroditskim vrstama - protoginični hermafrodit. Spolnu zrelost dosegne s otprilike 3 godine, odnosno oko 24 cm duljine, najprije kao ženka, onda kao mužjak.
          Važnost i način upotrebe: ukusno i cijenjeno meso.
          </p>
        </div>
        : <div className="profile_regulation">
          <div className="season_banner">
            <h2>OTVORENA SEZONA</h2>
            <h2>6/7/22 - 30/9/22</h2>
          </div>
          <div className="regulation_boxes">
            <div className="box">
              <p>Limit</p>
              <p>18 CM</p>
            </div>
            <div className="box">
              <p>Min size</p>
              <p>13 CM</p>
            </div>
            <div className="box">
              <p>Max size</p>
              <p>60 CM</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
