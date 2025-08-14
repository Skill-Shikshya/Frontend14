export function insertRowPromise(result) {
  console.log("Inserting row with data:", result);
  return new Promise((res) =>
    setTimeout(() => {
      // Simulate database insertion
      const insertResult = {
        ...result,
        insertId: Math.floor(Math.random() * 1000),
        inserted: true,
        insertTime: new Date().toISOString(),
      };

      console.log("Row inserted successfully with ID:", insertResult.insertId);

      // Call the callback with no error
      res(insertResult);
    }, 500)
  );
}

export function yetAnotherOperationPromise(someParameter) {
  console.log("Performing yet another operation with:", someParameter);
  return new Promise((res) =>
    setTimeout(() => {
      // Simulate final operation
      const finalResult = {
        parameter: someParameter,
        operationComplete: true,
        finalValue: `Final_${someParameter}_${Date.now()}`,
      };

      // Call the callback with the final result
      res(finalResult);
    }, 300)
  );
}
