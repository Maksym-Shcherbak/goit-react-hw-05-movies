import {
  Form,
  FormButton,
  FormButtonLabel,
  FormInput,
} from './SearchForm.styled';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';

export const SearchForm = ({ query, saveName }) => {
  return (
    <Form>
      <FormButton type="submit">
        <FiSearch />
        <FormButtonLabel>Search</FormButtonLabel>
      </FormButton>

      <FormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="searchQuery"
        value={query}
        onChange={saveName}
      />
    </Form>
  );
};

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  saveName: PropTypes.func.isRequired,
};
