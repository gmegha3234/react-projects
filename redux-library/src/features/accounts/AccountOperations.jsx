import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./AccountSlice";
export default function AccountOperations(){
  const [depositAmount,setdepositAmount]=useState("");
  const [withdrawAmount,setwithdrawAmount]=useState("");
  const [loan,setLoan]=useState("");
  const [loanPurpose,setLoanPurpose]=useState("");
  const dispatch = useDispatch();
  const account = useSelector((store) => store.account);
  
    return (
      <div className="account-operations">
        <h2>Your Account Operations</h2>
        <div className="inner-account-container">
          <label>Deposit</label>
          <input
            type="text"
            name="depositAmount"
            id=""
            value={depositAmount}
            onChange={(e) => setdepositAmount(e.target.value)}
          />
          <select>
            <option value="us_dollar">US Dollar</option>
            <option value="in_rupees">Indian Rupees</option>
          </select>
          <button
            onClick={() =>{
              if(!depositAmount) return ;
              dispatch(deposit(parseInt(depositAmount)))
              setdepositAmount("");
            }
            }
          >
            Deposit
          </button>
        </div>
        <div className="inner-account-container">
          <label>Withdraw</label>
          <input
            type="text"
            name="withdraw"
            id=""
            value={withdrawAmount}
            onChange={(e) => setwithdrawAmount(e.target.value)}
          />
          <button
            onClick={() =>{
              dispatch(withdraw(parseInt(withdrawAmount)));
              setwithdrawAmount("");
            }
          }
          >
            Withdraw
          </button>
        </div>
        <div className="inner-account-container">
          <label>Request Loan</label>
          <input
            type="text"
            name="request_loan"
            id=""
            placeholder="Loan amount"
            value={loan}
            onChange={(e) => setLoan(e.target.value)}
          />
          <input
            type="text"
            name="loan_purpose"
            id=""
            placeholder="Loan purpose"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
          />
          <button
            onClick={() =>{
              if(!loan || !loanPurpose) return ;
              dispatch(requestLoan(parseInt(loan),loanPurpose));
              setLoan("");
              setLoanPurpose("");
            }
          }
          >
            Request Loan
          </button>
        </div>
        {account.loan > 0 && <div className="inner-account-container">
          <p>Pay Back {account.loan}</p>
          <button onClick={()=>dispatch(payLoan())}>Pay Loan</button>
        </div>}
      </div>
    );
}