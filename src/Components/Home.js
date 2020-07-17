import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            {/* Bagian 1 */}
            <div class="card bg-dark text-white ">
                <img src="https://3.bp.blogspot.com/-78n9iPoD-w8/Vz7e-rsXD8I/AAAAAAAABvk/h3TtwIJ9DGQdN82eCo-4T6yjzcprBbjEwCLcB/s1600/hand_writing_book_man_7986_1920x1080.jpg" style={{height: "500px"}} class="card-img" alt="..."/>
                <div class="card-img-overlay ">
                    <p class="card-text display-3 my-5">URUSAN LEGAL JADI LEBIH GAMPANG DENGAN HAKITA</p>
                    <Link to ={'/blog'}>
                        <button style= {{background: "rgb(46, 126, 115)"}} class="btn my-2 my-sm-0 text-white" type="submit">Baca Artikel</button>
                    </Link>
                </div>
            </div>
            <br/><br/><br/> 

            {/* Bagian 2 */}
            <div class="d-flex justify-content-around " >
                <div class="media m-7 p-5">
                    <img src="https://hakita-app.web.app/assets/img/user_needs_icon_x2.png" width="50" alt="..."/>
                    <div class="media-body m-3">
                        <h5 class="weight-text: 10px">We Meet People's Needs</h5>
                        Kami sadar bahwa hukum masih dianggap sebagai sesuatu yang menakutkan dan belum terjangkau untuk semua golongan. Inilah mengapa kami ada; untuk melawan stigma dan menjawab segala kebutuhan legal Anda.
                    </div>
                </div>
                <div class="media m-7 p-5">
                    <img src="https://hakita-app.web.app/assets/img/protect_icon_x2.png" width="50" alt="..."/>
                    <div class="media-body m-3">
                        <h5 class="mt-0">We Provide Protection</h5>
                        Dibantu oleh praktisi hukum dengan pengalaman lebih dari 10 tahun, HAKITA memastikan bahwa Anda mendapatkan perlindungan hukum yang sesuai dengan hak Anda sebagai warga negara.
                    </div>
                </div>
                <div class="media m-7 p-5">
                    <img src="https://hakita-app.web.app/assets/img/trust_icon_x2.png" width="50" alt="..."/>
                    <div class="media-body m-3">
                        <h5 class="mt-0">We Are Trustworthy</h5>
                        HAKITA hadir karena kami percaya bahwa hukum adalah hak semua orang. Semua yang kami lakukan di HAKITA selalu selaras dengan misi kami untuk menjadikan hukum sebagai sesuatu yang mudah dimengerti dan dapat diakses oleh semua orang.
                    </div>
                </div>
            </div>
             

            {/* Bagian 3 */}
            <div id="service" class="text-center mt-3 ">
                    <h1>Product and Services</h1>
                    <p>Apapun kebutuhan legal Anda, biar HAKITA yang urus</p>   
                <div class="row d-flex justify-content-center mt-4">
                    <div class="col-3">
                        <img src="https://hakita-app.web.app/assets/img/permission_icon.png" style={{width:"20%"}} class="rounded mx-auto my-3 d-block" alt="..."/>
                            <h5>Otomatis Dokumen</h5>
                            <p>Buat dokumen sudah tidak perlu ribet lagi. Dokumen yang biasa butuh waktu berminggu-minggu sekarang bisa selesai dalam hitungan menit dengan template dari HAKITA.</p>
                            <a href="https://www.hakita.id/produk" class="btn btn-primary">Learn More</a>
                    </div>
                    <div class="col-3">
                        <img src="https://hakita-app.web.app/assets/img/agreement_icon.png" style={{width:"15%"}} class="rounded mx-auto my-3 d-block" alt="..."/>
                            <h5>Sistem Manajemen Dokumen</h5>
                            <p>Kerja lebih efisien dengan HAKITA! Tidak hanya memantau ribuan dokumen yang Anda miliki, teknologi kami juga dapat memberi tahu Anda jika ada dokumen yang membutuhkan perhatian khusus lewat fitur reminder kami.</p>
                            <a href="https://www.hakita.id/produk" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>

            {/* Bagian 4 */}
            <div class="card bg-dark text-white mt-5  ">
                <img src="https://mamikos.com/info/wp-content/uploads/2020/03/shaking-hand.jpg" style={{height: "250px"}} class="card-img" alt="..."/>
                <div class="card-img-overlay text-center ">
                    <p class="card-title display-4">APAKAH ANDA TAHU:</p>
                    <h3 class="card-text display-5">Kalau dari kasus tabrakan, Anda tidak perlu memberi SIM atau KTP kepada orang yang ditabrak</h3>
                </div>
            </div>
               
            
            {/* Bagian 5 */}
            <div class="container mt-5">
                <div class="text-center">
                    <h5>Love Reading, Keep Reading</h5>
                    <p>Punya pertanyaan soal hukum? Temukan jawabannya di blog HAKITA.</p>
                </div>
                <div class="row p-5">
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <mark class="bg-primary text-white">Blog</mark>
                                <h5 class="card-title">Konser Semasa COVID 19, Boleh?</h5>
                                <p class="card-text">6/15/2020, 8:34:06 PM</p>
                                <a href="https://www.hakita.id/blog/konser-semasa-covid-19-boleh/" >Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <mark class="bg-primary text-white">Blog</mark>
                                <h5 class="card-title">Instansi Pemerintah yang Tetap Buka semasa COVID 19</h5>
                                <p class="card-text">6/14/2020, 8:11:02 PM</p>
                                <a href="https://www.hakita.id/blog/instansi-pemerintah-yang-tetap-buka-semasa-covid-19/" >Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <mark class="bg-primary text-white">Blog</mark>
                                <h5 class="card-title">Kegiatan Keagamaan Saat PSBB</h5>
                                <p class="card-text">6/11/2020, 12:55:23 PM</p>
                                <a href="https://www.hakita.id/blog/kegiatan-keagamaan-saat-psbb/" >Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr width="50%"/>

            {/* Bagian 6 */}
            <div class="container mt-5">
                <div class="text-center">
                    <h1>Have a question?</h1>
                <center>
                   <div class="row d-flex justify-content-center mt-5">
                        <div class="col-sm-3">
                            <div class="card">
                                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/message-icon-design-template-ff734aad72da096f0e49f3d693042135_screen.jpg?ts=1581057128" style={{width:"30%"}} class="rounded mx-auto my-3 d-block" alt="..."></img>
                                <div class="card-body">
                                    <a class="text-dark" href="https://accounts.google.com/" >info@hakita.com</a>   
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card">
                                <img src="https://www.vippng.com/png/detail/114-1143835_location-marker-svg-png-icon-free-download-circle.png" style={{width:"10%"}}  class="rounded mx-auto my-3 d-block" alt="..."></img>
                                <div class="card-body">
                                    <a class="text-dark" href="https://www.google.com/search?client=firefox-b-d&q=Jl.+Boulevard+Barat+Raya+No.+27%2CKelapa+Gading+Barat%2CJakarta+Utara" >Jl. Boulevard Barat Raya No. 27, Kelapa Gading Barat, Jakarta Utara</a>   
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
                </div>
            </div>
             

            {/* Bagian 7 */}
                <div id="about" class="row d-flex justify-content-around text-white p-5 mt-5" style={{background: "black", height: "300px"}}>     
                    <div class="col-6 p-5" >
                        <h5 >About us</h5>
                        <p >HAKITA adalah sebuah platform yang menjawab kebutuhan masyarakat Indonesia dalam membuat dan memproses dokumen legal yang aman dan terpercaya. Kami menggunakan teknologi otomasi untuk mempermudah proses pembuatan dokumen.</p>
                    </div>
                    <div id="contact" class="col-6 p-5" >
                        <h5 class="card-title">Contact Us</h5>
                        <a href="https://accounts.google.com/" class="card-text text-white">Mail: info@hakita.com</a>
                        <p class="card-text mb-0"> Alamat: Jl. Boulevard Barat Raya No.27, RW. 9,Kelapa Gading Barat - Jakarta Utara14240</p>
                        <a href="https://www.facebook.com/hakita.id">
                            <img src="https://lh3.googleusercontent.com/proxy/FXuSc4oc9UMqWVOpfFdNFop1VfnfXCNP3n_VuNZ5w43CWngT7FFuGkfrc8KrDvqVuLoTPDZhpavaiQRoNmnZcJjYTrh6mM3W32ev8XS-mObJMRbFkmD5sfWkExjSUUtqMeDsFqMooYreRVe_qudmgPQ" alt="F" style={{width:"6%"}} />
                        </a>
                        <a href="https://www.instagram.com/hakita.id/">
                        <img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-windows-phone-all-you-need-know-9.png" alt="IG" style={{width:"6%"}} />
                        </a>
                    </div>  
                </div>  
                <div class="card-footer" style={{background: "gray", height: "80px"}}>
                    <div class="row d-flex justify-content-start p-3">
                        <div class="col-9">
                            <a href="https://accounts.google.com/" class="card-text text-white p-3">Syarat & Ketentuan</a>
                            <a href="https://accounts.google.com/" class="card-text text-white p-3">Kebijakan Privasi</a>
                            <a href="https://accounts.google.com/" class="card-text text-white p-3">Panduan Pembayaran</a>
                        </div>
                        <div class="col-3">
                            <a href="https://accounts.google.com/" class="card-text text-white p-3">© PT Legalindo Mitra Abadi, 2020</a>
                        </div>
                    </div>
                </div>  
                        
        </div>
    )
}
