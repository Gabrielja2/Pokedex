import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';


function Provider({children}) {

  const [filterName, setFilterName] = useState('');
 
  const contextType = {    
    filterName,
    setFilterName,
  };

  return (
    <Context.Provider value={ contextType }>
      {children}
    </Context.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;