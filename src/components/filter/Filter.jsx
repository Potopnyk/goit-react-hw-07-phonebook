import { Input, Label } from './filter.styled';
import { setFilter } from 'redux/filterSlice'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { selectFilter } from 'redux/selectors'; 

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Label> 
      <Input
        type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
        placeholder='Find contacts'
      />
    </Label>
  );
};
