import Container from 'utils/Container';
import {
  Content,
  ContentDescription,
  DescriptionWrapper,
  Img,
  ImgLeft,
  Item,
  List,
  Number,
  Sidebar,
  Subtitle,
  Title,
} from './Description.styled';

import calendarMobile1x from 'images/others/mobile/feature-calendar1x.png';
import calendarMobile2x from 'images/others/mobile/feature-calendar2x.png';
import calendarMobile3x from 'images/others/mobile/feature-calendar3x.png';
import sidebarMobile1x from 'images/others/mobile/feature-sidebar1x.png';
import sidebarMobile2x from 'images/others/mobile/feature-sidebar2x.png';
import sidebarMobile3x from 'images/others/mobile/feature-sidebar3x.png';
import allInMobile1x from 'images/others/mobile/feature-all-in1x.png';
import allInMobile2x from 'images/others/mobile/feature-all-in2x.png';
import allInMobile3x from 'images/others/mobile/feature-all-in3x.png';

import calendarTablet1x from 'images/others/tablet/feature-calendar1x.png';
import calendarTablet2x from 'images/others/tablet/feature-calendar2x.png';
import calendarTablet3x from 'images/others/tablet/feature-calendar3x.png';
import sidebarTablet1x from 'images/others/tablet/feature-sidebar1x.png';
import sidebarTablet2x from 'images/others/tablet/feature-sidebar2x.png';
import sidebarTablet3x from 'images/others/tablet/feature-sidebar3x.png';
import allInTablet1x from 'images/others/tablet/feature-all-in1x.png';
import allInTablet2x from 'images/others/tablet/feature-all-in2x.png';
import allInTablet3x from 'images/others/tablet/feature-all-in3x.png';

import calendarDesktop1x from 'images/others/desktop/feature-calendar1x.png';
import calendarDesktop2x from 'images/others/desktop/feature-calendar2x.png';
import calendarDesktop3x from 'images/others/desktop/feature-calendar3x.png';
import sidebarDesktop1x from 'images/others/desktop/feature-sidebar1x.png';
import sidebarDesktop2x from 'images/others/desktop/feature-sidebar2x.png';
import sidebarDesktop3x from 'images/others/desktop/feature-sidebar3x.png';
import allInDesktop1x from 'images/others/desktop/feature-all-in1x.png';
import allInDesktop2x from 'images/others/desktop/feature-all-in2x.png';
import allInDesktop3x from 'images/others/desktop/feature-all-in3x.png';

export const Description = () => {
  return (
    <section>
      <Container>
        <List>
          <Item>
            <Content>
              <DescriptionWrapper>
                <Number>1.</Number>
                <Title>Calendar</Title>
                <Subtitle>View</Subtitle>
                <ContentDescription>
                  GooseTrack's Calendar view provides a comprehensive overview
                  of your schedule, displaying all your tasks, events, and
                  appointments in a visually appealing and intuitive layout.
                </ContentDescription>
              </DescriptionWrapper>
              <Img>
                <source
                  media="(max-width: 767px)"
                  srcSet={`${calendarMobile1x} 1x, ${calendarMobile2x} 2x, ${calendarMobile3x} 3x`}
                />
                <source
                  media="(min-width: 768px) and (max-width: 1439px)"
                  srcSet={`${calendarTablet1x} 1x, ${calendarTablet2x} 2x, ${calendarTablet3x} 3x`}
                />
                <source
                  media="(min-width: 1440px)"
                  srcSet={`${calendarDesktop1x} 1x, ${calendarDesktop2x} 2x, ${calendarDesktop3x} 3x`}
                />
                <img src={calendarMobile1x} alt="Calendar" />
              </Img>
            </Content>
          </Item>

          <Item>
            <Content>
              <Sidebar>
                <Number>2.</Number>
                <Subtitle>Sidebar</Subtitle>
                <ContentDescription>
                  GooseTrack offers easy access to your account settings,
                  calendar, and filters. The "My Account" section allows you to
                  manage your profile information and preferences, while the
                  calendar provides a quick and convenient way to view your
                  upcoming events and tasks.
                </ContentDescription>
              </Sidebar>
              <ImgLeft>
                <source
                  media="(max-width: 767px)"
                  srcSet={`${sidebarMobile1x} 1x, ${sidebarMobile2x} 2x, ${sidebarMobile3x} 3x`}
                />
                <source
                  media="(min-width: 768px) and (max-width: 1439px)"
                  srcSet={`${sidebarTablet1x} 1x, ${sidebarTablet2x} 2x, ${sidebarTablet3x} 3x`}
                />
                <source
                  media="(min-width: 1440px)"
                  srcSet={`${sidebarDesktop1x} 1x, ${sidebarDesktop2x} 2x, ${sidebarDesktop3x} 3x`}
                />
                <img src={sidebarMobile1x} alt="Sidebar" />
              </ImgLeft>
            </Content>
          </Item>

          <Item>
            <Content>
              <DescriptionWrapper>
                <Number>3.</Number>
                <Title>All in</Title>
                <Subtitle>One</Subtitle>
                <ContentDescription>
                  GooseTrack is an all-in-one productivity tool that helps you
                  stay on top of your tasks, events, and deadlines. Say goodbye
                  to scattered to-do lists and hello to streamlined productivity
                  with GooseTrack.
                </ContentDescription>
              </DescriptionWrapper>
              <Img>
                <source
                  media="(max-width: 767px)"
                  srcSet={`${allInMobile1x} 1x, ${allInMobile2x} 2x, ${allInMobile3x} 3x`}
                />
                <source
                  media="(min-width: 768px) and (max-width: 1439px)"
                  srcSet={`${allInTablet1x} 1x, ${allInTablet2x} 2x, ${allInTablet3x} 3x`}
                />
                <source
                  media="(min-width: 1440px)"
                  srcSet={`${allInDesktop1x} 1x, ${allInDesktop2x} 2x, ${allInDesktop3x} 3x`}
                />
                <img src={allInMobile1x} alt="All in" />
              </Img>
            </Content>
          </Item>
        </List>
      </Container>
    </section>
  );
};
