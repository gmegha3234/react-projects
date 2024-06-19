import { connect} from "react-redux"
export function BalanceDisplay({balance}){
//  const balance=useSelector((store)=>store.account.balance)
  return <p className="balance">Current Balance:{balance}</p>
}
function mapStateToProps(state){
   return {
     balance:state.account.balance
   }
}

export default connect(mapStateToProps)(BalanceDisplay);