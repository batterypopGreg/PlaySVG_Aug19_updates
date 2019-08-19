import React from 'react';
import { Admin, Resource } from 'react-admin';
import authProvider from './authProvider'
import jsonServerProvider from 'ra-data-json-server'
import './App.css';
import { MatchList, MatchEdit, MatchCreate } from './matches'
import { ReactionList, ReactionEdit, ReactionCreate } from './reactions'
import { backendUrl } from './config'

const dataProvider = jsonServerProvider(backendUrl)

const App: React.FC = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="matches" list={MatchList} edit={MatchEdit} create={MatchCreate} />
    <Resource name="reactions" list={ReactionList} edit={ReactionEdit} create={ReactionCreate} />
  </Admin>
)

export default App;
