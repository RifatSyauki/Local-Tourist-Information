import React from 'react';

const Home = () => {
	return (
		<div className="w-full h-screen bg-[url('./assets/volcano-landscape-sunrise.webp')] bg-no-repeat flex items-center sticky bg-cover bg-center text-white">
			<div className="h-1/4 w-1/2 bg-slate-200 ml-10 bg-opacity-30 rounded-lg p-5">
				<h1 className="text-5xl my-2">Informasi Wisata Lokal</h1>
				<p className="text-base">Platform Informasi Wisata Lokal yang terbaik, terlengkap, juga terdekat.</p>
				<p className="text-base">Untuk wisata pribadi, keluarga, sampai teman-teman</p>
			</div>
		</div>
	)
}

export default Home