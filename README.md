# [JSL08] Submission: Singleton Pattern for Bank Branch Management

Singleton Design Pattern in JavaScript
This code demonstrates the Singleton design pattern implemented in JavaScript using a BankBranch class.

What is the Singleton Pattern?

The Singleton pattern ensures a class has only one instance, and it provides a global access point to that single instance. It's useful for scenarios where you only need one object of a particular class throughout your application.

Code Breakdown:

bankBranchInstance Variable:

A global variable bankBranchInstance is declared and initialized to null. This will store the single instance of the BankBranch class.
BankBranch Class:

The BankBranch class represents a bank branch with information stored in the branchInfo property.
Constructor:
The constructor takes a branchInfo argument during instantiation.
It checks if bankBranchInstance is already set (meaning an instance exists).
If there's no existing instance (!bankBranchInstance), it assigns the provided branchInfo to the this.branchInfo property and sets bankBranchInstance to the current object (this).
The constructor always returns bankBranchInstance to ensure you get the single instance.
getBranchInfo Method:
This method simply returns the stored branchInfo.
Creating Branch Instances:

Two BankBranch instances are created: branchA with info "Branch A" and branchB with info "Branch B".
Due to the Singleton pattern, both branchA and branchB will refer to the same underlying object instance.
Checking Instance Equality:

Finally, it compares branchA and branchB using the strict equality operator (===). Since they both point to the same object, it will print true.
Benefits of Singleton Pattern:

Enforces single instance: Guarantees only one object exists for a class.
Global access point: Provides a central way to access the single instance.
Memory efficiency: Avoids creating multiple instances of the same object.
Potential Drawbacks:

Tight coupling: Can make code less flexible and harder to test due to global state.
Limited extensibility: Adding new instances in the future might require refactoring.
Alternatives:

Consider using dependency injection or a module pattern for more loosely coupled and testable code if creating multiple instances might be necessary in the future.
This example showcases a basic implementation of the Singleton pattern. Remember to weigh the benefits and drawbacks when deciding if this pattern is suitable for your specific project requirements

