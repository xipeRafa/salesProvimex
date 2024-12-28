import { useContext } from 'react';

import { AddAuction } from './AddAuction';
import { AuctionCard } from './AuctionCard';

import { FireStoreDataContext } from '../../context/FireStoreDataContext';
import { AuthContext } from '../../context/AuthContext';

export const AuctionBody = () => {
  const { items, UpdateById, UpdateByIdInventario } = useContext(FireStoreDataContext);
  const { stateLogout } = useContext(AuthContext);

  console.log(items);

  return (
    <div className="">
      {/*{localStorage.getItem('userEmailLS') !== null && <AddAuction />}*/}

      {stateLogout ? (
        <div className="">
        {localStorage.getItem('userEmailLS') !== null ? (
            <AuctionCard items={items} UpdateById={UpdateById} UpdateByIdInventario={UpdateByIdInventario} key={Date.now()} />
            ) : (<p> </p>) }
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
