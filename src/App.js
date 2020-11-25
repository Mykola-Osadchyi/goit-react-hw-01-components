import Section from './components/Section';
import UserProfile from './components/social-profile/UserProfile';
import Statistics from './components/statistics/Statistics'
import FriendList from './components/friend-list/FriendList';
import TransactionHistory from './components/transaction-history/TransactionHistory';

import user from './components/social-profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friend-list/friends.json';
import transactions from './components/transaction-history/transactions.json';

export default function App() {
  return (
    <div class="container">
      <Section title="Задание 1 - Профиль социальной сети">
        <UserProfile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title="Задание 2 - Секция статистики">
        <Statistics
          statTitle="Upload stats"
          items={statisticalData}
        />
      </Section>
      <Section title="Задание 3 - Список друзей">
        <FriendList
          userFriends={friends}
        />
      </Section>
      <Section title="Задание 4 - История транзакций">
        <TransactionHistory
          userTransactions={transactions}
        />
      </Section>
    </div>
  );
}