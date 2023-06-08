import { CancelBtn, IconPag, PeriodBtn } from './MainButton.styled';
import {
  ListLink,
  AuthLink,
  MainBtn,
  SecondBtn,
  WrapperSecondBtn,
  AddTaskBtn,
} from '/MainButton.styled';
import { CgLogIn } from 'react-icons/cg';

export const MainButton = () => {
  return (
    <ListLink>
      <li>
        <AuthLink color="blue">Sign up</AuthLink>
      </li>
      <li>
        <AuthLink>Sign up</AuthLink>
      </li>
      <li>
        <AuthLink color="blue" colorbtn="white">
          Log in
          <CgLogIn style={{ marginLeft: 6, width: 18, height: 18 }} />
        </AuthLink>
      </li>
      <li>
        <MainBtn>
          Log out
          <CgLogIn style={{ marginLeft: 6, width: 18, height: 18 }} />
        </MainBtn>
      </li>
      <li>
        <MainBtn style={{ width: '100%' }}>
          Log in
          <CgLogIn style={{ marginLeft: 11, width: 18, height: 18 }} />
        </MainBtn>
      </li>
      <li>
        <MainBtn style={{ width: '100%' }}>
          Sign up
          <CgLogIn style={{ marginLeft: 11, width: 18, height: 18 }} />
        </MainBtn>
      </li>
      <li>
        <MainBtn padding="50">Save changes</MainBtn>
      </li>
      <li>
        <MainBtn style={{ width: '100%' }}>Save</MainBtn>
      </li>
      <li>
        <SecondBtn radius="10">Feedback</SecondBtn>
      </li>
      <li>
        <WrapperSecondBtn>
          <SecondBtn style={{ width: '50%' }}>Edit</SecondBtn>
          <CancelBtn btn="cancel" style={{ width: '50%' }}>
            Cancel
          </CancelBtn>
        </WrapperSecondBtn>
      </li>
      <li>
        <WrapperSecondBtn>
          <SecondBtn style={{ width: '50%' }}>
            <CgLogIn style={{ marginLeft: 11, width: 18, height: 18 }} />
            Add
          </SecondBtn>
          <CancelBtn style={{ width: '50%' }}>Cancel</CancelBtn>
        </WrapperSecondBtn>
      </li>
      <li>
        <SecondBtn style={{ width: '100%' }} btn="edit">
          <CgLogIn style={{ marginLeft: 11, width: 16, height: 16 }} />
          Edit
        </SecondBtn>
      </li>
      <li>
        <AddTaskBtn style={{ width: '100%' }}>
          <CgLogIn style={{ marginLeft: 11, width: 24, height: 24 }} />
          Add task
        </AddTaskBtn>
      </li>

      <li>
        <PeriodBtn>
          <IconPag id="left" />
        </PeriodBtn>
        <PeriodBtn id="right">
          <IconPag />
        </PeriodBtn>
      </li>
    </ListLink>
  );
};

export default MainButton;
