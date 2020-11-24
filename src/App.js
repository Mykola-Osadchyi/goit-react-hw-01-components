import UserProfile from './components/social-profile/UserProfile';
import Section from './components/Section';
import user from './components/social-profile/user.json';

export default function App() {
  return (
    <div>
      <Section title="Задание 1 - Профиль социальной сети">
        <UserProfile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          // userStats={user.stats}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Section>

      <Section title="Задание 2 - Секция статистики"></Section>
      <Section title="Задание 3 - Список друзей"></Section>
      <Section title="Задание 4 - История транзакций"></Section>
    </div>
  );
}