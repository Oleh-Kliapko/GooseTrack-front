import { useContext } from 'react';

import { Container, Text } from './Notification.styled';
import { NotificationContext } from 'helpers/notification';

export const Notification = () => {
  const isVisible = useContext(NotificationContext).isVisible;
  const text = useContext(NotificationContext).text;
  const type = useContext(NotificationContext).type;

  if (isVisible) {
    return (
      <Container type={type}>
        <Text type={type}>{text}</Text>
      </Container>
    );
  }
};
