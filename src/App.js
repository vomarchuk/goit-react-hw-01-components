import 'App.css';
import Profile from 'components/Profile/Profile';
import user from './components/Profile/user.json';

function App() {
  return (
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}

export default App;
