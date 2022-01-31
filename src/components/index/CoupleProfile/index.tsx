import React from 'react'

const CoupleProfile = (): JSX.Element => {
  return (
    <div className="couple-profile">
      <div className="illustration">
        <div className="flower-top">
          <img src={'/static/images/flower-top.png'} />
        </div>
      </div>
      <h1 className="title">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</h1>
      <h1 className="title">Assalamu'alaikum Warahmatullahi Wabarakatuh</h1>
      <p>
        Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
        menyelenggarakan acara pernikahan putra-putri kami
      </p>
      <div className="content">
        <div className="item">
          <div className="circle">
            <img src={`static/images/dita-profil.JPG`} />
          </div>
          <h2 className="name">Anindita Ayu Pratiwi, S.Kom, M.MSI</h2>
          <h4 className="description">
            <span>
              {
                'Putri pertama dari Bapak Bambang Madyo Sudarno & Ibu Dwi Endah Andayani'
              }
            </span>
          </h4>
        </div>
        <div className="item">
          <h1 className="and">{'&'}</h1>
        </div>
        <div className="item">
          <div className="circle">
            <img src={`/static/images/eka-profil.JPG`} />
          </div>
          <h2 className="name">Kretawiweka Nuraga Sani, S.Kom, M.TI</h2>
          <h4 className="description">
            <span>
              {
                'Putra pertama dari Bapak Saiful Zuhri & Ibu Eny Triarnani Yuli Robi’ah'
              }
            </span>
          </h4>
        </div>
      </div>
      <div className="flower-bottom">
        <img src={'/static/images/flower-bottom.png'} />
      </div>
    </div>
  )
}

export default CoupleProfile
