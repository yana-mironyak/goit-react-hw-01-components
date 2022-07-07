import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Friend } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import user from "./Profile/user.json";
import data from "./Statistics/data.json";
import friends from "./FriendList/friends.json";
import transactions from "./TransactionHistory/transactions.json";

export const App = () => {
  return (
    <>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friend friends={friends} />
      <TransactionHistory items={transactions} />
      </>
  )
};
