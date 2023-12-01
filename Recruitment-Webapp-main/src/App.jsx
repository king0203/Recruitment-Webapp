import React from 'react';

import Navbar from './components/NavbarDiv/Navbar';
import Search from './components/SearchDiv/Search';
import Jobs from './components/JobDiv/Jobs';
import Value from './components/ValueDiv/Value';
import Footer from './components/FooterDiv/Footer';

const App = () => {
	return (
		<div className="w-[85%] m-auto bg-greyIsh">
			<Navbar />
			<Search />
			<Jobs />
			<Value />
			<Footer />
		</div>
	);
};

export default App;
