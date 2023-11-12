import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { SearchBarHeader } from './SearchBar.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const Searchbar = ({ onGetMovies }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onHandleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.info('Enter query');
      return;
    }
    onGetMovies(searchQuery);
    setSearchQuery('');
    const form = e.target;
    form.reset();
  };

  const saveName = e => {
    const { value } = e.target;
    setSearchQuery(value);
  };
  return (
    <SearchBarHeader onSubmit={onHandleSubmit}>
      <SearchForm query={searchQuery} saveName={saveName} />
    </SearchBarHeader>
  );
};

Searchbar.propTypes = {
  onGetMovies: PropTypes.func.isRequired,
};
