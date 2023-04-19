import './App.css';
import Profile from './components/Profile';
import Avartar from './components/Avartar';

function AppProfile() {
	return (
		<>
			<Avartar image='https://images.unsplash.com/photo-1581088244515-64dc2471f75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80' isNew={ true } />
			<Profile 
				image='https://images.unsplash.com/photo-1581088244515-64dc2471f75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80'
				name='James Kim'
				title='프론트엔드 개발자'
				isNew={true}
			/>
			<Profile 
				image='https://images.unsplash.com/photo-1681752521841-e48970c7a7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
				name='Bab Jo'
				title='백엔드 개발자'
			/>
			<Profile 
				image='https://plus.unsplash.com/premium_photo-1673254850380-ff70514979fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
				name='Cristina'
				title='디자이너'
			/>
		</>
	);
}

export default AppProfile;
