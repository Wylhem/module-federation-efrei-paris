import React from 'react';
import Avatar from '../../shared/src/atom/avatar/avatar.atom';
import AvatarGroup from '../../shared/src/molecule/avatar_group/avatar_group.molecule';

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>

    <AvatarGroup>
      <Avatar src="https://i.pravatar.cc/150?img=1" />
      <AvatarGroup.Container>
        <AvatarGroup.Name>Mon Nom</AvatarGroup.Name>
        <AvatarGroup.Subtitle>Mon Subtitle</AvatarGroup.Subtitle>
      </AvatarGroup.Container>
    </AvatarGroup>
  </div>
);

export default App;
