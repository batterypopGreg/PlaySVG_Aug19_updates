import React, { useState, useEffect } from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, NumberInput,
    TextField, EditButton, DisabledInput, TextInput,ImageField, ReferenceInput, ReferenceArrayInput, LongTextInput, 
    DateInput, BooleanField, BooleanInput, ArrayInput, SimpleFormIterator, SelectArrayInput,
    CloneButton, TabbedForm, FormTab, SelectInput, DateTimeInput, FormDataConsumer
 } from 'react-admin';
import { backendUrl } from './config'
import { uniqBy } from 'lodash'
import {
    required,
    minLength,
    maxLength,
    minValue,
    maxValue,
    number,
    regex,
    
} from 'react-admin';

 const styles = {
    inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
};

const validateNumber = [number(),maxValue(20)];

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

const PlayerAvatar = ({ record ,props }) => {
     
     return <img class="player-avatar" style={{ borderRadius:STYLE.imgcss.borderRadius}}   src={record.avatar} width="150" height="150"/>
    
}


const STYLE = {
    imgcss : {
      borderRadius: '50%',
    },
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
                    reactions[r.identifier] = r
                })
                setReactions(reactions)
                // console.warn('reactions', reactions)
                setStatus('done')
            } catch(e) {
                setStatus(e)
            }
        }
    })()
    })

    const Preview = (s) => {
        console.log(s.record.avatar);
        
        return <img class="player-avatar"    src={s.record.avatar} width="150" height="150"/>
       
    }

      
    function parseReaction(r) {
        const match = Object.values(reactions).find(otherReaction => r && r.identifier == otherReaction.identifier)
        if (match) {
            return match._id
        }
        return null
    }


    const [{alt, src}, setImg] = useState({
        src: 'placeholder',
        alt: ''
     });

    
    const handleImg = ( record ,e) => {
       // console.log(e.target.value);
       
        if(e.target.value) {
            //record.avatar =  e.target.value
            setImg({
                src: e.target.value,
                alt: e.target.value
            });    
        }   
    }

    

   
    return (
        
    <Edit title={<MatchTitle />} {...props}>
        
        <TabbedForm>
            <FormTab label="general">
            <TextField source="id" />
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
                     
                    <PlayerAvatar source="avatar" />
                    <TextInput source="name" />
                    
                    <BooleanInput source="is_pro" />
                    <NumberInput source="score" />
                    <NumberInput source="score_adjustment" />
                    <NumberInput source="score_multiplier" />
                </SimpleFormIterator>
            </ArrayInput>
            </FormTab>
            <FormTab label="reactions">
            <FormDataConsumer>
                 {({ formData, ...rest }) => {
                     //console.warn('reactions', reactions);
                     // Extremely gnarly logic
                     (formData.reactions || []).forEach(r => {
                         if (r && r.identifier) {
                            reactions[r.identifier] = {...(reactions[r.identifier] || {}), ...r}
                         }
                     })
                     const reactionsById = {}
                     Object.values(reactions).forEach(r => {
                         if (r._id) {
                            reactionsById[r._id] = r
                         }
                     })
                     //console.warn('newReactions', reactions)
                     return (
                    <ReferenceArrayInput
                        label="Reactions (from collection)"
                        source="reactions"
                        reference="reactions"
                        // Format takes full reaction object and retrieves identifier used for lookup
                        format={(v) => (v || []).map( v => {
                            if (v && v.identifier) {
                                const possibleReaction = reactions[v.identifier]
                                //console.warn('formatting', v, v.id || possibleReaction && possibleReaction._id)
    
                                return v.id || possibleReaction && possibleReaction._id || v
                            }
                        })}
                        // Parse takes ids (or whatever) from the controller and somehow puts back the full objects
                        parse={(v) => {
                            //console.warn('parsing', v, v.map(vId => reactions[vId]));
                            return (v || []).map(vId => {
                                // If is object, don't worry about it
                                if (typeof vId === 'object') {
                                    return vId
                                }
                                return reactionsById[vId]
                            })
                        }}
                        {...rest}
                >
                <SelectArrayInput optionText="identifier" />
            </ReferenceArrayInput>
                    )}
                 }
            </FormDataConsumer>
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
                    {/* <NumberInput source="adjustment" />
                    <NumberInput source="overheat_cooldown_rate" /> */}

                    <TextInput source="adjustment"  validate={validateNumber}/>
                    <TextInput source="overheat_cooldown_rate"  validate={validateNumber}/>
                    
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
                    reactions[r.identifier] = r
                })
                setReactions(reactions)
                // console.warn('reactions', reactions)
                setStatus('done')
            } catch(e) {
                setStatus(e)
            }
        }
    })()
    })
    return (
    <Create title="Create a Match" {...props}>
        <TabbedForm>
            <FormTab label="general">
            <TextField source="id" />
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
            <FormDataConsumer>
                 {({ formData, ...rest }) => {
                     // Extremely gnarly logic
                     (formData.reactions || []).forEach(r => {
                         if (r && r.identifier) {
                            reactions[r.identifier] = {...(reactions[r.identifier] || {}), ...r}
                         }
                     })
                     const reactionsById = {}
                     Object.values(reactions).forEach(r => {
                         if (r._id) {
                            reactionsById[r._id] = r
                         }
                     })
                     return (
                    <ReferenceArrayInput
                        label="Reactions (from collection)"
                        source="reactions"
                        reference="reactions"
                        // Format takes full reaction object and retrieves identifier used for lookup
                        format={(v) => (v || []).map( v => {
                            if (v && v.identifier) {
                                const possibleReaction = reactions[v.identifier]
    
                                return v.id || possibleReaction && possibleReaction._id || v
                            }
                        })}
                        // Parse takes ids (or whatever) from the controller and somehow puts back the full objects
                        parse={(v) => {
                            // console.warn('parsing', v, v.map(vId => reactions[vId]));
                            return (v || []).map(vId => {
                                // If is object, don't worry about it
                                if (typeof vId === 'object') {
                                    return vId
                                }
                                return reactionsById[vId]
                            })
                        }}
                        {...rest}
                >
                <SelectArrayInput optionText="identifier" />
            </ReferenceArrayInput>
                    )}
                 }
            </FormDataConsumer>
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