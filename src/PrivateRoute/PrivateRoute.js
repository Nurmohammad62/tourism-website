import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

// Private route to private some route
const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <Button className='mx-auto' variant="success" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    }
    return (
        <Route
            {...rest}
            render={({location}) => user.email ?
            children
            :
            <Redirect
                to={{
                    pathname:'/login',
                    state: {from: location}
                }}
            ></Redirect>
        }
        ></Route>
    );
};

export default PrivateRoute;