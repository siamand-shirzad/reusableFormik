import Header from './components/ui/Header';
import MainContent from './components/ui/MainContent';

const App = () => {
	return (
		<div className='w-full flex flex-col h-screen'>
			<Header/>
      <MainContent/>
		</div>
	);
};

export default App;
