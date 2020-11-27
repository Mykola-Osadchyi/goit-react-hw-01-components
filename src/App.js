import Container from './components/Container/Container';
import Section from './components/Section/Section';
import UserProfile from './components/UserProfile/UserProfile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './components/UserProfile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <Container>
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
        <Statistics statTitle="Upload stats" items={statisticalData} />
      </Section>
      <Section title="Задание 3 - Список друзей">
        <FriendList userFriends={friends} />
      </Section>
      <Section title="Задание 4 - История транзакций">
        <TransactionHistory userTransactions={transactions} />
      </Section>
    </Container>
  );
}
