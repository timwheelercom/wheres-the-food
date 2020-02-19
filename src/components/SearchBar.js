import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';


const SearchBar = ({placeholder, searchTerm, onSearchTermChange, onSearchTermSubmit, iconName, size, style}) => {
    return (
        <View style={{...styles.searchContainer, ...style}}>
            <Feather style={styles.searchIcon} name={iconName} size={size}/>
            <TextInput
                value={searchTerm}
                style={styles.searchInput}
                autoCapitalize={'none'}
                autoCorrect={false}
                placeholder={placeholder}
                onChangeText={(newSearchTerm) => onSearchTermChange(newSearchTerm)}
                onSubmitEditing={() => onSearchTermSubmit()}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#FAFBFC',
        height: 30,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#E1DFE6'
    },
    searchIcon: {
        marginLeft: 10,
        opacity: 0.5,
        color: '#8f99a9'
    },
    searchInput: {
        fontSize: 14,
        marginHorizontal: 5,
        flex: 1,
        color: '#8f99a9'
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20,
        color: '#8f99a9'
    }
});


export default SearchBar;
