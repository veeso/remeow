import * as React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";
import SearchResult from "../lib/model/search";
import Logo from "./Topbar/Logo";
import MetamaskConnect from "./MetamaskConnect";
import Search from "./Search";
import Profile from "../lib/model/profile";
import { Link } from "react-router-dom";
import Avatar from "./Topbar/Avatar";

const Header = styled.header`
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #ccc;
  color: #202020;
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  min-height: 8vh;
  width: 100%;
`;

const LogoSection = styled.div`
  padding: 0 24px;
  text-align: left;
`;

const Title = styled.h1`
  color: #444;
  display: inline-block;
  font-size: 1.2em;
  font-weight: 100;
  margin-left: 24px;
`;

const Profile = styled.div`
  color: #444;
  display: inline-block;
  font-size: 1em;
  font-weight: 100;
  margin-right: 24px;
`;

const ProfileLink = styled(Link)`
  color: #444;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const SearchSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: end;
  jusify-self: end;
  gap: 12px;
  text-align: right;
`;

const WalletSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding: 0 24px;
  text-align: right;
`;

interface Props {
  search: (subject: string) => Promise<Array<SearchResult>>;
  profile?: Profile;
}

const Topbar = (props: Props) => {
  return (
    <Header>
      <LogoSection>
        <Logo />
        <Title>Meow</Title>
      </LogoSection>

      <SearchSection hidden={props.profile === undefined}>
        <Search onSearch={props.search} />
      </SearchSection>
      <WalletSection className="wallet-connect">
        <MetamaskConnect />
      </WalletSection>
      <Profile hidden={props.profile === undefined}>
        <Avatar uri={props.profile?.avatarURI} />
        <ProfileLink to={`/profile/${props.profile?.id}`}>
          {props.profile?.username}
        </ProfileLink>
      </Profile>
    </Header>
  );
};

export default hot(Topbar);