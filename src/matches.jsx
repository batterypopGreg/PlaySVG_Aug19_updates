import React, { useState, useEffect } from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, NumberInput,
    TextField, EditButton, DisabledInput, TextInput, ReferenceInput, ReferenceArrayInput, LongTextInput, 
    DateInput, BooleanField, BooleanInput, ArrayInput, SimpleFormIterator, SelectArrayInput,
    CloneButton, TabbedForm, FormTab, SelectInput, DateTimeInput
 } from 'react-admin';
import { backendUrl } from './config'

 const styles = {
    inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
};

export const MatchList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="identifier"/>
            <TextField source="name" label="Title" />
            <TextField source="game_name" label="Game Title" />
            <DateField source="start_time" />
            <DateField source="end_time" />
            <BooleanField source="is_open" />
            <BooleanField source="is_live" />
            <EditButton basePath="/matches" />
            <CloneButton basePath="/matches" />
        </Datagrid>
    </List>
);

const MatchTitle = ({ record }) => {
    return <span>Match {record ? `"${record.name}"` : ''}</span>;
};

export const MatchEdit = (props) => {
    const [status, setStatus] = useState('new')
    const [reactions, setReactions] = useState({})
    useEffect(() => {
        (async () => {
        if (status === 'new') {
            setStatus('loading')
            try {
                const res = await fetch(`${backendUrl}/reactions`)
                const body = await res.json()
                body.forEach(r => {
                    r.id = r._id
                    r.count = 0
                    r.points = 0
                    reactions[r._id] = r
                })
                setReactions(reactions)
                console.warn('reactions', reactions)
                setStatus('done')
            } catch(e) {
                setStatus(e)
            }
        }
    })()
    })

    function parseReaction(r) {
        const match = Object.values(reactions).find(otherReaction => r && r.identifier == otherReaction.identifier)
        console.warn('match', r, match)
        if (match) {
            return match._id
        }
        return null
    }

    return (
    <Edit title={<MatchTitle />} defaultValue={{reactionsIds: []}} {...props}>
        <TabbedForm>
            <FormTab label="general">
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="identifier" />
            <TextInput source="details" />
            <DateTimeInput source="start_time" />
            <DateTimeInput source="end_time" />
            <BooleanInput source="is_open" />
            <BooleanInput source="is_live" />
            <TextInput source="stream_source_url" type="url" />
            <TextInput source="backup_stream_source_url" type="url" />
            <DisabledInput source="viewers" />
            <DisabledInput source="max_viewers" />
            <ArrayInput fullWidth source="modifiers">
                <SimpleFormIterator>
                    <TextInput source="name" />
                    <TextInput source="info" />
                </SimpleFormIterator>
            </ArrayInput>
            </FormTab>
            <FormTab label="game">
            <TextInput source="game_name" />
            <TextInput source="game_type" />
            <TextInput source="game_image_url" />
            <TextInput source="game_platform" />
            <ArrayInput fullWidth source="players">
                <SimpleFormIterator>
                    <TextInput source="avatar" />
                    <BooleanInput source="is_pro" />
                    <NumberInput source="score" />
                    <NumberInput source="score_adjustment" />
                    <NumberInput source="score_multiplier" />
                </SimpleFormIterator>
            </ArrayInput>
            </FormTab>
            <FormTab label="reactions">
            <ReferenceArrayInput
                    label="Reaction"
                    source="reactions"
                    reference="reactions"
                    // format={(v) => { console.warn('formatting', v); return v }}
                    // parse={(v) => {console.warn('parsing', v); return v }}
                    format={(v) => { console.warn('formatting', v && v.map(parseReaction)); return v && v.map(parseReaction) }}
                    parse={(v) => {console.warn('parsing', v, v.map(vId => reactions[vId])); return v.map(vId => reactions[vId]) }}
                >
                <SelectArrayInput optionText="identifier" />
            </ReferenceArrayInput>
            <ArrayInput fullWidth source="reactions">
                <SimpleFormIterator>
                    <TextInput source="identifier" />
                    <NumberInput source="count" />
                    <NumberInput source="points" />
                    <BooleanInput source="is_locked" />
                    <TextInput source="unlock_trigger" />
                    <NumberInput source="time_to_live" />
                    <BooleanInput source="single_use" />
                    <NumberInput source="increment" />
                    <NumberInput source="adjustment" />
                    <NumberInput source="overheat_cooldown_rate" />
                    <NumberInput source="overheat_threshold" />
                    <TextInput source="recipient" />
                    <TextInput source="source.type" />
                    <TextInput source="source.value" />
                    <NumberInput source="pending_points" />
                </SimpleFormIterator>
            </ArrayInput>
            </FormTab>
        </TabbedForm>
    </Edit>
)};

export const MatchCreate = (props) => {
    const defaultVals = {id: Math.random() }
    return (
    <Create title="Create a Match" {...props}>
        <TabbedForm defaultValue={defaultVals}>
            <FormTab label="general">
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="identifier" />
            <TextInput source="details" />
            <DateTimeInput source="start_time" />
            <DateTimeInput source="end_time" />
            <BooleanInput source="is_open" />
            <BooleanInput source="is_live" />
            <TextInput source="stream_source_url" type="url" />
            <TextInput source="backup_stream_source_url" type="url" />
            <DisabledInput source="viewers" />
            <DisabledInput source="max_viewers" />
            <ArrayInput fullWidth source="modifiers">
                <SimpleFormIterator>
                    <TextInput source="name" />
                    <TextInput source="info" />
                </SimpleFormIterator>
            </ArrayInput>
            </FormTab>
            <FormTab label="game">
            <TextInput source="game_name" />
            <TextInput source="game_type" />
            <TextInput source="game_image_url" />
            <TextInput source="game_platform" />
            <ArrayInput fullWidth source="players">
                <SimpleFormIterator>
                    <TextInput source="avatar" />
                    <BooleanInput source="is_pro" />
                    <NumberInput source="score" />
                    <NumberInput source="score_adjustment" />
                    <NumberInput source="score_multiplier" />
                </SimpleFormIterator>
            </ArrayInput>
            </FormTab>
            <FormTab label="reactions">
            <ReferenceArrayInput label="Reactions" source="reactions" reference="reactions">
                <SelectInput optionText="identifier" />
            </ReferenceArrayInput>
            <ArrayInput fullWidth source="reactions">
                <SimpleFormIterator>
                    <TextInput source="identifier" />
                    <NumberInput source="count" />
                    <NumberInput source="points" />
                    <BooleanInput source="is_locked" />
                    <TextInput source="unlock_trigger" />
                    <NumberInput source="time_to_live" />
                    <BooleanInput source="single_use" />
                    <NumberInput source="increment" />
                    <NumberInput source="adjustment" />
                    <NumberInput source="overheat_cooldown_rate" />
                    <NumberInput source="overheat_threshold" />
                    <TextInput source="recipient" />
                    <TextInput source="source.type" />
                    <TextInput source="source.value" />
                    <NumberInput source="pending_points" />
                </SimpleFormIterator>
            </ArrayInput>
            </FormTab>
        </TabbedForm>
    </Create>
)};