import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const Events = () => {
  return (
    <div className="events">
      <h1 className="title">Rangkaian Acara</h1>
      <div className="content">
        <h4 className="day">Minggu</h4>
        <div className="date-month-year flex direction-row">
          <h4 className="date">17</h4>
          <div className="flex direction-column">
            <h4 className="month">Juli</h4>
            <h4 className="year">2022</h4>
          </div>
        </div>
        <div className="description">
          <div className="section">
            <div className="title-section">
              <h3 className="event-title">Akad Pernikahan</h3>
              <div className="time">
                <h4>08:00 - 10:00 WIB</h4>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="title-section">
              <h3 className="event-title">Resepsi Pernikahan</h3>
              <div className="time">
                <h4>11:00 - 13:00 WIB</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="place">
          <h3>Felfest Universitas Indonesia</h3>
          <p>
            Kampus UI, Jl. Prof. DR. Miriam Budiardjo, RW.3, Srengseng Sawah,
            Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
            12640
          </p>
          <button
            onClick={() =>
              window.open('https://g.page/felfest-ui?share', '_blank')
            }
          >
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            <span>Lihat Peta</span>
          </button>
        </div>
        <div className="stream">
          <h3>Live Streaming</h3>
          <iframe
            src="https://www.youtube.com/embed/DivpUBbTcwQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
          <button
            onClick={() =>
              window.open('https://youtu.be/DivpUBbTcwQ', '_blank')
            }
          >
            <FontAwesomeIcon icon={faYoutube} />
            <span>Buka di Aplikasi Youtube</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Events
