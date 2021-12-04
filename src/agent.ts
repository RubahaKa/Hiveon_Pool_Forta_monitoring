import { 
  TransactionEvent, 
  Finding, 
  HandleTransaction, 
  FindingSeverity, 
  FindingType,

} from 'forta-agent'



const handleTransaction: HandleTransaction = async (txEvent: TransactionEvent) => {
  const findings: Finding[] = [];
  if (txEvent.transaction.from === "0x1ad91ee08f21be3de0ba2ba6918e714da6b45836"){
    findings.push(Finding.fromObject({
      name: "HiveonPoolTransfer",
      description: `Hiveon Pool transfered some value`,
      alertId: "FORTA-100000",
      severity: FindingSeverity.Info,
      type: FindingType.Info,
      metadata:{
        value: txEvent.transaction.value,
        to: `${txEvent.to}`
      }
    }))

  }
  return findings;
}

export default {
  handleTransaction
}