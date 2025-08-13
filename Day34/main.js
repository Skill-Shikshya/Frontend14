import { insertRow, yetAnotherOperation } from "./main2.js";

function doSomething(param, param2, callback) {
  // Simulate some asynchronous operation
  console.log(`Processing ${param} and ${param2}...`);

  setTimeout(() => {
    // Simulate some processing and return a result
    const processedData = {
      original: [param, param2],
      processed: `${param}_${param2}_processed`,
      timestamp: new Date().toISOString(),
    };

    // Call the callback with no error and the processed data
    callback(null, processedData);
  }, 1000);
}

function doMore(paramx, callback) {
  console.log("Doing more processing with:", paramx);

  setTimeout(() => {
    // Simulate additional processing
    const moreProcessedData = {
      ...paramx,
      additionalField: "enhanced_data",
      processingLevel: 2,
    };

    // Call the callback with no error and enhanced data
    callback(null, moreProcessedData);
  }, 800);
}

// Example usage with your original code structure:
doSomething("actualParam1", "actualParam2", function (err, paramx) {
  if (err) {
    console.error("Error in doSomething:", err);
    return;
  }

  doMore(paramx, function (err, result) {
    if (err) {
      console.error("Error in doMore:", err);
      return;
    }

    insertRow(result, function (err, insertResult) {
      if (err) {
        console.error("Error in insertRow:", err);
        return;
      }

      yetAnotherOperation("finalParameter", function somethingElse(x) {
        console.log("this is x", x);
        console.log("All operations completed successfully!");
      });
    });
  });
});

// Alternative: Modern approach using Promises/async-await
// async function callDoSomething() {
//   try {
//     const paramx = await doSomethingPromise("actualParam1", "actualParam2");
//     const result = await doMorePromise(paramx);
//     await insertRowPromise(result);
//     const x = await yetAnotherOperationPromise("actualSomeParameter");
//     console.log("this is x", x);
//   } catch (err) {
//     console.error("Error:", err);
//   }
// }
