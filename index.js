   let bankBranchInstance = null;
    class BankBranch {
     constructor(branchInfo) {
        if (!bankBranchInstance) {
          this.branchInfo = branchInfo;
          bankBranchInstance = this;
        }
        return bankBranchInstance;
      }
    
      getBranchInfo() {
        return this.branchInfo;
      }
    }
     const branchA = new BankBranch("Branch A");
    console.log(branchA.getBranchInfo()); 
    
    const branchB = new BankBranch("Branch B");
    console.log(branchB.getBranchInfo());
    
    console.log(branchA === branchB);
