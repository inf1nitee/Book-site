import react from "react"
import Header from "./components/Header"
import './index.css';
import rasa from "./pictures/anatomi_rasa.png"
import hata from "./pictures/hati_hati.png"
import berjalan from "./pictures/berjalan.png"
import laut from "./pictures/laut.png"
import sedang from "./pictures/sedang.png"
import perempuan from "./pictures/perempuan.png"
import mohammad from "./pictures/mohammad.png"
import najwa from "./pictures/najwa.png"
import guy from "./pictures/guy.png"
import brooklyn from "./pictures/brooklyn.png"
import first from "./pictures/1st.png"
import second from "./pictures/2nd.png"
import  third from "./pictures/3rd.png"
import Ras from "./pictures/totochan.jpg"
import {FaBsArrowRightShort } from 'react-icons/fa';


const App = () => {
  return(
    <>
    <div className="body">
      <div class="fixed-header">
        <div class="container">
            <nav className="nav">
                <a className="menu" href="#">Beranda</a>
                <a className="menu" href="#">Koleksi</a>
                <a className="menu" href="#">Syarat dan Ketantuan</a>
                <a className="menu" href="#">Kantak</a>
                <button className="home">Masuk</button>
            </nav>
        </div>
    </div>
    <div className="center">
      <p className="small_word">Pojok Baca Probolingo</p>
      <p className="pinjam_buku">Pinjam Buku Secara Gratis untuk Masyaratak</p>
    </div>  
    <div className="buttons_center">
       <button className="search_button">Cari Judul Buku <i class="fas fa-donate"></i> </button>
       <button className="support_button">Donasi dengan Kami </button>
    </div>
    <div className="books">
      <div className="center_book">
        <p className="books_name">Toto-chan : The Little Girl At The Window</p>
        <p className="autors_name">Testuko Kuroyanagi</p>
        <img className="picture_totochan" src={Ras}></img>
        <button className="button_right"></button>
        <button className="button_left"></button>
      </div>
      <div className="anatomi_rasa">
         <p className="books_name">Anatomi Rasa</p>
         <p className="autors_name">Ayu Utami</p>
         <img className="right_firstbook" src={rasa}></img>
      </div>
      <div className="hati_hati">
         <p className="books_name">Hati-Hati dengan Sampah</p>
         <p className="autors_name">Ukjae Lee</p>
         <img className="right_secondbook" src={hata}></img>
      </div>
      <div className="berjalan">
         <p className="books_name">Berjalan di Atas Cahaya</p>
         <p className="autors_name">Hanum Salsabiela Rais</p>
         <img className="right_thirdbook" src={berjalan}></img>
      </div>
      <div className="laut">
         <p className="books_name">Berjalan di Atas Cahaya</p>
         <p className="autors_name">Hanum Salsabiela Rais</p>
         <img className="left_firsbook" src={laut}></img>
      </div>
      <div className="sedang">
         <p className="books_name">Berjalan di Atas Cahaya</p>
         <p className="autors_name">Hanum Salsabiela Rais</p>
         <img className="left_secondbook" src={sedang}></img>
      </div>
      <div className="perempuan">
         <p className="books_name">Berjalan di Atas Cahaya</p>
         <p className="autors_name">Hanum Salsabiela Rais</p>
         <img className="left_thirdbook" src={perempuan}></img>
      </div>
    </div>
        <h1 className="why">Kenapa Kita Harus Membaca Buku?</h1>
        <div className="firstcard_writers">
           <p className="writers_phrase">“Aku rela dipenjara asalkan bersama buku, karena dengan buku aku bebas”</p>
           <p className="writers_name">Mohammad Hatta </p>
           <img className="writers_picture" src={mohammad}></img>
        </div>
        <div className="secondcard_writers">
           <p className="writers_phrase">“Cuma perlu satu buku untuk jatuh cinta pada membaca, Cari Buku itu! Mari jatuh cinta!</p>
           <p className="writers_name">Najwa Shihab</p>
           <img className="writers_picture" src={najwa}></img>
        </div>
        <div className="comments">
          <h1 className="entrance">Apa Kata Mereka?</h1>

          <div className="first_comm">
          <p className="comment">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. 
          Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. 
          Exercitation veniam consequat sunt nostrud amet.
          </p>
          <p className="name_of_commentators">Guy Hawkins</p>
          <img className="picture1" src={guy}></img>
          </div>
          <div className="second_comm">
          <p className="comment">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. 
          Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. 
          Exercitation veniam consequat sunt nostrud amet.
          </p>
          <p className="name_of_commentators">Brooklyn Simmons</p>
          <img className="picture2" src={brooklyn}></img>
          </div>
        </div>
        <div className="new_avtivities">
        <h1 className="head">Kegiatan Pojok Baca Probolinggo</h1>
         <div className="activities_picture">
           <img src={first}></img>
           <img src={second}></img>
           <img src={third}></img>
         </div>
        </div>
        <div className="contact">
         <h1>Ingin Membantu Meningkatkan Literasi Anak-Anak Sekitar Kita?</h1>
         <p>Percayakan melalui kegiatan kita</p>
         <button className="support_contact">Donasi dengan Kami </button>
         <p className="atau">Atau</p>
         <button className="phone">Hubungi Kami</button>
        </div>
    <div class="fixed-footer">
        <div class="footer"> &copy; Pojok Baca Probolinggo 2022</div>        
    </div>
    </div>
    </>
  )
}

export default App