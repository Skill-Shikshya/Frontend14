export function insertRow(result, callback) {
  console.log("Inserting row with data:", result);

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
    callback(null, insertResult);
  }, 500);
}

export function yetAnotherOperation(someParameter, callback) {
  console.log("Performing yet another operation with:", someParameter);

  setTimeout(() => {
    // Simulate final operation
    const finalResult = {
      parameter: someParameter,
      operationComplete: true,
      finalValue: `Final_${someParameter}_${Date.now()}`,
    };

    // Call the callback with the final result
    callback(finalResult);
  }, 300);
}
