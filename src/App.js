import 'App.css';
import Profile from './components/Profile/Profile';
import user from './data/user.json';

import Statistics from './components/Statistics/StatisticsList';
import dataStatistic from './data/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

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

      <Statistics title="Upload stats" stats={dataStatistic} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
