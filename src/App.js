import 'App.css';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statidtics from './components/Statistics/StatidticsList';
import dataStatistic from './components/Statistics/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statidtics title="Upload stats" stats={dataStatistic} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
