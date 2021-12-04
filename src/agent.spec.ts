import {
    createTransactionEvent,
    HandleBlock,
    HandleTransaction
  } from "forta-agent"
  import agent from "./agent"
  
  describe("forta forever", () => {
    let handleTransaction: HandleTransaction
  
    const createTransactionFrom= (fromMe:string) => createTransactionEvent({
      transaction:{
        hash:"0",
        to:"0x1",
        from: fromMe,
        nonce:1,
        gas:"",
        gasPrice:"",
        value:"",
        data:"",
        r:"",
        s:"",
        v:""

        
      },
      type:undefined,
      network:undefined,
      receipt: {} as any,
      block:{}as any,
      
      


    })
  
    beforeAll(() => {
      handleTransaction = agent.handleTransaction
    })
  
    describe("tx handler", () => {
      it(" my pool transfer", async () => {
        const txEvent = createTransactionFrom("0x1ad91ee08f21be3de0ba2ba6918e714da6b45836")
  
        const findings = await handleTransaction(txEvent)
  
        expect(findings.length).toBe(1)
      })
      it(" not my pool transfer", async () => {
        const txEvent = createTransactionFrom("")
  
        const findings = await handleTransaction(txEvent)
  
        expect(findings.length).toBe(0)
      })
  
    })
  })