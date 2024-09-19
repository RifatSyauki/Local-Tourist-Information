import React, { useState, useEffect } from 'react';


const Header = () => {
	// State untuk mengontrol apakah header menjadi fixed
  const [isFixed, setIsFixed] = useState(false);

  // Fungsi untuk mengupdate posisi header ketika pengguna menggulir
  const handleScroll = () => {
    if (window.scrollY > 72) { // Mengatur jarak scroll minimal sebelum header menjadi fixed
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScroll);

    // Hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

	return (
		<header className={`${isFixed ? 'fixed top-0 left-0 w-full shadow-lg z-50' : 'static'} min-h-16 w-full bg-[#0f7000] text-white flex items-center sticky transition-all duration-300`}>
			<div className="mx-10 justify-between w-full flex">
				<div className="">
					<h1 className="text-2xl">Informasi Wisata Lokal</h1>
				</div>
				<div className="">
					<a className="mx-5" href="/">Home</a>
					<a className="mx-5" href="/category">Category</a>
					<a className="mx-5" href="/map">Map</a>
				</div>
			</div>
		</header>
	)
}

export default Header