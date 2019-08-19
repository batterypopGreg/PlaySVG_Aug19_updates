import React from 'react';
import Typography from '@material-ui/core/Typography'
import { List, Datagrid, Edit, Create, SimpleForm, DateField, NumberInput,
    TextField, EditButton, DisabledInput, SelectInput, TextInput, LongTextInput, 
    DateInput, BooleanField, BooleanInput, ArrayInput, SimpleFormIterator,
    CloneButton, TabbedForm, FormTab
 } from 'react-admin';
 import { withStyles } from '@material-ui/core'

 const styles = {
    inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
};

const SOURCE_TYPES = [
    { id: 'text', name: 'Text' },
    { id: 'image', name: 'Image' }
]

export const ReactionList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="identifier" />
            <TextField source="name"/>
            <TextField source="source.type" />
            <TextField source="source.value" />
            <EditButton basePath="/reactions" />
            <CloneButton basePath="/reactions" />
        </Datagrid>
    </List>
);

const ReactionTitle = ({ record }) => {
    return <span>Reaction {record ? `"${record.name}"` : ''}</span>;
};

const ReactionAside = () => (
    <div style={{ width: 200, margin: '1em' }}>
        <Typography variant="title">Reactions</Typography>
        <Typography variant="body1">
            Reactions are the buttons that users are able to press through the client app.
            <br />
            <br />
            <strong>identifier</strong> globally identifies the reaction across the app.
            <br />
            <strong>name</strong> is mostly for our purposes, to have a human-readable name for the reaction.
            <br />
            <strong>source type</strong> can either be `text` or `image`. "Text" reactions are mainly emoji. "Image" reactions display an image stored at the url.
            <br />
            <strong>source value</strong> is the text of a text reaction or the location of an image reaction.
        </Typography>
    </div>
);

export const ReactionEdit = (props) => (
    <Edit title={<ReactionTitle />} aside={<ReactionAside />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="identifier" />
            <TextInput source="name"/>
            <SelectInput source="source.type" choices={SOURCE_TYPES} />
            <TextInput source="source.value" />
        </SimpleForm>
    </Edit>
);

export const ReactionCreate = (props) => {
    const defaultVals = {id: Math.random() }
    return (
    <Create title="Create a Reaction" {...props}>
        <SimpleForm defaultValue={defaultVals}>
            <DisabledInput source="id" />
            <TextInput source="identifier" />
            <TextInput source="name"/>
            <SelectInput source="source.type" choices={SOURCE_TYPES} />
            <TextInput source="source.value" />
        </SimpleForm>
    </Create>
)};