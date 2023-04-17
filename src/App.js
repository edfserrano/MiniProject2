import { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import {addBalanceOwnerOperation, addBalanceCounterpartyOperation, claimCounterpartyOperation, claimOwnerOperation} from "./utils/operation";

const App = () => {
  // Players holding lottery tickets
  const [players, setPlayers] = useState([]);
  const [tickets, setTickets] = useState(5);
  const [loading, setLoading] = useState(false);

  // Set players and tickets remaining
  useEffect(() => {
    // TODO 9 - Fetch players and tickets remaining from storage
    (async () => {
      setPlayers([]);
      setTickets(5);
    })();
  }, []);

  // TODO 7.a - Complete onBuyTicket function
  const onAddBalanceOwner = async () => {
    try {
      setLoading(true);
      await addBalanceOwnerOperation();
      alert("Transaction Confirmed!");
    } catch (err) {
      alert("Transaction Failed: ", err.message);
    }
    
  };

  const onAddBalanceCounterparty = async () => {
    try {
      setLoading(true);
      await addBalanceCounterpartyOperation();
      alert("Transaction Confirmed!");
    } catch (err) {
      alert("Transaction Failed: ", err.message);
    }
    
  };

  const onClaimCounterparty = async () => {
    try {
      setLoading(true);
      await claimCounterpartyOperation();
      alert("Transaction Confirmed!");
    } catch (err) {
      alert("Transaction Failed: ", err.message);
    }
    
  };

  const onClaimOwner = async () => {
    try {
      setLoading(true);
      await claimOwnerOperation();
      alert("Transaction Confirmed!");
    } catch (err) {
      alert("Transaction Failed: ", err.message);
    }
  };

  // TODO 11.a - Complete onEndGame function
  const onEndGame = async () => {};

  return (
    <div className="h-100">
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        {/* Ticket remaining display */}
        <div className="py-1">
          {/* Action Buttons */}
          <button onClick={onAddBalanceOwner} className="btn btn-primary btn-lg">
            Add Balance (Owner)
          </button>
        </div>
        <div className="mt-2">
          <button onClick={onAddBalanceCounterparty} className="btn btn-primary btn-lg">
            Add Balance (Counterparty)
          </button>
        </div>
        <div className="mt-2">
          <button onClick={onClaimOwner} className="btn btn-primary btn-lg">
            Claim (Owner)
          </button>
        </div>
        <div className="mt-2">
          <button onClick={onClaimCounterparty} className="btn btn-primary btn-lg">
            Claim (Counterparty)
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;



// EAST EAST EAST EAST EAST EAST EAST EAST EAST EAST EAST EAST